import Typewriter from 'typewriter-effect'
const arrowDown = './image/arrow-down.svg'

const Hero = () => {
    return (
        <section id="hero" className="flex flex-col justify-center items-center bg-red-300 min-h-[600px]">
            <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl text-gray-100">
                <h1 id="hero" className="text-4xl font-bold leading-none mb-4 stroke-cyan-500">
                    <Typewriter
                        options={{
                            strings: ['Himpunan Mahasiswa Informatika'],
                            autoStart: true,
                            loop: true,
                            delay: 80,
                            cursor: ';',
                            pauseFor: 20000
                        }}
                    />
                </h1>
                <h3 id="hero" className="text-2xl font-semibold mb-8">
                    <Typewriter
                        options={{
                            strings: ['STIMIK Tunas Bangsa Banjarnegara'],
                            autoStart: true,
                            loop: true,
                            delay: 20,
                            cursor: '|',
                            pauseFor: 20000
                        }}
                    />
                </h3>
                <a 
                    href="#Desc1"
                    className="bg-[#00ADB5] p-2 rounded-lg shadow-md"
                >
                    <img 
                        src={arrowDown} 
                        alt="direct to down"
                        className="w-4"
                    />
                </a>
            </div>
        </section>
    )
}

export default Hero