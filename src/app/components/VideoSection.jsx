// components/VideoSection.jsx
'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { FaPlayCircle } from 'react-icons/fa';

// Importação dinâmica do ReactPlayer
const ReactPlayer = dynamic(() => import('react-player'), {
  ssr: false, // Desabilita SSR para este componente
});

export default function VideoSection() {
  const [isClient, setIsClient] = useState(false);
  const [activeVideo, setActiveVideo] = useState(0);

  // Verifica se estamos no cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  const videos = [
    {
      url: 'https://youtube.com/embed/q-pvZvPq2UM?si=qVt2wl-TjAZtiAC5',
      title: 'Ford Bronco - Sinceras Opniões!',
      description: 'Vou falar um pouco sobre essa maquina!',
      thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvbml0b3xlbnwwfHwwfHx8MA%3D%3D' // Adicione thumbnails locais
    },
    {
      url: 'https://youtube.com/embed/XjCXodR4fVU?si=7a4ajsjA2FRFpjKj',
      title: 'BYD - MANDARIM',
      description: 'Lançamento da BYD MANDARIM!',
      thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvbml0b3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      url: 'https://youtube.com/embed/eivaubYbk_c?si=osWkmduw5L-vP47w',
      title: 'Conheça um pouco do nosso Portifolio!',
      description: 'Especializado em produção audio visual!',
      thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvbml0b3xlbnwwfHwwfHx8MA%3D%3D'
    }
  ];

  // Componente de placeholder enquanto o vídeo não carrega
  const VideoPlaceholder = () => (
    <div className="w-full h-full bg-gray-900 flex items-center justify-center">
      <FaPlayCircle className="text-6xl text-[#BF1501]" />
    </div>
  );

  return (
    <section id="videos" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Nossos Vídeos</h2>
          <div className="w-24 h-1 bg-[#BF1501] mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Confira alguns exemplos dos nossos trabalhos em vídeo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Player Principal */}
          <motion.div 
            className="lg:col-span-2 aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            {isClient ? (
              <ReactPlayer
                url={videos[activeVideo].url}
                width="100%"
                height="100%"
                controls
                playing={false}
                light={videos[activeVideo].thumbnail}
                playIcon={<FaPlayCircle className="text-6xl text-[#BF1501]" />}
              />
            ) : (
              <VideoPlaceholder />
            )}
          </motion.div>

          {/* Lista de Vídeos */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            {videos.map((video, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                  activeVideo === index ? 'bg-[#BF1501]' : 'bg-gray-900 hover:bg-gray-800'
                }`}
                onClick={() => setActiveVideo(index)}
              >
                <div className="aspect-video mb-3 relative overflow-hidden rounded-lg">
                  {isClient ? (
                    <ReactPlayer
                      url={video.url}
                      width="100%"
                      height="100%"
                      light={video.thumbnail}
                      playIcon={<FaPlayCircle className="text-4xl text-red-600" />}
                    />
                  ) : (
                    <VideoPlaceholder />
                  )}
                </div>
                <h3 className="text-white font-semibold mb-2">{video.title}</h3>
                <p className="text-gray-300 text-sm">{video.description}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Descrição do Vídeo Atual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-8 p-6 bg-gray-900 rounded-lg"
        >
          <h3 className="text-2xl font-bold text-white mb-3">
            {videos[activeVideo].title}
          </h3>
          <p className="text-gray-300">
            {videos[activeVideo].description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}