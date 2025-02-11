'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formData,
        'YOUR_PUBLIC_KEY'
      );
      alert('Mensagem enviada com sucesso!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      alert('Erro ao enviar mensagem.');
    }
  };

  return (
    <section id="contato" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center text-white mb-12"
        >
          Entre em Contato
        </motion.h2>
        
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-lg mx-auto space-y-6"
          onSubmit={handleSubmit}
        >
          <div>
            <input
              type="text"
              placeholder="Nome"
              className="w-full p-3 bg-gray-900 text-white rounded"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-gray-900 text-white rounded"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Telefone"
              className="w-full p-3 bg-gray-900 text-white rounded"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
            />
          </div>
          <div>
            <textarea
              placeholder="Mensagem"
              rows="4"
              className="w-full p-3 bg-gray-900 text-white rounded"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#BF1501] text-white rounded hover:bg-[#ff6250] transition-colors"
          >
            Enviar Mensagem
          </button>
        </motion.form>
      </div>
    </section>
  );
}