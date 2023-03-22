import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

import Navbar from "../components/Navbar";
import Science from "../components/Science";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1532009877282-3340270e0529?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=cro
    p&w=1170&q=80"
        title="Your Journey Your Story"
        text="The life of inner peace, being harmonious and without stress, 
    is the easiest type of existence."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Science />
      <Footer />
    </>
  );
}

export default Home;
