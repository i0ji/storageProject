import './styles/main.scss'

console.log('hello')

const inputField = document.getElementById('invoice') as HTMLInputElement;
const button = document.getElementById('add_btn') as HTMLButtonElement;

inputField.addEventListener('keyup', () => {
    if (inputField.value.trim() === '') {
        button.disabled = true;
    } else {
        button.disabled = false
    }
})