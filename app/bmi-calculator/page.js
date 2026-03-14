import BMICalculator from "@/components/BMICalculator"

export const metadata = {
  title: "BMI Calculator – Calculate Body Mass Index Online | ExamSoup",
  description:
    "Free BMI calculator to check your body mass index using height and weight. Instantly calculate BMI and understand your health category.",
  keywords: [
    "bmi calculator",
    "body mass index calculator",
    "calculate bmi",
    "bmi chart",
    "weight and height bmi calculator"
  ],
  openGraph: {
    title: "BMI Calculator – Check Your Body Mass Index",
    description:
      "Calculate your BMI instantly using our free body mass index calculator.",
    url: "https://examsoup.com/bmi-calculator",
    siteName: "ExamSoup",
    type: "website"
  }
}

export default function Page() {
  return <BMICalculator />
}