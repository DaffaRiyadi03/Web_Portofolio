import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, X } from 'lucide-react';
import ProfileCard from './ProfileCard';

// ## PERUBAHAN DI SINI: Impor PDF sebagai modul ##
import cvPdfUrl from '/asset/CV_MuhammadDaffaRiyadi.pdf'; // Sesuaikan path jika perlu

const Hero: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleContactClick = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.9 }
    };

    return (
        <>
            <section 
                id="hero" 
                className="min-h-screen pt-32 flex items-center justify-center text-center relative overflow-hidden px-4"
            >
                <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
                    
                    {/* Profile Card */}
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        <ProfileCard 
                            avatarUrl="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400"
                            onContactClick={handleContactClick}
                            showUserInfo={true}
                            enableTilt={true}
                        />
                    </motion.div>

                    {/* Nama dan Judul */}
                    <motion.div 
                        className="text-center mt-8 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white">
                            <span className="text-cyan-400 font-bold">Muhammad Daffa Riyadi</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 mt-2">
                            Informatic Engineering | Front End Web & Mobile Developer
                        </p>
                    </motion.div>
                    
                    {/* Tombol View CV */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
                    >
                        <button 
                            onClick={openModal}
                            className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-bold text-slate-300 bg-slate-800/50 rounded-lg border border-slate-700 hover:bg-slate-800 transition-colors duration-300"
                        >
                            View CV
                        </button>
                    </motion.div>

                    {/* Ikon Sosial Media */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="flex justify-center gap-6"
                    >
                        <a href="https://github.com/DaffaRiyadi03" className="text-slate-400 hover:text-cyan-400 hover:scale-110 transition-all duration-200">
                            <Github size={24} />
                        </a>
                        <a href="#" className="text-slate-400 hover:text-cyan-400 hover:scale-110 transition-all duration-200">
                            <Linkedin size={24} />
                        </a>
                        <a 
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=daffariyadi2003@gmail.com" 
                            target="_blank" 
                            rel="noopener noreferrer"  
                            className="text-slate-400 hover:text-cyan-400 hover:scale-110 transition-all duration-200">
                            <Mail size={24} />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Modal untuk menampilkan PDF */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
                        onClick={closeModal}
                    >
                        <motion.div
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="bg-slate-900 rounded-lg p-2 relative w-full max-w-4xl h-[90vh] flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button 
                                onClick={closeModal}
                                className="absolute top-3 right-3 text-slate-400 hover:text-white transition-colors z-20 bg-slate-800 rounded-full p-1"
                            >
                                <X size={24} />
                            </button>
                            <iframe 
                                src={cvPdfUrl} 
                                title="CV Muhammad Daffa Riyadi"
                                className="w-full h-full rounded-md border-0"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Hero;