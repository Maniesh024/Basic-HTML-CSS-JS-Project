 
function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    if (weight === "" || height === "" || weight <= 0 || height <= 0) {
        alert("Please enter valid values for weight and height!");
        return;
    }

    let bmi = (weight / (height * height)).toFixed(2);
    let resultText = `Your BMI: ${bmi} - `;

    if (bmi < 18.5) {
        resultText += "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        resultText += "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        resultText += "Overweight";
    } else {
        resultText += "Obese";
    }

    document.getElementById("result").innerText = resultText;
}
