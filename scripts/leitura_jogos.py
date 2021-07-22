import pandas as pd
import requests
import json
import sys
import os


def retorna_header():
  headers: dict = {'Accept': '*/*',
                  'Accept-Encoding': 'gzip, deflate, br',
                  'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
                  'Connection': 'keep-alive',
                  'Host': 'stats.nba.com',
                  'Origin': 'https://www.nba.com',
                  'Referer': 'https://www.nba.com/',
                  'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
                  'sec-ch-ua-mobile': '?0',
                  'Sec-Fetch-Dest': 'empty',
                  'Sec-Fetch-Mode': 'cors',
                  'Sec-Fetch-Site': 'same-site',
                  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}

  return headers

def jogo_por_Q(GameID, startPeriod, endPeriod):
  
  num_Q = f'Q{startPeriod}' if startPeriod == endPeriod else f'T{startPeriod}-{endPeriod}'

  rangeType = '1'
  startRange = '0'
  endRange = '31800'

  headers = retorna_header()  
  url_base = f'https://stats.nba.com/stats/boxscoretraditionalv3?GameID={GameID}&LeagueID=00&'
  url_stats = f'{url_base}endPeriod={endPeriod}&endRange={endRange}&rangeType={rangeType}&startPeriod={startPeriod}&startRange={startRange}'

  with requests.Session() as sessao:
          resposta: requests.models.Response = sessao.get(url_stats, headers=headers)

  y = json.loads(resposta.content)

  name_homeTeam = y['boxScoreTraditional']['homeTeam']['teamName']
  name_awayTeam = y['boxScoreTraditional']['awayTeam']['teamName']
  gameId = y['boxScoreTraditional']['gameId']
  
  nome_pasta_jogo = f'{gameId}_{name_homeTeam}_{name_awayTeam}'
  
  try:
    os.mkdir(f'dados/{nome_pasta_jogo}')
  except OSError:
    pass

  pd.json_normalize(y['boxScoreTraditional']['homeTeam']['players']).to_csv(f'dados/{nome_pasta_jogo}/{gameId}_{name_homeTeam}_{num_Q}.csv')
  pd.json_normalize(y['boxScoreTraditional']['awayTeam']['players']).to_csv(f'dados/{nome_pasta_jogo}/{gameId}_{name_awayTeam}_{num_Q}.csv')

  df_awayTeam_statistics = pd.json_normalize(y['boxScoreTraditional']['awayTeam']['statistics'])
  df_homeTeam_statistics = pd.json_normalize(y['boxScoreTraditional']['homeTeam']['statistics'])
  df_game_statistics = df_homeTeam_statistics.append(df_awayTeam_statistics)
  df_game_statistics.index = [name_homeTeam, name_awayTeam]
  df_game_statistics.to_csv(f'dados/{nome_pasta_jogo}/{gameId}_game_statistics_{num_Q}.csv')

_, GameID, startPeriod, endPeriod = sys.argv

jogo_por_Q(GameID, startPeriod, endPeriod)