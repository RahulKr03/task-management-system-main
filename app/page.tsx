import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <div>
       <div>
        <Navbar/>
       </div>
       <div>
        <Hero/>
       </div>
       <div>
        <Footer/>
       </div>
    </div>
  );
}
