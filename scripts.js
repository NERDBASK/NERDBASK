function adicionarTime() {
    var url = "https://cdn.nba.com/logos/nba/1610612738/global/L/logo.svg"
    listarFilmesNaTela(url)
}

function listarFilmesNaTela(filme) {
    var listaFilmes = document.querySelector('#listaTimes')
    var elementoFilme = "<img src=" + filme + ">"
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}
