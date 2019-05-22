import './style.css'

const firstNumber = document.querySelector('#firstNumber');
const secondNumber = document.querySelector('#secondNumber');
const result = document.querySelector('#result');

const sum = () => {
  result.innerHTML = Number(firstNumber.value) + Number(secondNumber.value)
}
sum()

firstNumber.addEventListener('keyup', sum)
secondNumber.addEventListener('keyup', sum)
