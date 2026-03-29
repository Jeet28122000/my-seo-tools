// Wrap everything safely
document.addEventListener("DOMContentLoaded", function () {

function calcBMI() {

let w = document.getElementById("weight").value
let h = document.getElementById("height").value

if(!w || !h){
  alert("Enter all fields")
  return
}

h = h / 100

let bmi = w / (h*h)
bmi = bmi.toFixed(2)

let category = ""

if(bmi < 18.5) category = "Underweight"
else if(bmi < 25) category = "Normal Weight"
else if(bmi < 30) category = "Overweight"
else category = "Obese"

document.getElementById("resultBox").innerHTML =
  `<h3>Your BMI: ${bmi}</h3>
   <p>Category: <b>${category}</b></p>`
}

window.calcBMI = calcBMI;


// DARK MODE
function toggleDark(){
  document.body.classList.toggle("dark")
}
window.toggleDark = toggleDark;


// SEARCH FIX (no layout break)
const search = document.querySelector(".search");

if(search){
search.addEventListener("keyup", function(){

let value = search.value.toLowerCase();
let cards = document.querySelectorAll(".tool-card");

cards.forEach(card=>{
card.style.display =
card.innerText.toLowerCase().includes(value)
? ""
: "none";
})

})
}


// EMI
function calcEMI() {
    const P = parseFloat(document.getElementById('loanAmount').value);
    const annualRate = parseFloat(document.getElementById('interestRate').value);
    const N = parseFloat(document.getElementById('tenure').value);
    const resultBox = document.getElementById('resultBox');

    if (!P || !annualRate || !N) {
        resultBox.innerHTML = "Please enter all values.";
        return;
    }

    const R = (annualRate / 12) / 100;

    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);

    const totalPayment = emi * N;
    const totalInterest = totalPayment - P;

    resultBox.innerHTML = `
        <div style="text-align: left; padding: 10px;">
            <p><strong>Monthly EMI:</strong> ₹${emi.toLocaleString(undefined, {maximumFractionDigits: 2})}</p>
            <p><strong>Total Interest:</strong> ₹${totalInterest.toLocaleString(undefined, {maximumFractionDigits: 2})}</p>
            <hr>
            <p><strong>Total Amount:</strong> ₹${totalPayment.toLocaleString(undefined, {maximumFractionDigits: 2})}</p>
        </div>
    `;
}
window.calcEMI = calcEMI;


// AGE
function calcAge() {
    const dobInput = document.getElementById('dob').value;
    const targetInput = document.getElementById('targetDate').value;
    const resultBox = document.getElementById('resultBox');

    if (!dobInput) {
        resultBox.innerHTML = "Please select a birth date.";
        return;
    }

    const dob = new Date(dobInput);
    const now = targetInput ? new Date(targetInput) : new Date();

    let years = now.getFullYear() - dob.getFullYear();
    let months = now.getMonth() - dob.getMonth();
    let days = now.getDate() - dob.getDate();

    if (days < 0) {
        months--;
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    if (years < 0) {
        resultBox.innerHTML = "Birth date cannot be in the future!";
    } else {
        resultBox.innerHTML = `
            <div style="padding: 10px;">
                <p style="font-size: 1.2rem;"><strong>${years}</strong> Years, <strong>${months}</strong> Months, <strong>${days}</strong> Days</p>
            </div>
        `;
    }
}
window.calcAge = calcAge;


// DISCOUNT
function calcDiscount() {
    const price = parseFloat(document.getElementById('originalPrice').value);
    const discount = parseFloat(document.getElementById('discountPercent').value);
    const tax = parseFloat(document.getElementById('taxPercent').value) || 0;
    const resultBox = document.getElementById('resultBox');

    if (!price || isNaN(discount)) {
        resultBox.innerHTML = "Please enter the original price and discount.";
        return;
    }

    const savingsAmount = (price * discount) / 100;
    const discountedPrice = price - savingsAmount;

    const taxAmount = (discountedPrice * tax) / 100;
    const finalPrice = discountedPrice + taxAmount;

    resultBox.innerHTML = `
        <div style="text-align: left; padding: 10px;">
            <p><strong>You Save:</strong> $${savingsAmount.toFixed(2)}</p>
            <p><strong>Sale Price:</strong> $${discountedPrice.toFixed(2)}</p>
            ${tax > 0 ? `<p><strong>Tax (${tax}%):</strong> $${taxAmount.toFixed(2)}</p>` : ''}
            <hr>
            <p style="font-size: 1.2rem; color: #2ecc71;"><strong>Final Price:</strong> $${finalPrice.toFixed(2)}</p>
        </div>
    `;
}
window.calcDiscount = calcDiscount;


// LOAN
function calcLoan() {
    const P = parseFloat(document.getElementById('loanAmount').value);
    const annualRate = parseFloat(document.getElementById('interestRate').value);
    const years = parseFloat(document.getElementById('loanTenure').value);
    const resultBox = document.getElementById('resultBox');

    if (!P || !annualRate || !years) {
        resultBox.innerHTML = "Please fill in all fields.";
        return;
    }

    const R = annualRate / 12 / 100;
    const N = years * 12;

    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    const totalAmount = emi * N;
    const totalInterest = totalAmount - P;

    resultBox.innerHTML = `
        <div style="padding:10px;">
            <p><strong>Monthly EMI:</strong> ₹${emi.toFixed(2)}</p>
            <p><strong>Total Interest:</strong> ₹${totalInterest.toFixed(0)}</p>
            <p><strong>Total Repayment:</strong> ₹${totalAmount.toFixed(0)}</p>
        </div>
    `;
}
window.calcLoan = calcLoan;


// FIXED BMR BUG
function calcBMR() {
    const age = parseFloat(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weightBMR').value);
    const height = parseFloat(document.getElementById('heightBMR').value);
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const res = document.getElementById('resultBoxBMR');

    if (!age || !weight || !height || !gender) {
        res.innerHTML = "Please fill all fields.";
        return;
    }

    let bmr = (10 * weight) + (6.25 * height) - (5 * age);
    bmr = (gender === 'male') ? bmr + 5 : bmr - 161;

    res.innerHTML = `<p>Your BMR: <strong>${Math.round(bmr)} Calories/day</strong></p>`;
}
window.calcBMR = calcBMR;


// GPA
function calcGPA() {
    const grades = document.querySelectorAll('.grade-select');
    const credits = document.querySelectorAll('.credits');
    let totalPoints = 0;
    let totalCredits = 0;

    grades.forEach((g, i) => {
        const c = parseFloat(credits[i].value) || 0;
        totalPoints += parseFloat(g.value) * c;
        totalCredits += c;
    });

    const gpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "0.00";
    document.getElementById('resultBox').innerHTML = `<p>Your GPA: <strong>${gpa}</strong></p>`;
}
window.calcGPA = calcGPA;


// FIX AUTOLOAN ERROR
function calcAutoLoan(){
    calcLoan();
}
window.calcAutoLoan = calcAutoLoan;


});


// --- Student Loan Refinance Logic ---
function calcRefi() {
    const balance = parseFloat(document.getElementById('refiBalance').value);
    const oldR = (parseFloat(document.getElementById('oldRate').value) / 100) / 12;
    const newR = (parseFloat(document.getElementById('newRate').value) / 100) / 12;
    const n = 120; // Default 10-year term for US Student Loans

    if (!balance || !oldR || !newR) {
        document.getElementById('resultBox').innerHTML = "Please enter valid numbers.";
        return;
    }

    const oldEmi = (balance * oldR * Math.pow(1 + oldR, n)) / (Math.pow(1 + oldR, n) - 1);
    const newEmi = (balance * newR * Math.pow(1 + newR, n)) / (Math.pow(1 + newR, n) - 1);
    const savings = oldEmi - newEmi;

    document.getElementById('resultBox').innerHTML = `
        <div style="text-align:left;">
            <p>Old Monthly: <strong>$${oldEmi.toFixed(2)}</strong></p>
            <p>New Monthly: <strong>$${newEmi.toFixed(2)}</strong></p>
            <hr>
            <p style="color:green; font-weight:bold;">Monthly Savings: $${savings.toFixed(2)}</p>
        </div>`;
}

// --- Auto Insurance Estimator Logic ---
function calcInsurance() {
    const age = parseInt(document.getElementById('driverAge').value);
    const accidents = parseInt(document.getElementById('accidents').value);
    let baseRate = 900; // Average US 6-month premium base

    if (age < 25) baseRate += 500;
    if (accidents === 1) baseRate += 300;
    if (accidents > 1) baseRate += 800;

    document.getElementById('resultBox').innerHTML = `
        <h3>Estimated 6-Month Premium</h3>
        <p style="font-size:24px; color:#2c3e50;">$${baseRate.toFixed(2)}</p>
        <p><small>Rates vary significantly by US State (e.g., CA vs FL).</small></p>`;
}

// --- NCLEX Predictor Logic ---
function calcNCLEX() {
    const score = parseFloat(document.getElementById('nclexScore').value);
    const total = parseInt(document.getElementById('nclexTotal').value);
    let result = "";
    let color = "";

    if (score >= 70 && total >= 1000) { result = "Very High Probability"; color = "green"; }
    else if (score >= 60) { result = "Moderate Probability"; color = "orange"; }
    else { result = "Needs More Practice"; color = "red"; }

    document.getElementById('resultBox').innerHTML = `
        <h3>Pass Probability: <span style="color:${color}">${result}</span></h3>
        <p>Based on US national averages and scoring standards.</p>`;
}

// LETTER → %
function letterToPercent(letter) {
  const map = {
    "A+": 97, "A": 95, "A-": 91,
    "B+": 88, "B": 85, "B-": 81,
    "C+": 78, "C": 75, "C-": 71,
    "D+": 68, "D": 65, "F": 50
  };
  return map[letter.toUpperCase()] || 0;
}

// ADD ROW
function addRow() {

  let container = document.getElementById("rows");

  let div = document.createElement("div");
  div.className = "grade-row";

  div.innerHTML = `
    <input type="text" placeholder="Assignment">
    <input type="text" class="grade" placeholder="90 or A">
    <input type="number" class="weight" placeholder="Weight %">
  `;

  container.appendChild(div);
}

// MAIN CALCULATION
function calculateGrade() {

  let rows = document.querySelectorAll(".grade-row");

  let totalWeight = 0;
  let weightedSum = 0;

  rows.forEach(row => {

    let gradeInput = row.querySelector(".grade").value.trim();
    let weight = parseFloat(row.querySelector(".weight").value) || 0;

    let grade = parseFloat(gradeInput);

    // if letter
    if (isNaN(grade)) {
      grade = letterToPercent(gradeInput);
    }

    weightedSum += grade * weight;
    totalWeight += weight;

  });

  let result = totalWeight ? (weightedSum / totalWeight) : 0;

  document.getElementById("resultBox").innerHTML =
    `Final Grade: <b>${result.toFixed(2)}%</b>`;
}

// FINAL TARGET CALC
function calculateTarget() {

  let current = parseFloat(document.getElementById("current").value) || 0;
  let target = parseFloat(document.getElementById("target").value) || 0;
  let weight = parseFloat(document.getElementById("finalWeight").value) || 0;

  let required = (target - (current * (100 - weight) / 100)) / (weight / 100);

  document.getElementById("targetResult").innerHTML =
    `You need <b>${required.toFixed(2)}%</b> in final exam`;
}

function calculateCalories() {

  let age = parseFloat(document.getElementById("age").value);
  let gender = document.getElementById("gender").value;
  let height = parseFloat(document.getElementById("height").value);
  let weight = parseFloat(document.getElementById("weight").value);
  let activity = parseFloat(document.getElementById("activity").value);
  let formula = document.getElementById("formula").value;
  let bodyfat = parseFloat(document.getElementById("bodyfat").value);

  if (!age || !height || !weight) {
    document.getElementById("resultBox").innerHTML = "Enter all values";
    return;
  }

  let bmr;

  // Mifflin
  if (formula === "mifflin") {
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
  }

  // Harris
  if (formula === "harris") {
    if (gender === "male") {
      bmr = 13.397 * weight + 4.799 * height - 5.677 * age + 88.362;
    } else {
      bmr = 9.247 * weight + 3.098 * height - 4.330 * age + 447.593;
    }
  }

  // Katch
  if (formula === "katch") {
    if (!bodyfat) {
      document.getElementById("resultBox").innerHTML = "Enter body fat %";
      return;
    }
    let leanMass = weight * (1 - bodyfat / 100);
    bmr = 370 + (21.6 * leanMass);
  }

  let maintenance = bmr * activity;
  let fatLoss = maintenance - 500;
  let gain = maintenance + 300;

  document.getElementById("resultBox").innerHTML = `
    <h3>Results</h3>
    Maintenance: <b>${maintenance.toFixed(0)} kcal</b><br>
    Fat Loss: <b>${fatLoss.toFixed(0)} kcal</b><br>
    Weight Gain: <b>${gain.toFixed(0)} kcal</b>
  `;
}

