/*
  Rules:
    -If convertBtn clicked with userInput = ""; #output - show(Please enter a valid number)
    -If convertBtn clicked with userInput <= 0; #output - show(Please enter a number greater than or equal to 1)
    -If convertBtn clicked with userInput >= 4000; #output - show(Please enter a number less than or equal to 3999)
*/

const userInputField = document.getElementById("number")
const convertBtn = document.getElementById("convert-btn")
const output = document.getElementById("output")

const numeralEquivalents = [
  {1: "I"},
  {2: "II"},
  {3: "III"},
  {4: "IV"},
  {5: "V"},
  {6: "VI"},
  {7: "VII"},
  {8: "VIII"},
  {9: "IX"},
  {10: "X"},
  {20: "XX"},
  {30: "XXX"},
  {40: "XL"},
  {50: "L"},
  {60: "LX"},
  {70: "LXX"},
  {80: "LXXX"},
  {90: "XC"},
  {100: "C"},
  {200: "CC"},
  {300: "CCC"},
  {400: "CD"},
  {500: "D"},
  {600: "DC"},
  {700: "DCC"},
  {800: "DCCC"},
  {900: "CM"},
  {1000: "M"},
  {2000: "MM"},
  {3000: "MMM"}
]

const checkUserInput=(inputToCheck)=>{
  let errorMessage = ""

  if(inputToCheck === ""){
    errorMessage = "Please enter a valid number"
    return errorMessage
  } else if(inputToCheck <= 0){
    errorMessage = "Please enter a number greater than or equal to 1"
    return errorMessage
  } else if(inputToCheck >= 4000){
    errorMessage = "Please enter a number less than or equal to 3999"
    return errorMessage
  } else{
    return "pass"
  }
}

convertBtn.addEventListener("click", ()=>{
  const userInput = userInputField.value
  const inputTestResult = checkUserInput(userInput)

  if (inputTestResult === "pass"){
    output.innerText = `${convertInput(userInput)}`
    output.classList.toggle("hidden")
    output.classList.remove("error")
  } else{
    output.innerText = `${inputTestResult}`
    output.classList.toggle("hidden")
    output.classList.add("error")
  }
})

number.addEventListener("keydown", (e)=>{
  if (e.key === "Enter"){
    const userInput = userInputField.value
    const inputTestResult = checkUserInput(userInput)

    if (inputTestResult === "pass"){
      output.innerText = `${convertInput(userInput)}`
      output.classList.toggle("hidden")
      output.classList.remove("error")
    } else{
      output.innerText = `${inputTestResult}`
      output.classList.toggle("hidden")
      output.classList.add("error")
    }
  }
})

const tensToNumerals=(digitToConvert)=>{
  let digit = digitToConvert + "0"
  let digitInt = parseInt(digitToConvert)
  let numeral = numeralEquivalents[(digitInt + 8)][digit]
  return numeral
}

const hunksToNumerals=(digitToConvert)=>{
  let digit = digitToConvert + "00"
  let digitInt = parseInt(digitToConvert)
  let numeral = numeralEquivalents[(digitInt + 17)][digit]
  return numeral
}

const thoussToNumerals=(digitToConvert)=>{
  let digit = digitToConvert + "000"
  let digitInt = parseInt(digitToConvert)
  let numeral = numeralEquivalents[(digitInt + 26)][digit]
  return numeral
}

const convertInput = (inputToConvert)=>{
  let inputSplit = inputToConvert.split("")
  let numerals = []
  let inputReverse = inputSplit.reverse()
  console.log(inputReverse)

  inputReverse.forEach(function namedFunction(digit, index){
    if (index !== 0&&digit === 0){
      numerals.unshift("")
    } else{
      if (index === 1){
        const tensValue = tensToNumerals(digit)
        numerals.unshift(tensValue)
      } else if (index === 2){
        const hunksValue = hunksToNumerals(digit)
        numerals.unshift(hunksValue)
      } else if (index === 3){
        const thoussValue = thoussToNumerals(digit)
        numerals.unshift(thoussValue)
      }else{
        //let intDigit = parseInt(digit)
        let numeralEquivalent = numeralEquivalents[(digit - 1)] [digit]
        numerals.unshift(numeralEquivalent)
      }
    }
  })

  //const output = numerals.join("")
  console.log(numerals.join(""))
  //return
  return numerals.join("")
}
