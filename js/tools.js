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

function toggleDark(){
  document.body.classList.toggle("dark")
}

const search = document.querySelector(".search");

if(search){
search.addEventListener("keyup", function(){

let value = search.value.toLowerCase();
let cards = document.querySelectorAll(".tool-card");

cards.forEach(card=>{
card.style.display =
card.innerText.toLowerCase().includes(value)
? "block"
: "none";
})

})
}

function calcEMI() {
    const P = parseFloat(document.getElementById('loanAmount').value);
    const annualRate = parseFloat(document.getElementById('interestRate').value);
    const N = parseFloat(document.getElementById('tenure').value);
    const resultBox = document.getElementById('resultBox');

    if (!P || !annualRate || !N) {
        resultBox.innerHTML = "Please enter all values.";
        return;
    }

    // Monthly interest rate
    const R = (annualRate / 12) / 100;

    // EMI Formula: [P x R x (1+R)^N] / [(1+R)^N - 1]
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

function calcAge() {
    const dobInput = document.getElementById('dob').value;
    const targetInput = document.getElementById('targetDate').value;
    const resultBox = document.getElementById('resultBox');

    if (!dobInput) {
        resultBox.innerHTML = "Please select a birth date.";
        return;
    }

    const dob = new Date(dobInput);
    // Use target date if provided, otherwise use today
    const now = targetInput ? new Date(targetInput) : new Date();

    let years = now.getFullYear() - dob.getFullYear();
    let months = now.getMonth() - dob.getMonth();
    let days = now.getDate() - dob.getDate();

    // Adjustment logic for days and months
    if (days < 0) {
        months--;
        // Get days in the previous month
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

function calcDiscount() {
    const price = parseFloat(document.getElementById('originalPrice').value);
    const discount = parseFloat(document.getElementById('discountPercent').value);
    const tax = parseFloat(document.getElementById('taxPercent').value) || 0;
    const resultBox = document.getElementById('resultBox');

    if (!price || discount === "" || isNaN(discount)) {
        resultBox.innerHTML = "Please enter the original price and discount.";
        return;
    }

    // Calculate savings
    const savingsAmount = (price * discount) / 100;
    const discountedPrice = price - savingsAmount;

    // Calculate tax on the discounted price
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

function calcLoan() {
    const P = parseFloat(document.getElementById('loanAmount').value);
    const annualRate = parseFloat(document.getElementById('interestRate').value);
    const years = parseFloat(document.getElementById('loanTenure').value);
    const resultBox = document.getElementById('resultBox');

    if (!P || !annualRate || !years) {
        resultBox.innerHTML = "Please fill in all fields with valid numbers.";
        return;
    }

    // Monthly interest rate
    const R = annualRate / 12 / 100;
    // Number of months
    const N = years * 12;

    // EMI Formula: [P x R x (1+R)^N] / [(1+R)^N - 1]
    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    const totalAmount = emi * N;
    const totalInterest = totalAmount - P;

    resultBox.innerHTML = `
        <div style="text-align: left; padding: 10px;">
            <p style="font-size: 1.2rem; color: #2ecc71;"><strong>Monthly EMI:</strong> ₹${emi.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
            <hr>
            <p><strong>Principal Amount:</strong> ₹${P.toLocaleString()}</p>
            <p><strong>Total Interest:</strong> ₹${totalInterest.toLocaleString(undefined, {maximumFractionDigits: 0})}</p>
            <p><strong>Total Repayment:</strong> ₹${totalAmount.toLocaleString(undefined, {maximumFractionDigits: 0})}</p>
        </div>
    `;
}

function calcMortgage() {
    const price = parseFloat(document.getElementById('homePrice').value);
    const downPayment = parseFloat(document.getElementById('downPayment').value) || 0;
    const annualRate = parseFloat(document.getElementById('interestRate').value);
    const years = parseFloat(document.getElementById('loanTerm').value);
    const tax = parseFloat(document.getElementById('propertyTax').value) || 0;
    const insurance = parseFloat(document.getElementById('insurance').value) || 0;
    const resultBox = document.getElementById('resultBox');

    if (!price || !annualRate || !years) {
        resultBox.innerHTML = "Please enter Price, Interest, and Term.";
        return;
    }

    const P = price - downPayment;
    if (P <= 0) {
        resultBox.innerHTML = "Down payment cannot exceed home price.";
        return;
    }

    const R = annualRate / 12 / 100;
    const N = years * 12;

    // Principal + Interest
    const mi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);

    // Total including Taxes and Insurance
    const totalMonthly = mi + tax + insurance;

    resultBox.innerHTML = `
        <div style="text-align: left; padding: 10px;">
            <p><strong>P & I Payment:</strong> $${mi.toFixed(2)}</p>
            <p><strong>Taxes & Insurance:</strong> $${(tax + insurance).toFixed(2)}</p>
            <hr>
            <p style="font-size: 1.2rem; color: #2ecc71;"><strong>Total Monthly: $${totalMonthly.toFixed(2)}</strong></p>
            <p><small>Loan Amount: $${P.toLocaleString()}</small></p>
        </div>
    `;
}

// Function 1: X% of Y
function calcPerc1() {
    const p = parseFloat(document.getElementById('perc1').value);
    const v = parseFloat(document.getElementById('val1').value);
    const res = document.getElementById('res1');

    if (isNaN(p) || isNaN(v)) {
        res.innerHTML = "Please enter both values.";
        return;
    }

    const result = (p / 100) * v;
    res.innerHTML = `<p>${p}% of ${v} is <strong>${result.toLocaleString()}</strong></p>`;
}

// Function 2: Percentage Change
function calcPerc2() {
    const oldV = parseFloat(document.getElementById('oldVal').value);
    const newV = parseFloat(document.getElementById('newVal').value);
    const res = document.getElementById('res2');

    if (isNaN(oldV) || isNaN(newV)) {
        res.innerHTML = "Please enter both values.";
        return;
    }

    if (oldV === 0) {
        res.innerHTML = "Original value cannot be zero.";
        return;
    }

    const change = ((newV - oldV) / oldV) * 100;
    const direction = change >= 0 ? "Increase" : "Decrease";

    res.innerHTML = `
        <p>Difference: <strong>${(newV - oldV).toLocaleString()}</strong></p>
        <p>${direction}: <strong>${Math.abs(change).toFixed(2)}%</strong></p>
    `;
}

function calcSalary() {
    const annual = parseFloat(document.getElementById('annualSalary').value);
    const tax = parseFloat(document.getElementById('taxRate').value) || 0;
    const hours = parseFloat(document.getElementById('workHours').value) || 40;
    const resultBox = document.getElementById('resultBox');

    if (!annual) {
        resultBox.innerHTML = "Please enter your annual salary.";
        return;
    }

    const monthly = annual / 12;
    const weekly = annual / 52;
    const hourly = weekly / hours;

    // Net calculations
    const taxAmount = (annual * tax) / 100;
    const netAnnual = annual - taxAmount;
    const netMonthly = netAnnual / 12;

    resultBox.innerHTML = `
        <div style="text-align: left; padding: 10px;">
            <p><strong>Monthly (Gross):</strong> $${monthly.toLocaleString(undefined, {maximumFractionDigits: 2})}</p>
            <p><strong>Hourly Rate:</strong> $${hourly.toFixed(2)}</p>
            <hr>
            <p style="color: #2ecc71;"><strong>Estimated Monthly Take-Home:</strong></p>
            <p style="font-size: 1.2rem;"><strong>$${netMonthly.toLocaleString(undefined, {maximumFractionDigits: 2})}</strong></p>
            <p><small>Based on ${tax}% estimated tax rate.</small></p>
        </div>
    `;
}

// Calculate difference between two clock times
function calcTimeDiff() {
    const start = document.getElementById('startTime').value;
    const end = document.getElementById('endTime').value;
    const res = document.getElementById('resDiff');

    if (!start || !end) {
        res.innerHTML = "Please select both start and end times.";
        return;
    }

    const startParts = start.split(':');
    const endParts = end.split(':');

    let startMin = parseInt(startParts[0]) * 60 + parseInt(startParts[1]);
    let endMin = parseInt(endParts[0]) * 60 + parseInt(endParts[1]);

    // Handle overnight shifts (e.g., 10 PM to 2 AM)
    if (endMin < startMin) {
        endMin += 24 * 60;
    }

    const diff = endMin - startMin;
    const h = Math.floor(diff / 60);
    const m = diff % 60;

    res.innerHTML = `<p>Duration: <strong>${h} Hours and ${m} Minutes</strong></p>`;
}

// Add a specific duration to the current time
function addDurations() {
    const hToAdd = parseInt(document.getElementById('addH').value) || 0;
    const mToAdd = parseInt(document.getElementById('addM').value) || 0;
    const res = document.getElementById('resAdd');

    const now = new Date();
    now.setHours(now.getHours() + hToAdd);
    now.setMinutes(now.getMinutes() + mToAdd);

    const newTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    res.innerHTML = `<p>New Time: <strong>${newTime}</strong></p>`;
}

function calcTip() {
    const bill = parseFloat(document.getElementById('billAmount').value);
    const tipPerc = parseFloat(document.getElementById('tipPercent').value);
    const people = parseInt(document.getElementById('numPeople').value) || 1;
    const resultBox = document.getElementById('resultBox');

    if (!bill || isNaN(tipPerc)) {
        resultBox.innerHTML = "Please enter the bill amount and tip percentage.";
        return;
    }

    const totalTip = (bill * tipPerc) / 100;
    const totalBill = bill + totalTip;
    const perPerson = totalBill / people;

    resultBox.innerHTML = `
        <div style="text-align: left; padding: 10px;">
            <p><strong>Total Tip:</strong> $${totalTip.toFixed(2)}</p>
            <p><strong>Total Bill:</strong> $${totalBill.toFixed(2)}</p>
            <hr>
            <p style="font-size: 1.2rem; color: #2ecc71;"><strong>Per Person: $${perPerson.toFixed(2)}</strong></p>
        </div>
    `;
}

// GPA Logic
function addCourse() {
    const container = document.getElementById('course-list');
    const row = document.createElement('div');
    row.className = 'course-row';
    row.style.cssText = "display: flex; gap: 10px; margin-bottom: 10px;";
    row.innerHTML = `
        <input type="text" placeholder="Course Name" style="flex: 2;">
        <select class="grade-select" style="flex: 1;">
            <option value="4.0">A</option><option value="3.0">B</option>
            <option value="2.0">C</option><option value="1.0">D</option>
            <option value="0.0">F</option>
        </select>
        <input type="number" class="credits" placeholder="Credits" style="flex: 1;" value="3">
    `;
    container.appendChild(row);
}

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

// BMR Logic (Mifflin-St Jeor Equation)
function calcBMR() {
    const age = parseFloat(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weightBMR').value);
    const height = parseFloat(document.getElementById('heightBMR').value);
    const gender = document.querySelector('name="gender"]:checked').value;
    const res = document.getElementById('resultBoxBMR');

    if (!age || !weight || !height) {
        res.innerHTML = "Please fill all fields.";
        return;
    }

    let bmr = (10 * weight) + (6.25 * height) - (5 * age);
    bmr = (gender === 'male') ? bmr + 5 : bmr - 161;

    res.innerHTML = `<p>Your BMR: <strong>${Math.round(bmr)} Calories/day</strong></p>`;
}

/**
 * Student Loan Refinance Calculator Logic
 */
function calcRefi() {
    // 1. Get input values by ID
    const balance = parseFloat(document.getElementById('refiBalance').value);
    const oldRate = parseFloat(document.getElementById('oldRate').value);
    const newRate = parseFloat(document.getElementById('newRate').value);
    const years = parseFloat(document.getElementById('refiTenure').value);
    const resBox = document.getElementById('resultBox');

    // 2. Validation: Ensure all fields are filled and positive
    if (!balance || !oldRate || !newRate || !years || balance <= 0) {
        resBox.innerHTML = `<p style="color: #d9534f; font-weight: bold;">Please fill in all fields with valid numbers.</p>`;
        resBox.style.display = "block";
        return;
    }

    // 3. Mathematical Conversions
    const n = years * 12; // Total months
    const monthlyOldR = (oldRate / 100) / 12;
    const monthlyNewR = (newRate / 100) / 12;

    // 4. EMI Calculation Formula: [P x R x (1+R)^N] / [(1+R)^N - 1]
    const calcEmi = (p, r, months) => {
        if (r === 0) return p / months; // Handle 0% interest case
        const x = Math.pow(1 + r, months);
        return (p * r * x) / (x - 1);
    };

    const oldEmi = calcEmi(balance, monthlyOldR, n);
    const newEmi = calcEmi(balance, monthlyNewR, n);

    // 5. Calculate Savings
    const monthlySavings = oldEmi - newEmi;
    const totalSavings = monthlySavings * n;

    // 6. Display Results with US Currency Formatting
    if (monthlySavings <= 0) {
        resBox.innerHTML = `<p style="color: #f0ad4e;">Your new rate is higher or equal. Refinancing may not save you money.</p>`;
    } else {
        resBox.innerHTML = `
            <div style="text-align: left; border-left: 4px solid #28a745; padding-left: 15px;">
                <h3 style="margin: 0; color: #28a745;">Monthly Savings: $${monthlySavings.toFixed(2)}</h3>
                <p style="margin: 10px 0 5px 0;">New Monthly Payment: <strong>$${newEmi.toFixed(2)}</strong></p>
                <p style="margin: 0;">Total Lifetime Savings: <strong style="color: #28a745;">$${totalSavings.toLocaleString(undefined, {minimumFractionDigits: 2})}</strong></p>
            </div>
        `;
    }

    // Ensure the box is visible (in case your CSS has it hidden)
    resBox.style.display = "block";
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