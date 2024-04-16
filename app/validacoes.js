const html = document.querySelector('html');

function checkValue(value) {
    const number = +chute;

    if(invalidValue(number)){
        elementTry.innerHTML += '<div>Valor inválido.</div>';
        return
    }

    if(numberIsGreaterOrLesserThanAllowed(number)){
        elementTry.innerHTML += '<div>Valor inválido, número fora dos valores permitidos.</div>';
        return
    }

    if(number === secretNumber){

        html.setAttribute('data-contexto', 'acertou')
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${secretNumber}</h3>


            <button id="jogar-novamente" class="btn-jogar">
            Jogar novamente</button>
        `
    } else if (number > secretNumber){
        elementTry.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    }else{
        elementTry.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    }
}

function invalidValue(number) {
    return Number.isNaN(number);
}

function numberIsGreaterOrLesserThanAllowed(number){
    return number > greater || number < lesser;
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
})