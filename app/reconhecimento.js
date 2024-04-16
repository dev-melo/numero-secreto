const elementTry = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

var recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'

recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e){
    chute = e.results[0][0].transcript
    showTryOnScreen(chute);
    checkValue(chute);
}

function showTryOnScreen(chute){
    elementTry.innerHTML= `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', ()=>recognition.start())