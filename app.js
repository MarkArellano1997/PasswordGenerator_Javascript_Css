const inputRange = document.getElementById('inputRange')
const spanValue = document.getElementById('spanValue')
const generateBtn = document.getElementById('generateBtn')
const lowercase = document.getElementById('lowercase')
const uppercase = document.getElementById('uppercase')
const inputNumbers = document.getElementById('inputNumbers')
const inputSymbols = document.getElementById('inputSymbols')
const inputPassword = document.getElementById('inputPassword')
const copyIcon = document.getElementById('copyIcon')

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = '012345679'
const symbols = `!@#$%^&*()_+-=[]{}/|°"',.\<>?¡¿`

inputRange.addEventListener('input', () => {
    spanValue.innerText = inputRange.value
})

generateBtn.addEventListener('click', () => {

    const length = inputRange.value
    let characters = ''
    let password = ''

    characters += lowercase.checked ? lowercaseLetters : ''
    characters += uppercase.checked ? uppercaseLetters : ''
    characters += inputNumbers.checked ? numbers:''
    characters += inputSymbols ? symbols :''

    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random()* characters.length))
    }

    inputPassword.value=password
})

copyIcon.addEventListener('click',()=>{

    if (inputPassword.value !=="") {
        navigator.clipboard.writeText(inputPassword.value)
        copyIcon.setAttribute('class', 'fa-solid fa-check')

        setTimeout(()=>{
            copyIcon.setAttribute('class', 'fa-regular fa-copy')
        },4000)
    }
    
})

