import Typewriter from "typewriter-effect";

import { PrimaryButton } from "../components/Button";

export default function Hero({ navbar: CustomNavbar }) {
  return (
    <section id="hero" className="hero">
      { CustomNavbar && <CustomNavbar/> }
      <div className="hero-content">
        <span className="hero-heading">
          <Typewriter
            options={{
              autoStart: true,
              delay: 50
            }}
            onInit={(typewriter) => {
              typewriter.typeString("I’m Josh, <b>a freelance web developer</b> based on the Gold Coast.")
                .changeDelay(5)  
                .start()
            }}/>
        </span>
        <PrimaryButton className="mx-auto" text="Get in touch" href="#contact"/>
      </div>
    </section>
  )
}
