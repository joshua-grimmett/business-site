import Image from "next/image";
import Head from "next/head";

import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import HalfGrid from "../components/HalfGrid";
import Card from "../components/Card";
import Contact from "../components/Contact";

export default function Home() {
  const navbar = Navbar;

	return (
    <Layout>
      <Head>
        <title>Josh Grimmett Web Developer</title>
      </Head>
      <Hero navbar={navbar}></Hero>
      <div id="about"></div>
      <HalfGrid>
        <div className="bg-[url('/chat.png')] image"/>
        <div className="mx-auto">
          <Card cta={{text: "Get in touch", href: "#contact"}} text="I listen to the needs of your business, to create the website or digital solution suited for you."/>
        </div>
      </HalfGrid>
      <HalfGrid alt={true}>
        <div className="bg-[url('/custom.png')] image md:order-1"/>
        <div className="mx-auto">
          <Card cta={{text: "Get in touch", href: "#contact"}} text="I customise your website design and experience for your branding and business purpose."/>
        </div>
      </HalfGrid>
      <HalfGrid>
        <div className="bg-[url('/feedback.png')] image"/>
        <div className="mx-auto">
          <Card cta={{text: "Get in touch", href: "#contact"}} text="I work together with you to make sure you are happy with the design and experience."/>
        </div>
      </HalfGrid>
      <section id="technologies" className="full-width-section flex flex-col items-center gap-10 bg-white dark:bg-black">
        <span className="text-3xl font-extrabold">Your Favourite Industry Standard Technologies</span>
        <div className="dark:block hidden">
          <Image src="/icons.png" alt="" width={800} height={50}/>
        </div>
        <div className="block dark:hidden">
          <Image src="/icons-black.png" alt="" width={800} height={50}/>
        </div>
      </section>
      <Contact/>
    </Layout>
  )
}
