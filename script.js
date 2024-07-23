const btnEl = document.getElementById('btn');
const bmiInputEl = document.getElementById('bmi-result');
const WeightConditionEl = document.getElementById('weight-condition');

function calculateBMI(){
  const heightValue = document.getElementById('height').value / 100;
  const weightValue = document.getElementById('weight').value;
  
  const bmiValue = weightValue / (heightValue * heightValue);
  bmiInputEl.value = bmiValue;

  if(bmiValue < 18.5){
    WeightConditionEl.innerText = 'Under Weight'
  }else if(bmiValue >= 18.5 && bmiValue <= 24.9){
    WeightConditionEl.innerText = 'Normal Weight'
  }else if(bmiValue >= 25 && bmiValue <= 29.9){
    WeightConditionEl.innerText = 'Over Weight'
  }else if(bmiValue >= 30){
    WeightConditionEl.innerText = 'Obisity'
  }
}

btnEl.addEventListener('click',calculateBMI)