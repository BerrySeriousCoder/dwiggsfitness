import ClassSection from "../components/classes";
import Hero from "../components/hero";
import PhlioshophySection from "../components/philosophy";



export default function LandingPage() {
    return (
        <div> 
            <div className="h-[65vh] md:h-screen" >
              <Hero></Hero> 
            </div> 

            <div className=" " >

              <PhlioshophySection></PhlioshophySection>
            </div>

            <div>
              <ClassSection></ClassSection>
            </div>

            <div>
             
            </div>

              
        </div>
    )
}