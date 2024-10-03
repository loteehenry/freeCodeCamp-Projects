/*  
    <span id="result">
      Invalid US Number: </br>
      555-555-5555
    </span>
*/


const userInput = document.getElementById("user-input")
const resultsContainer = document.getElementById("results-div")
const clearBtn = document.getElementById("clear-btn")
const checkBtn = document.getElementById("check-btn")

const checkNumber = (value) => {
  /*
    1 555-555-5555
    1 (555) 555-5555
    1(555)555-5555
    1 555 555 5555
    5555555555
    555-555-5555
    (555)555-5555
  */

  const phoneRegex = /^1?\s*(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/g
  const result = phoneRegex.test(value)

  result ? resultsContainer.innerHTML += `
    <span id="result">
      Valid US number:
      ${value}
    </span>` 
    : resultsContainer.innerHTML += `
    <span id="result">
      Invalid US number:
      ${value}
    </span>`

    userInput.value = ""
}

clearBtn.addEventListener("click", ()=>{
  resultsContainer.innerHTML = ""
})

checkBtn.addEventListener("click", ()=>{
  const value = userInput.value

  if (value === ""){
    alert("Please provide a phone number")
  } else{
    checkNumber(value)
  }
})
