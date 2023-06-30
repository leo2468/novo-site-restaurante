function enviar(){

    let nome = window.document.getElementById('nome')
    let email = window.document.getElementById('email')
    let mensagem = window.document.getElementById('mensagem')
    let res = window.document.getElementById('res')

    let n = String(nome.value)
    let e = String(email.value)
    let m = String(mensagem.value)

    if(n == '' || e == '' ||  m == ''){
        res.innerText = ` Erro verifique os dados e tente novamente!!`
        res.style.color = 'red'
    }else if(n == 'leo' && e == 'leo@' && m == 'ola'){
    window.location ='ajuda.html'
    res.innerText = ` Enviado com sucesso`
   // res.style.color = 'black'
   res.innerText = ''
}

}