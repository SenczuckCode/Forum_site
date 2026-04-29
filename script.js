function validarLogin(event) {
    event.preventDefault();
    
    const usuarioInput = document.getElementById("usuario");
    const senhaInput = document.getElementById("senha");
    const mensagemErro = document.getElementById("emailHelp");


    const usuarioFixo = "admin";
    const senhaFixa = "1234";

    
    if (usuarioInput.value === "" || senhaInput.value === "") {
        mensagemErro.innerText = "Preencha todos os campos.";
        return; 
    }

    
    if (usuarioInput.value === usuarioFixo && senhaInput.value === senhaFixa) {
        mensagemErro.innerText = "Login realizado!";
        mensagemErro.style.color = "#2ecc71"; 

        setTimeout(() => {
            window.location.href = "forum.html";
        }, 1000);
    } 
 
    else {
        mensagemErro.innerText = "Usuário ou senha incorretos";
        mensagemErro.style.color = "red";
        senhaInput.value = "";
    }
}
