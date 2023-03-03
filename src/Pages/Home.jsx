import Desc1 from "../Components/Desc1"
import Desc2 from "../Components/Desc2"
import Desc3 from "../Components/Desc3"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import Hero from "../Components/Hero"
import ToTop from "../Components/Partials/ToTop"

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Desc1 />
            <Desc2 />
            <Desc3 />
            <Footer />
            <ToTop />
        </>
    )
}

export default Home