'use client';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from 'react';

emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

// Definição do esquema de validação com Zod
const contactSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório!"),
  email: z.string().email("E-mail inválido!"),
  phone: z.string().min(11, "O telefone com DDD é obrigatório!"),
  message: z.string().min(3, "A mensagem não pode estar vazia"),
});

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState({
    isSuccess: false,
    isError: false,
    message: ''
  });

  // Efeito para limpar as mensagens após 3 segundos
  useEffect(() => {
    if (formStatus.isSuccess || formStatus.isError) {
      const timer = setTimeout(() => {
        setFormStatus({
          isSuccess: false,
          isError: false,
          message: ''
        });
      }, 3000); // 3 segundos

      return () => clearTimeout(timer);
    }
  }, [formStatus.isSuccess, formStatus.isError]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    try {
      setFormStatus({
        isSuccess: false,
        isError: false,
        message: ''
      });

      // Prepare os dados para envio
      const templateParams = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
        // Adicione campos extras para o template de email se necessário
        date: new Date().toLocaleString('pt-BR')
      };
      
      // Envie o email usando o método sendForm com todos os parâmetros necessários
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
      );
      
      console.log('Email enviado!', response);
      
      // Atualize o estado para mostrar sucesso
      setFormStatus({
        isSuccess: true,
        isError: false,
        message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
      });
      
      // Limpe o formulário
      reset();

    } catch (error) {
      console.error('Erro ao enviar email:', error);
      
      // Atualize o estado para mostrar erro com detalhes mais específicos
      setFormStatus({
        isSuccess: false,
        isError: true,
        message: `Erro ao enviar mensagem: ${error.text || 'Verifique sua conexão com a internet.'}. Código: ${error.status || 'desconhecido'}`
      });
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

        {formStatus.isSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-lg mx-auto mb-6 p-4 bg-green-800 text-white rounded"
          >
            {formStatus.message}
          </motion.div>
        )}

        {formStatus.isError && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-lg mx-auto mb-6 p-4 bg-[#BF1501] text-white rounded"
          >
            {formStatus.message}
          </motion.div>
        )}

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-lg mx-auto space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <input
              type="text"
              placeholder="Nome"
              className="w-full p-3 bg-gray-900 text-white rounded"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-[#BF1501] text-sm pt-1">
                {errors.name.message}
              </p>
            )}
          </div>
          
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-gray-900 text-white rounded"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-[#BF1501] text-sm pt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          
          <div>
            <input
              type="tel"
              placeholder="Telefone com DDD"
              className="w-full p-3 bg-gray-900 text-white rounded"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-[#BF1501] text-sm pt-1">
                {errors.phone.message}
              </p>
            )}
          </div>
          
          <div>
            <textarea
              placeholder="Mensagem"
              rows="4"
              className="w-full p-3 bg-gray-900 text-white rounded"
              {...register("message")}
            />
            {errors.message && (
              <p className="text-[#BF1501] text-sm pt-1">
                {errors.message.message}
              </p>
            )}
          </div>
          
          <button
            type="submit"
            className="w-full py-3 bg-[#BF1501] text-white rounded hover:bg-[#ff6250] transition-colors disabled:opacity-70"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar Pedido"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}