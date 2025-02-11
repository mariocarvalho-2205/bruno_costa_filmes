'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);
  const img1 = "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9uaXRvfGVufDB8fDB8fHww"
  const img2 = "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9uaXRvfGVufDB8fDB8fHww"
  const img3 = "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9uaXRvfGVufDB8fDB8fHww"
  const img4 = "https://plus.unsplash.com/premium_photo-1691086683862-66e8e0c5038a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJvbml0b3xlbnwwfHwwfHx8MA%3D%3D"
const images = [img1, img2, img3, img1, img2, img3,img4,img1, img2, img3]; // Substitua pelos caminhos reais das imagens

  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center text-white mb-12"
        >
          Nosso Portfólio
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden group"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt={`Portfolio ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}