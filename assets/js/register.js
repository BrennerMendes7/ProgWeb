$(function(){

    $("#tipo-cadastro-pj").on("click", function(){
        $("#cadastro-nascimento").attr("disabled", true); // desabilita o campo data de nascimento
        $("[for='cpf-cnpj']").html("CNPJ:"); // altera o label cpf para cnpj
        $("#cadastro-cpf-cnpj").attr("placeholder", "Informe seu CNPJ") // altera o placeholder do input CPF-CNPJ
        $("#cadastro-nascimento").val(""); // limpa o valor de data de nascimento
        $("#cadastro-nascimento").parent().hide(); // oculta o campo de data de nascimento
    });

    $("#tipo-cadastro-pf").on("click", function(){
        $("#cadastro-nascimento").attr("disabled", false); // habilita o campo data de nascimento
        $("[for='cpf-cnpj']").html("CPF:"); // altera o label cnpj para cpf
        $("#cadastro-cpf-cnpj").attr("placeholder", "Informe seu CPF") // altera o placeholder do input CPF-CNPJ
        $("#cadastro-nascimento").parent().show(); // exibe o campo de data de nascimento
    });

    $("#botaocadastrar").on("click", function(evento){
        
        // verifica se os campos de senha são iguais
        if($("#cadastro-senha-1").val() !== $("#cadastro-senha-2").val()) {
            evento.preventDefault();
            alert("As senhas não são iguais");
        }

        var cpfCnpj = $("#cadastro-cpf-cnpj").val();

        // verifica qual tipo de Pessoa está selecionada (Física ou Jurídica)
        // verifica se campos CPF/CNPJ possuem mais caracteres do que o permitido
        if($("#tipo-cadastro-pf").is(":checked")) {
            if(cpfCnpj.length !== 11) {
                evento.preventDefault();
                alert("O CPF digitado é inválido!");
            }
        } else {
            if(cpfCnpj.length !== 15) {
                 evento.preventDefault();
                alert("O CNPJ digitado é inválido");
            }   
        }

    })

})