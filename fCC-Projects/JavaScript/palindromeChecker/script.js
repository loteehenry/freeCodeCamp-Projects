const checkBtn = document.getElementById("check-btn")
const resultText = document.getElementById("result")
const userInput = document.getElementById("text-input")

const cleanExpression=(text)=>{
    let text1 = text.replace(/[^a-zA-Z0-9]/g, "")
    let text2 = text1.replace(/\s+/g, "")
    return text2.toLowerCase()
}

checkBtn.addEventListener("click", ()=>{
    const inputValue = userInput.value

    if (inputValue === ""){
        alert("Please input a value")
    }else{
        const testText = cleanExpression(inputValue)
        if(testText === testText.split("").reverse().join("")){
            resultText.innerText = `${inputValue} is a palindrome!!!`
            resultText.style.display = "block"
        }else{
            resultText.innerText = `${inputValue} is not a palindrome!!!`
            resultText.style.display = "block"
        }
    }
})
