function adicionarTime() {
    var campoFilmeFavorito = document.querySelector('#time').value
    listarFilmesNaTela(times(campoFilmeFavorito))
}

function listarFilmesNaTela(url) {
    var listaFilmes = document.querySelector('#listaFilmes')
    var elementoFilme = "<img src=" + url + ">"
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}

function times(time){
    var sayings = carrega_sayings();
    var id = '';
    console.log(time);  
    for ( var [key, value] of sayings){
      if (key.includes(time)){
          id = value;
          console.log(key, value);
      }
    }
    return "https://cdn.nba.com/logos/nba/" + id + "/global/L/logo.svg";
}

function carrega_sayings(){
  var sayings = new Map(); 
  sayings.set('Boston Celtics',1610612738);
  sayings.set('Brooklyn Nets',1610612751);
  sayings.set('New York Knicks',1610612752);
  sayings.set('Philadelphia 76ers',1610612755);
  sayings.set('Toronto Raptors',1610612761);
  sayings.set('Chicago Bulls',1610612741);
  sayings.set('Cleveland Cavaliers',1610612739);
  sayings.set('Detroit Pistons',1610612765);
  sayings.set('Indiana Pacers',1610612754);
  sayings.set('Milwaukee Bucks',1610612749);
  sayings.set('Atlanta Hawks',1610612737);
  sayings.set('Charlotte Hornets',1610612766);
  sayings.set('Miami Heat',1610612748);
  sayings.set('Orlando Magic',1610612753);
  sayings.set('Washington Wizards',1610612764);
  sayings.set('Denver Nuggets',1610612743);
  sayings.set('Minnesota Timberwolves',1610612750);
  sayings.set('Oklahoma City Thunder',1610612760);
  sayings.set('Portland Trail Blazers',1610612757);
  sayings.set('Utah Jazz',1610612762);
  sayings.set('Golden State Warriors',1610612744);
  sayings.set('LA Clippers',1610612746);
  sayings.set('Los Angeles Lakers',1610612747);
  sayings.set('Phoenix Suns',1610612756);
  sayings.set('Sacramento Kings',1610612758);
  sayings.set('Dallas Mavericks',1610612742);
  sayings.set('Houston Rockets',1610612745);
  sayings.set('Memphis Grizzlies',1610612763);
  sayings.set('New Orleans Pelicans',1610612740);
  sayings.set('San Antonio Spurs',1610612759);
  sayings.set('Boston Celtics',1610612738);
  sayings.set('Brooklyn Nets',1610612751);
  sayings.set('New York Knicks',1610612752);
  sayings.set('Philadelphia 76ers',1610612755);
  sayings.set('Toronto Raptors',1610612761);
  sayings.set('Chicago Bulls',1610612741);
  sayings.set('Cleveland Cavaliers',1610612739);
  sayings.set('Detroit Pistons',1610612765);
  sayings.set('Indiana Pacers',1610612754);
  sayings.set('Milwaukee Bucks',1610612749);
  sayings.set('Atlanta Hawks',1610612737);
  sayings.set('Charlotte Hornets',1610612766);
  sayings.set('Miami Heat',1610612748);
  sayings.set('Orlando Magic',1610612753);
  sayings.set('Washington Wizards',1610612764);
  sayings.set('Denver Nuggets',1610612743);
  sayings.set('Minnesota Timberwolves',1610612750);
  sayings.set('Oklahoma City Thunder',1610612760);
  sayings.set('Portland Trail Blazers',1610612757);
  sayings.set('Utah Jazz',1610612762);
  sayings.set('Golden State Warriors',1610612744);
  sayings.set('LA Clippers',1610612746);
  sayings.set('Los Angeles Lakers',1610612747);
  sayings.set('Phoenix Suns',1610612756);
  sayings.set('Sacramento Kings',1610612758);
  sayings.set('Dallas Mavericks',1610612742);
  sayings.set('Houston Rockets',1610612745);
  sayings.set('Memphis Grizzlies',1610612763);
  sayings.set('New Orleans Pelicans',1610612740);
  sayings.set('San Antonio Spurs',1610612759);
  return sayings;
}
