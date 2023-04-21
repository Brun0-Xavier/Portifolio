function verificar(){
    var res = document.getElementById('res')
    var nome = document.getElementById('txt')

    if(nome.value.length == 0 ){
        alert('Digite seu nome para continuar')
    } else {
        var img = document.getElementById('imagem').innerHTML = "<br><img id='bemvindo' src='welcome.jpg'>"
        res.innerHTML = `Olá ${nome.value} é um prazer te conhecer! ${img}`
    }
}

//segundo bloco

    var res2 = document.getElementById('resp2')
    
    var data = new Date()
    var ano = data.getFullYear()
    var Nome = document.getElementById('text-nome')
    var FAno = document.getElementById('idade')
    

function verificar2() {
    if( FAno.value.length == 0 || FAno > ano){
        alert('Preencha os dados')
    } else {
        var idade = ano - Number(FAno.value)
        if(idade < 18){
            alert('Proibido acesso de menores')
        } else {
            //alert('Você entrou')
            var img = document.getElementById('imagem2').innerHTML = "<br><br><img id='bemvindo' src='relampago marquinhos.jpg'>"
            //res2.innerHTML = `Olá ${Nome.value} ${img}`

            document.getElementById('resp2').innerHTML = `<h2>Olá ${Nome.value} ${img}</h2>`
        }
    }
}

const openModalButton = document.querySelector('#open-modal');
const closeModalButton = document.querySelector('#close-modal');
const modal = document.querySelector('#modal');
const fade = document.querySelector('#fade');

const toggleModal = () => {
    modal.classList.toggle('hide');
    fade.classList.toggle('hide');
}

[openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal())
});