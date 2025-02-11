'use client';
import { motion } from 'framer-motion';
import { FaCamera, FaVideo, FaHeart } from 'react-icons/fa';

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Nossa História</h2>
          <div className="w-24 h-1 bg-[#BF1501] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-[#BF1501]">Paixão pela Fotografia</h3>
            <p className="text-gray-300 leading-relaxed">
              Há mais de uma década, nossa equipe tem se dedicado a capturar os momentos mais especiais 
              da vida de nossos clientes. Começamos como um pequeno estúdio e hoje somos referência 
              em fotografia e filmagem profissional.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Nossa missão é transformar momentos em memórias eternas, com um olhar único e sensível 
              para cada projeto. Trabalhamos com equipamentos de última geração e uma equipe altamente 
              qualificada.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="aspect-square relative overflow-hidden rounded-lg shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1565462900119-a16b91dead9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvbml0b3xlbnwwfHwwfHx8MA%3D%3D" 
                alt="Nosso trabalho" 
                className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative overflow-hidden rounded-lg shadow-2xl mt-12">
              <img 
                src="https://images.unsplash.com/photo-1501493870936-9c2e41625521?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJvbml0b3xlbnwwfHwwfHx8MA%3D%3D" 
                alt="Nossa equipe" 
                className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {[
            { icon: FaCamera, title: "2000+", text: "Ensaios Fotográficos" },
            { icon: FaVideo, title: "500+", text: "Vídeos Produzidos" },
            { icon: FaHeart, title: "1500+", text: "Clientes Satisfeitos" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center p-6 rounded-lg bg-gray-900"
            >
              <item.icon className="text-4xl text-[#BF1501] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}