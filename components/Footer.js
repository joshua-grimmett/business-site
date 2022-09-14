import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="logo">
          <Link href="/">
            <a>
              Josh
              <br/>
              Grimmett
            </a>
          </Link>
        </div>
        <div></div>
        <div className="links">
          <Link href="#about">
            <a>About</a>
          </Link>
          <Link href="#contact">
            <a>Contact</a>
          </Link>
        </div>
        <div className="links">
          <a href="tel:+61411725474">+61 411 725 474</a>
          <a href="mailto:joshua@grimmett.com.au">joshua@grimmett.com.au</a>
        </div>
      </div>
    </footer>
  )
}