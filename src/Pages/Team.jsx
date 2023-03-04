import Footer from "../Components/Footer"
import Header from "../Components/Header"
import ProfileBox from "../Components/Partials/ProfileBox"

const Team = () => {
    return (
        <>
        <Header />
        <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
                <h1 className="text-xl lg:text-4xl font-bold leading-none text-center mb-1 lg:mb-3">
                    Struktur Kepengurusan HMTIKA    
                </h1>
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">Periode 2023/2024</p>
                <div className="flex flex-row flex-wrap justify-center mt-10 lg:mt-20">
                    <ProfileBox 
                        name="Arrazzaq Panca Putra" 
                        position="Leader" 
                        email="#"
                        linkedIn="#"
                        github="#"
                        ig="#"
                    />
                    <ProfileBox 
                        name="Agung Prasetyo" 
                        position="Co-Leader" 
                        email="mailto:prazzid31@gmail.com"
                        linkedIn="https://linkedin.com/agungpraz31"
                        github="https://github.com/prazzdev"
                        ig="https://instagram.com/agungpraz31"
                    />
                    <ProfileBox 
                        name="Arziqa Fatimatul Hiyah" 
                        position="Bendahara" 
                        email="#"
                        linkedIn="#"
                        github="#"
                        ig="#"
                    />
                    <ProfileBox 
                        name="Febiya Sinta Bella" 
                        position="Bendahara 2" 
                        email="#"
                        linkedIn="#"
                        github="#"
                        ig="#"
                    />
                    <ProfileBox 
                        name="Tati Fitriana" 
                        position="Sekretaris" 
                        email="#"
                        linkedIn="#"
                        github="#"
                        ig="#"
                    />
                    <ProfileBox 
                        name="Alvin Widodo" 
                        position="Sekretaris 2" 
                        email="#"
                        linkedIn="#"
                        github="#"
                        ig="#"
                    />
                    <ProfileBox 
                        name="Gilang Fajar Syabani" 
                        position="Humas" 
                        email="#"
                        linkedIn="#"
                        github="#"
                        ig="#"
                    />
                    <ProfileBox 
                        name="Febri Sarif H" 
                        position="Humas 2" 
                        email="#"
                        linkedIn="#"
                        github="#"
                        ig="#"
                    />
                    <ProfileBox 
                        name="Eka Tresna Wati" 
                        position="Humas 3" 
                        email="#"
                        linkedIn="#"
                        github="#"
                        ig="#"
                    />
                    <ProfileBox 
                        name="Fitri Nur Fadillah" 
                        position="Media & Informasi" 
                        email="#"
                        linkedIn="#"
                        github="#"
                        ig="#"
                    />
                    <ProfileBox 
                        name="Khafid Ilhan Al Manjiz" 
                        position="Media & Informasi (2)" 
                        email="#"
                        linkedIn="#"
                        github="#"
                        ig="#"
                    />
                    <ProfileBox 
                        name="Asifa Ahmad" 
                        position="Bidang Keilmuan" 
                        email="#"
                        linkedIn="#"
                        github="#"
                        ig="#"
                    />
                    <ProfileBox 
                        name="Imam Nur Falah" 
                        position="Bidang Keilmuan (2)" 
                        email="#"
                        linkedIn="#"
                        github="#"
                        ig="#"
                    />
                </div>
            </div>
        </section>
        <Footer />
        </>
    )
}

export default Team