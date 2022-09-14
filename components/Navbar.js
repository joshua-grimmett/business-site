import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <Link href="/">
          <a>
            Josh
            <br/>
            Grimmett
          </a>
        </Link>
      </div>
      <div className="links">
        <Link href="#about">
          <a>About</a>
        </Link>
        <Link href="#contact">
          <a>Contact</a>
        </Link>
      </div>
    </div>
  ) 
}
