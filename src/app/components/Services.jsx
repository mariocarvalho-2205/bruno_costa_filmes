// components/Services.jsx
'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  FaCamera, 
  FaVideo, 
  FaPortrait, 
  FaImage, // Substituindo FaDrone por FaImage
  FaRing, 
  FaGraduationCap 
} from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      icon: FaPortrait,
      title: "Ensaios Fotográficos",
      description: "Ensaios profissionais para todas as ocasiões, com a melhor qualidade e criatividade.",
      price: "A partir de R$ 500",
    },
    {
      icon: FaVideo,
      title: "Filmagem Profissional",
      description: "Produções audiovisuais com equipamentos de última geração e edição profissional.",
      price: "A partir de R$ 1.500",
    },
    {
      icon: FaImage, // Ícone atualizado
      title: "Filmagem Aérea",
      description: "Capturas aéreas espetaculares para seu evento ou projeto.",
      price: "A partir de R$ 800",
    },
    {
      icon: FaRing,
      title: "Casamentos",
      description: "Cobertura completa do seu grande dia, com fotos e vídeos inesquecíveis.",
      price: "A partir de R$ 3.000",
    },
    {
      icon: FaGraduationCap,
      title: "Formaturas",
      description: "Registre esse momento especial com as melhores fotos e vídeos.",
      price: "A partir de R$ 2.000",
    },
    {
      icon: FaCamera,
      title: "Eventos Corporativos",
      description: "Cobertura profissional para eventos empresariais e corporativos.",
      price: "A partir de R$ 1.800",
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Nossos Serviços</h2>
          <div className="w-24 h-1 bg-[#BF1501] mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços fotográficos e de filmagem para 
            atender todas as suas necessidades.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 p-6 rounded-lg hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <service.icon className="text-4xl text-[#BF1501] mb-4" />
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <p className="text-[#BF1501] font-semibold">{service.price}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-12"
        >
          <a
            href="#contato"
            className="inline-block bg-[#BF1501] text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            Solicitar Orçamento
          </a>
        </motion.div>
      </div>
    </section>
  );
}