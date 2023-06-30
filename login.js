
        function mascara(){
            var cpf = window.document.getElementById('cpf')

            if(cpf.value.length == 3 || cpf.value.length == 7 ){
                cpf.value += '.'
                
            } else if(cpf.value.length == 11 ){
                cpf.value += '-'
            }
        }






        function entrar(){
        let nome = window.document.getElementById('nome')
        let cpf = window.document.getElementById('cpf')
        let email = window.document.getElementById('email')
        let senha = window.document.getElementById('senha')
        let res = window.document.getElementById('res')


        let n = String(nome.value)
        let c = Number(cpf.value)
        let e = String(email.value)
        let s = Number(senha.value)

        if (n == '' || c == '' || e == '' || s == ''){
            res.innerHTML = `Erro verifique os dados e tente novamente !! ` 
            res.style.color = 'red'
        }else if( n == 'leo' && c == 123 && e =='leo@' && s == 123){
            
            res.innerHTML = ''
            res.innerHTML = `voce foi logado com sucesso!!`
            res.style.color = 'green'
            window.location = 'inicial.html'
        }



        
        }