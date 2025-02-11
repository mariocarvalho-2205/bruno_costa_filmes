'use client';
import { FaWhatsapp, FaInstagram, FaRegEnvelope } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-black text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <div className='flex flex-row items-center gap-2 text-[#BF1501]'>
                            <h3 className='text-white font-light uppercase '><span className='font-bold'>Bruno</span> Costa</h3>
                            <p className='uppercase'>Filmes</p>

                        </div>
                        <p className="mb-4">Capturando momentos especiais desde 2020</p>
                        <div className="flex space-x-4">
                            <a
                                href="https://wa.me/1234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl hover:text-[#BF1501] transition-colors"
                            >
                                <FaWhatsapp />
                            </a>
                            <a
                                href="https://instagram.com/fotostudio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl hover:text-[#BF1501] transition-colors"
                            >
                                <FaInstagram />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4">Contato</h3>
                        <div className='flex items-center gap-2'>
                            <FaRegEnvelope />
                            <p>contato@fotostudio.com</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaWhatsapp />
                            <p>Tel: (71) 91234-5678</p>
                        </div>

                        <p>São Paulo - SP</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4">Desenvolvido por</h3>
                        <p>MS SYSTEMS & SOLUTIONS</p>
                        <div className='flex items-center gap-2'>
                            <FaRegEnvelope />
                            <p>Email: webdev@studio.com</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <FaWhatsapp />
                            <p>Tel: (71) 99187-0586</p>
                        </div>
                        <p>© 2025 Todos os direitos reservados</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}