function selecionarALBUM(imgMiniaturaEscolhida){
    document.getElementById("imgPrincipal").src = imgMiniaturaEscolhida.src;
}

function mudarAlbum(botaoEscolhido){
    if(botaoEscolhido.id == "botaoMoonstoneBlue"){
        document.getElementById('preco-album').innerHTML = "R$229,90";
    }
    else if(botaoEscolhido.id == "botaoBloodMoon"){
        document.getElementById('preco-album').innerHTML = "R$229,90";
    }
    else if(botaoEscolhido.id == "botaoJadeGreen"){
        document.getElementById('preco-album').innerHTML = "R$229,90";
    }
    else if(botaoEscolhido.id == "botaoMahogany"){
        document.getElementById('preco-album').innerHTML = "R$229,90";
    }
}

