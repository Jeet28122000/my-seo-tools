export const metadata = {
  title: "ExamSoup – Free Online Calculators",
  description: "Free online calculators like EMI calculator, BMI calculator, age calculator and more.",
};

export default function Home() {
  return (
    <main style={{padding:"40px",fontFamily:"Arial"}}>
      <h1>ExamSoup Free Calculators</h1>
      <p>Select a tool below</p>

      <ul>
        <li><a href="/emi-calculator">EMI Calculator</a></li>
        <li><a href="/bmi-calculator">BMI Calculator</a></li>
      </ul>
    </main>
  );
}