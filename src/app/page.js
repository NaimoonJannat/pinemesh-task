import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import PopularCourses from "@/components/PopularCourses/PopularCourses";
import "./page.css"
import Accordion from "@/components/Accordian/Accordian";
export default function Home() {
  return (
   <div className="main">
 <Banner />
 <PopularCourses />
 <Accordion />
   </div>
  );
}
