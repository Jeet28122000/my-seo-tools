import EMICalculator from "@/components/EMICalculator"

export const metadata = {
  title: "EMI Calculator – Calculate Loan EMI Online | ExamSoup",
  description:
    "Free EMI calculator to calculate monthly loan EMI for home loan, car loan and personal loan.",
  keywords: [
    "emi calculator",
    "loan emi calculator",
    "home loan emi calculator",
    "car loan emi calculator",
    "monthly emi calculator"
  ],
  openGraph: {
    title: "EMI Calculator – Calculate Loan EMI Online",
    description:
      "Free EMI calculator to calculate monthly loan EMI for home loan, car loan and personal loan.",
    url: "https://examsoup.com/emi-calculator",
    siteName: "ExamSoup",
    type: "website"
  }
}

export default function Page() {
  return <EMICalculator />
}