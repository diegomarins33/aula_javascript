function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://www.google.com");
    //window.location.href = "https://www.google.com"; 
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
    elemento.innerHTML = "Obrigado por passar o mouse!"
    //alert("trocar texto")
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página carregada.")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}