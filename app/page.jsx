import Banner from "./banner/page";
import Benefits from "./benefits/page";
import Contacts from "./contacts/page";
import Lessons from "./lessons/page";
import Navbar from "./navbar/page";
import Packages from "./packages/page";
import Testimonies from "./testimonies/page";
import VMO from "./vmo/page";


export default function LandingPage() {
  return (
      <div>
        <Navbar />
        <Banner />
        <VMO />
        <Benefits />
        <Packages />
        <Lessons />
        <Testimonies />
        <Contacts />
      </div>
  )
}
