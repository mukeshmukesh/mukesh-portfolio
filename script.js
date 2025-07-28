
// BMI calculator
function updateBMI() {
  const height = parseInt(document.getElementById("heightSlider").value);
  const weight = parseInt(document.getElementById("weightSlider").value);
  document.getElementById("heightValue").innerText = height + " cm";
  document.getElementById("weightValue").innerText = weight + " kg";
  const heightM = height / 100;
  const bmi = weight / (heightM * heightM);
  let status = "";
  if (bmi < 18.5) status = "Underweight";
  else if (bmi < 25) status = "Healthy";
  else if (bmi < 30) status = "Overweight";
  else status = "Obese";
  document.getElementById("bmiResult").innerHTML = "BMI: " + bmi.toFixed(2) + " (" + status + ")";
}
updateBMI();

// Firebase Auth (placeholder)
document.getElementById("loginBtn").onclick = () => alert("Google login coming soon...");
document.getElementById("logoutBtn").onclick = () => alert("Logout...");
