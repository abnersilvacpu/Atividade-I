

function cria_elemento(elemento){
    return document.createElement(elemento);
}

function enviarFormulario(formulario) {   
    
    if (document.getElementById("nome-input").value == "" || document.getElementById("email-input").value == "" || document.getElementById("telefone-input").value == "") {
        alert("Preencha todos os campos para seguir!");
        return false
    }
    else{
    // Pego os valores dos campos
    var nome = document.getElementById("nome-input").value;
    var email = document.getElementById("email-input").value;
    var telefone = document.getElementById("telefone-input").value;
    // Crio os elementos
    let tabela = document.getElementById("id-tabela");
    let thead = cria_elemento("thead");
    let tbody = cria_elemento("tbody");
    let tfoot = cria_elemento("tfoot");
    //Crio o vetor que representa a linha 
    let conteudo_tabela = [nome, email, telefone];
    let linhaHead = cria_elemento("tr"); 
    //Coloco os valores dos campos na linha
    for(i=0; i< conteudo_tabela.length; i++){

        let th = cria_elemento("th");
        th.textContent = conteudo_tabela[i];
        linhaHead.appendChild(th);
    }
    thead.appendChild(linhaHead);
    
    tabela.appendChild(thead);
    tabela.appendChild(tbody);
    tabela.appendChild(tfoot);
    //Limpo os campos
    document.getElementById("nome-input").value="";
    document.getElementById("email-input").value="";
    document.getElementById("telefone-input").value="";

    return false;
}
}


