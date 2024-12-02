import Banner from "@/components/Banner/Banner";
import PopularCard from "@/components/Cards/PopularCard";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
   <main>
  <Navbar />
 <Banner />
 <PopularCard />

  <Footer />

   </main>
  );
}
