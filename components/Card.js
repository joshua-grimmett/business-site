import { PrimaryButton } from "./Button";

export default function Card({ cta, text }) {
  return (
    <div className="card">
      <span>{text}</span>
      <PrimaryButton className="mr-auto" text={cta.text} href={cta.href}/>
    </div>
  )
}
