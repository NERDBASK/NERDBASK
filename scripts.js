function adicionarTime() {
    var campoFilmeFavorito = document.querySelector('#time').value
    listarFilmesNaTela(times(campoFilmeFavorito))
}

function listarFilmesNaTela(url) {
    var listaFilmes = document.querySelector('#listaFilmes')
    var elementoFilme = "<img src=" + url + ">"
    listaFilmes.innerHTML = elementoFilme
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
    sayings.set('BOSTON CELTICS',1610612738);
    sayings.set('BROOKLYN NETS',1610612751);
    sayings.set('NEW YORK KNICKS',1610612752);
    sayings.set('PHILADELPHIA 76ERS',1610612755);
    sayings.set('TORONTO RAPTORS',1610612761);
    sayings.set('CHICAGO BULLS',1610612741);
    sayings.set('CLEVELAND CAVALIERS',1610612739);
    sayings.set('DETROIT PISTONS',1610612765);
    sayings.set('INDIANA PACERS',1610612754);
    sayings.set('MILWAUKEE BUCKS',1610612749);
    sayings.set('ATLANTA HAWKS',1610612737);
    sayings.set('CHARLOTTE HORNETS',1610612766);
    sayings.set('MIAMI HEAT',1610612748);
    sayings.set('ORLANDO MAGIC',1610612753);
    sayings.set('WASHINGTON WIZARDS',1610612764);
    sayings.set('DENVER NUGGETS',1610612743);
    sayings.set('MINNESOTA TIMBERWOLVES',1610612750);
    sayings.set('OKLAHOMA CITY THUNDER',1610612760);
    sayings.set('PORTLAND TRAIL BLAZERS',1610612757);
    sayings.set('UTAH JAZZ',1610612762);
    sayings.set('GOLDEN STATE WARRIORS',1610612744);
    sayings.set('LA CLIPPERS',1610612746);
    sayings.set('LOS ANGELES LAKERS',1610612747);
    sayings.set('PHOENIX SUNS',1610612756);
    sayings.set('SACRAMENTO KINGS',1610612758);
    sayings.set('DALLAS MAVERICKS',1610612742);
    sayings.set('HOUSTON ROCKETS',1610612745);
    sayings.set('MEMPHIS GRIZZLIES',1610612763);
    sayings.set('NEW ORLEANS PELICANS',1610612740);
    sayings.set('SAN ANTONIO SPURS',1610612759);
    sayings.set('BOSTON CELTICS',1610612738);
    sayings.set('BROOKLYN NETS',1610612751);
    sayings.set('NEW YORK KNICKS',1610612752);
    sayings.set('PHILADELPHIA 76ERS',1610612755);
    sayings.set('TORONTO RAPTORS',1610612761);
    sayings.set('CHICAGO BULLS',1610612741);
    sayings.set('CLEVELAND CAVALIERS',1610612739);
    sayings.set('DETROIT PISTONS',1610612765);
    sayings.set('INDIANA PACERS',1610612754);
    sayings.set('MILWAUKEE BUCKS',1610612749);
    sayings.set('ATLANTA HAWKS',1610612737);
    sayings.set('CHARLOTTE HORNETS',1610612766);
    sayings.set('MIAMI HEAT',1610612748);
    sayings.set('ORLANDO MAGIC',1610612753);
    sayings.set('WASHINGTON WIZARDS',1610612764);
    sayings.set('DENVER NUGGETS',1610612743);
    sayings.set('MINNESOTA TIMBERWOLVES',1610612750);
    sayings.set('OKLAHOMA CITY THUNDER',1610612760);
    sayings.set('PORTLAND TRAIL BLAZERS',1610612757);
    sayings.set('UTAH JAZZ',1610612762);
    sayings.set('GOLDEN STATE WARRIORS',1610612744);
    sayings.set('LA CLIPPERS',1610612746);
    sayings.set('LOS ANGELES LAKERS',1610612747);
    sayings.set('PHOENIX SUNS',1610612756);
    sayings.set('SACRAMENTO KINGS',1610612758);
    sayings.set('DALLAS MAVERICKS',1610612742);
    sayings.set('HOUSTON ROCKETS',1610612745);
    sayings.set('MEMPHIS GRIZZLIES',1610612763);
    sayings.set('NEW ORLEANS PELICANS',1610612740);
    sayings.set('SAN ANTONIO SPURS',1610612759);
    return sayings;
}
