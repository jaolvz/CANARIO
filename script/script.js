

function dark()
{

    var pagina = document.getElementById("html");
    var logo = document.getElementById("logo");
    var btn = document.getElementById("btnDark");
    var tampa = document.getElementById("tampa");
    
    tampa.classList.remove("tampaEsquerda");
    tampa.classList.add("tampaDireita");
    logo.setAttribute("src","imagens/cdark.png");
    pagina.classList.add("dark");
    btn.setAttribute("onclick","white()");
}

function white()
{
    
    var pagina = document.getElementById("html");
    var logo = document.getElementById("logo");
    var btn = document.getElementById("btnDark")
    var tampa = document.getElementById("tampa");
    
    tampa.classList.remove("tampaDireita");
    tampa.classList.add("tampaEsquerda");
    logo.setAttribute("src","imagens/canario_logo.png");
    pagina.classList.remove("dark");
    btn.setAttribute("onclick","dark()");
    
}

function abriranuncio ()

{   
   
    document.getElementById("anuncio").style.display="block";
    document.getElementById("meuBody").style.overflow="hidden";
}

function fecharAnuncio()
{
    document.getElementById("anuncio").style.display="none";
    document.getElementById("body").style.overflow="visible";
  
}


function entrar()

{
    var usuario = document.getElementById("user");


    if( usuario.value=="")
    { usuario.value="USUARIO INCORRETO";
      
    }
    else{
        var nome = usuario.value;
        window.location="pagInicial.html";
    }
}



