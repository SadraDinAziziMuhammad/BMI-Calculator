function calculateBMI() {
  const weight = parseFloat(document.getElementById('weightInput').value);
  const height = parseFloat(document.getElementById('heightInput').value);

  if (isNaN(weight) || isNaN(height)) {
      document.getElementById('result').textContent = 'Masukkan berat badan dan tinggi badan yang valid.';
  } else {
      const bmi = weight / ((height / 100) ** 2);
      const category = getBMICategory(bmi);
      document.getElementById('result').textContent = `BMI: ${bmi.toFixed(2)} - ${category} Weight`;
  }
}

function getBMICategory(bmi) {
  if (bmi < 18.5) {
      return 'Underweight';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
      return 'Normal Weight';
  } else if (bmi >= 25 && bmi <= 29.9) {
      return 'Overweight';
  } else {
      return 'Obesity';
  }
}
