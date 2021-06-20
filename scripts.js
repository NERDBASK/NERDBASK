var sayings = new Map(); 
sayings.set('Boston Celtics',610612738);
sayings.set('Brooklyn Nets',610612751);
sayings.set('New York Knicks',610612752);
sayings.set('Philadelphia 76ers',610612755);
sayings.set('Toronto Raptors',610612761);
sayings.set('Chicago Bulls',610612741);
sayings.set('Cleveland Cavaliers',610612739);
sayings.set('Detroit Pistons',610612765);
sayings.set('Indiana Pacers',610612754);
sayings.set('Milwaukee Bucks',610612749);
sayings.set('Atlanta Hawks',610612737);
sayings.set('Charlotte Hornets',610612766);
sayings.set('Miami Heat',610612748);
sayings.set('Orlando Magic',610612753);
sayings.set('Washington Wizards',610612764);
sayings.set('Denver Nuggets',610612743);
sayings.set('Minnesota Timberwolves',610612750);
sayings.set('Oklahoma City Thunder',610612760);
sayings.set('Portland Trail Blazers',610612757);
sayings.set('Utah Jazz',610612762);
sayings.set('Golden State Warriors',610612744);
sayings.set('LA Clippers',610612746);
sayings.set('Los Angeles Lakers',610612747);
sayings.set('Phoenix Suns',610612756);
sayings.set('Sacramento Kings',610612758);
sayings.set('Dallas Mavericks',610612742);
sayings.set('Houston Rockets',610612745);
sayings.set('Memphis Grizzlies',610612763);
sayings.set('New Orleans Pelicans',610612740);
sayings.set('San Antonio Spurs',610612759);
sayings.set('Boston Celtics',610612738);
sayings.set('Brooklyn Nets',610612751);
sayings.set('New York Knicks',610612752);
sayings.set('Philadelphia 76ers',610612755);
sayings.set('Toronto Raptors',610612761);
sayings.set('Chicago Bulls',610612741);
sayings.set('Cleveland Cavaliers',610612739);
sayings.set('Detroit Pistons',610612765);
sayings.set('Indiana Pacers',610612754);
sayings.set('Milwaukee Bucks',610612749);
sayings.set('Atlanta Hawks',610612737);
sayings.set('Charlotte Hornets',610612766);
sayings.set('Miami Heat',610612748);
sayings.set('Orlando Magic',610612753);
sayings.set('Washington Wizards',610612764);
sayings.set('Denver Nuggets',610612743);
sayings.set('Minnesota Timberwolves',610612750);
sayings.set('Oklahoma City Thunder',610612760);
sayings.set('Portland Trail Blazers',610612757);
sayings.set('Utah Jazz',610612762);
sayings.set('Golden State Warriors',610612744);
sayings.set('LA Clippers',610612746);
sayings.set('Los Angeles Lakers',610612747);
sayings.set('Phoenix Suns',610612756);
sayings.set('Sacramento Kings',610612758);
sayings.set('Dallas Mavericks',610612742);
sayings.set('Houston Rockets',610612745);
sayings.set('Memphis Grizzlies',610612763);
sayings.set('New Orleans Pelicans',610612740);
sayings.set('San Antonio Spurs',610612759);

function adicionarTime() {
    var campoFilmeFavorito = document.querySelector('#time')
    listarFilmesNaTela(times(campoFilmeFavorito))
}

function listarFilmesNaTela(url) {
    var listaFilmes = document.querySelector('#listaFilmes')
    var elementoFilme = "<img src=" + url + ">"
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}

function times(time){
    var id = '';
    for ( var [key, value] of sayings){
    if (key.includes(time)){
        id = value;
        console.log(key, value);
    }
    return "https://cdn.nba.com/logos/nba/" + id + "/global/L/logo.svg"
}
