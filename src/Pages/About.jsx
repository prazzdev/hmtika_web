import Header from "../Components/Header"
import Footer from "../Components/Footer"

const About = () => {
    return(
        <>
        <Header />
        <section className="container mt-8">
            <figure className="text-center">
                <img 
                    src="./image/logo.webp" 
                    alt="" 
                    className="w-[250px] h-[250px] object-cover inline-block"
                />
            </figure>
            <div className="mx-8">
                <div className="flex flex-col mb-4">
                    <h1 className="font-bold mx-auto mb-1">Visi :</h1>
                    <p className="text-justify text-sm">
                        Terwujudnya Himpunan Mahasiswa Teknik Informatika yang berintegritas, bersinergi, dan berkualitas agar tercipta Mahasiswa Teknik Informatika yang berkulitas serta berwawasan luas.
                    </p>
                </div>
                <div className="flex flex-col mb-4">
                    <h1 className="font-bold mx-auto mb-1">Misi :</h1>
                    <ol className="text-sm">
                        <li>1. Meningkatkan skill ke-informatika-an bagi Mahasiswa Teknik Informatika.</li>
                        <li>2. Mewadahi dan menerima aspirasi dari Mahasiswa Teknik Informatika.</li>
                        <li>3. Menumbuhkan rasa tanggungjawab serta cinta terhadap Himpunan Mahasiswa  Teknik Informatika.</li>
                    </ol>
                </div>
                <div className="flex flex-col">
                    <h1 className="font-bold mx-auto mb-1">Filosofi Logo</h1>
                    <ol className="text-sm">
                        <li><b>Simbol Lingkaran:</b> Melambangkan kebulatan tekad untuk mengarungi / mengikuti perkembangan dunia teknologi yang semakin pesat</li>
                        <li><b>Simbol Jaringan:</b> Melambangkan jaringan-jaringan komputer yang berhubungan satu sama lain.</li>
                        <li><b>Simbol Buku:</b> Melambangkan buku sebagai sumber ilmu pengetahuan yang luas sebagai bekal untuk mengarungi perkembangan teknologi yang semakin pesat.</li>
                        <li><b>Tulisan STIMIK di atas:</b> Melambangkan bahwa Himpunan Mahasiswa Teknik Informatika (HMTIKA) ini berada di bawah naungan kampus STIMIK</li>
                        <li><b>Warna Biru Simbol Buku:</b> Melambangkan sifat komunikatif, dapat dipercaya, dan beretika baik dalam dunia teknologi, perkuliahan, maupun masyarakat</li>
                    </ol>
                </div>
            </div>
        </section>
        <Footer />
        </>
    )
}

export default About