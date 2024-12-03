import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import PopularCourses from "@/components/PopularCourses/PopularCourses";
import "./page.module.css"
export default function Home() {
  return (
   <div className="main">
  <Navbar />
 <Banner />
 <PopularCourses />

  <Footer />

   </div>
  );
}
