const bmiColors = {
    underweight: '#FFA07A',
    healthyWeight: '#98FB98',
    riskOverweight: '#FFD700',
    overweight: '#FF6347'
};

document.getElementById("underweight").style.backgroundColor = bmiColors.underweight;
document.getElementById("healthyWeight").style.backgroundColor = bmiColors.healthyWeight;
document.getElementById("riskOverweight").style.backgroundColor = bmiColors.riskOverweight;
document.getElementById("overweight").style.backgroundColor = bmiColors.overweight;

function calculateBMI() {
    const height = parseFloat(document.getElementById("height").value) / 100;
    const weight = parseFloat(document.getElementById("weight").value);
    const gender = document.getElementById("gender").value;

    if (!height || !weight) {
        alert("Please enter valid height and weight.");
        return;
    }

    const bmi = weight / (height * height);
    document.getElementById("bmiResult").textContent = `Your BMI is ${bmi.toFixed(1)}`;

    let bmiRanges = (gender === 'male') 
        ? { underweight: 18.5, healthy: 25, riskOverweight: 30, overweight: 40 } 
        : { underweight: 18.5, healthy: 24, riskOverweight: 29, overweight: 39 };

    let meterPosition = 0;

    if (bmi < bmiRanges.underweight) {
        meterPosition = (bmi / bmiRanges.underweight) * 5;
    } else if (bmi < bmiRanges.healthy) {
        meterPosition = 5 + ((bmi - bmiRanges.underweight) / (bmiRanges.healthy - bmiRanges.underweight)) * 80;
    } else if (bmi < bmiRanges.riskOverweight) {
        meterPosition = 85 + ((bmi - bmiRanges.healthy) / (bmiRanges.riskOverweight - bmiRanges.healthy)) * 10;
    } else {
        meterPosition = 95 + ((bmi - bmiRanges.riskOverweight) / (bmiRanges.overweight - bmiRanges.riskOverweight)) * 5;
    }
}
