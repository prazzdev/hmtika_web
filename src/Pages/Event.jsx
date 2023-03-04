import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Card from "../Components/Card"

const Event = () => {
    return(
        <>
        <Header />
        <div 
            id="container" 
            className="flex justify-around items-center flex-wrap p-4 lg:p-8"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-easing="ease-in-out"
            >
            <Card 
                thumbnail="https://source.unsplash.com/random/300x300/?1"
                category="Training Programming"
                title="Pelatihan Pemrograman Rutin"
                description="Pelatihan Pemrograman Rutin setiap jum'at di lab kampus."    
            />
            <Card 
                thumbnail="https://source.unsplash.com/random/300x300/?1"
                category="Training Programming"
                title="Pelatihan Pemrograman Rutin"
                description="Pelatihan Pemrograman Rutin setiap jum'at di lab kampus."    
            />
            <Card 
                thumbnail="https://source.unsplash.com/random/300x300/?1"
                category="Training Programming"
                title="Pelatihan Pemrograman Rutin"
                description="Pelatihan Pemrograman Rutin setiap jum'at di lab kampus."    
            />
            <Card 
                thumbnail="https://source.unsplash.com/random/300x300/?1"
                category="Training Programming"
                title="Pelatihan Pemrograman Rutin"
                description="Pelatihan Pemrograman Rutin setiap jum'at di lab kampus."    
            />
        </div>
        <Footer />
        </>
    )
}

export default Event