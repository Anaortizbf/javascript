function verificar() { //evento e função verificar, p/verificar idade
    var data = new Date() //pegar data atual
    var ano = data.getFullYear() //pegar ano atual com 4 dígitos
    var fano = document.getElementById('txtano')//formulário para pegar o ano que a pessoa digitar
    var res = document.querySelector('div#res')//div de resultado
    if (fano.value.length == 0 || Number(fano.value) > ano ) { //se o valor digitado em fano for igual a 0 (pessoa não digitou ano) ou o fano for maior que o ano atual...
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')//capita o sexo
        var idade = ano - Number(fano.value) //a idade será o valor do ano atual - o ano figitado em fano
        var gênero = '' //variável gênero
        var img = document.createElement('img')//carrega foto
        img.setAttribute('id','foto')//é um id para formatarmos as fotos
        if (fsex[0].checked) { //se marcar sexo masculino, gen masculino
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }

        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'//centralizou linha do ''detectamos''
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}
