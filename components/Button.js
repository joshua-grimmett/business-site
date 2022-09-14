import Link from "next/link";

export default function Button({ text, href, ...props }) {
  return (
    <div className="button" {...props}>
      <Link href={href}>
        <button>
          {text}
        </button>
      </Link>
    </div>
  )
}

export function PrimaryButton(props) {
  return (
    <Button {...props} className={`button primary-button ${props.className}`}/>
  )
}

export function SubmitButton(props) {
  return (
    <div className={`button button-alt ${props.more}`} {...props}>
      <button type="submit">
        {props.text}
      </button>
    </div>
  )
}