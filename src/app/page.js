import Banner from "@/components/Banner/Banner";
import PopularCourses from "@/components/PopularCourses/PopularCourses";
import "./page.css"
import Accordion from "@/components/Accordian/Accordian";
import Testimonial from "@/components/Testimonial/Testimonial";
export default function Home() {
  return (
    <div>
       <Banner />
       <PopularCourses />
      <div className="main">
 <Accordion />
   </div>
   <Testimonial />
    </div>
   
   
  );
}
