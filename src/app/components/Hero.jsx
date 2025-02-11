'use client';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Hero() {
    const img1 = "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9uaXRvfGVufDB8fDB8fHww"
    const img2 = "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9uaXRvfGVufDB8fDB8fHww"
    const img3 = "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9uaXRvfGVufDB8fDB8fHww"
    const images = [img1, img2, img3]; // Substitua pelos caminhos reais das imagens

    return (
        <section id="home" className="h-screen relative">
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showThumbs={false}
                interval={1500}
            >
                {images.map((img, index) => (
                    <div key={index} className="h-screen">
                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${img})`,
                                boxShadow: 'inset 0 0 100px 50px rgba(0,0,0,0.5)'
                            }}
                        />
                    </div>
                ))}
            </Carousel>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10"
            >
                <h1 className="text-5xl md:text-7xl font-bold mb-4 text-[#BF1501] text-shadow-[2px_2px_4px_rgba(255,255,255,0.5)] ">Capturando Momentos</h1>
                <p className="text-xl md:text-2xl text-[#BF1501] text-shadow-[2px_2px_4px_rgba(255,255,255,0.5)]">Transformando memórias em arte</p>
            </motion.div>
        </section>
    );
}
