import Navbar from "../components/Navbar"
import FoodCard from "../components/FoodCard"
import Footer from "../components/Footer"
import Carousal from "../components/Carousal"
export default function Home() {
    return(
        <>
          <Navbar />
          <Carousal />
          <FoodCard />
          <FoodCard />
          <Footer />
        </>
    )
}