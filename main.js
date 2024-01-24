const clearAll = () => {
    wResult.value = ""
    hResult.value = ""
}

const finalResult = () => {
    let weight = (wResult.value) * 2.205
    let height = (hResult.value) * 0.394
    // let weight = (wResult.value) 
    // let height = (hResult.value) 

    const bmi = Math.floor((weight / (height * height) * 703))
    // const bmi=Math.ceil(weight / ((height / 100) ** 2));


    if (wResult.value && hResult.value) {
        if (bmi > 30) {
            output.innerHTML = (`Your BMI Index is: ${bmi}`)
        
            outputMsg.innerHTML = "Obesity"
            output.style.color="white"
            outputMsg.style.color="red"

            wResult.value = ""
            hResult.value = ""

        } else if (bmi > 25) {

            output.innerHTML = (`Your BMI Index is: ${bmi}`)
            outputMsg.innerHTML = "OverWeight"
            output.style.color="white"
            outputMsg.style.color="orange"
            wResult.value = ""
            hResult.value = ""
        } else if (bmi > 18.5) {
            output.innerHTML = (`Your BMI Index is: ${bmi}`)
            outputMsg.innerHTML = "Normal"
            output.style.color="white"
            outputMsg.style.color="green"
            wResult.value = ""
            hResult.value = ""
        } else {
            output.innerHTML = (`Your BMI Index is: ${bmi}`)
            outputMsg.innerHTML = "UnderWeight"
            output.style.color="white"
            outputMsg.style.color="blue"
            wResult.value = ""
            hResult.value = ""
        }
        const speech= new SpeechSynthesisUtterance(`${output.innerHTML}`);
        speechSynthesis.speak(speech);
    } else {
        alert("Please enter your Height & Weight")
    }



}

const loginPage=()=>{
    window.location="login.html"
}

const login=()=>{
    if(UsernameInput.value=="" || Passwordinput.value==""){
        alert("Please enter Username & Password")
    }else{
        const user=UsernameInput.value
        localStorage.setItem("user",user)
        window.location="dashboard.html"

    }
}