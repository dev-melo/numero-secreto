const lesser = 1
const greater = 100

const secretNumber = generateNumber();

function generateNumber(){
    return parseInt(Math.random() * greater + 1);
}

console.log('Número:', secretNumber)

const elementLesser = document.getElementById('menor-valor');
elementLesser.innerHTML = lesser;

const elementGreater = document.getElementById('maior-valor');
elementGreater.innerHTML = greater;