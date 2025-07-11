import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  // State untuk menyimpan data formulir
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  // State untuk status pengiriman (loading, success, error)
  const [status, setStatus] = useState('');

  // Fungsi untuk menangani perubahan pada input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fungsi yang dijalankan saat formulir disubmit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // 1. Validasi Formulir
    if (!name.trim() || !email.trim() || !message.trim()) {
      alert('Harap isi semua kolom sebelum mengirim pesan.');
      return;
    }

    setStatus('sending'); // Menandakan proses pengiriman dimulai

    // ## GANTI DENGAN KUNCI EMAILJS ANDA ##
    const serviceID = 'service_getle69'; // Ganti dengan Service ID Anda
    const templateID = 'template_ynnziu8'; // Ganti dengan Template ID Anda
    const publicKey = 'cWz4el0834XMjY8AN'; // Ganti dengan Public Key Anda

    // 2. Kirim Email Menggunakan EmailJS
    emailjs.send(serviceID, templateID, {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    }, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('success'); // Set status berhasil
        alert('Pesan Anda telah berhasil terkirim!');
        setFormData({ name: '', email: '', message: '' }); // Kosongkan formulir
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setStatus('error'); // Set status gagal
        alert('Maaf, terjadi kesalahan saat mengirim pesan. Silakan coba lagi.');
      });
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 gradient-text">Get In Touch</h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Have any questions or interesting projects? Feel free to contact me!
          </p>
        </motion.div>

        <motion.form 
          onSubmit={handleSubmit} 
          className="space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text" name="name" value={formData.name} onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all duration-200"
              placeholder="Your Name"
            />
            <input
              type="email" name="email" value={formData.email} onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all duration-200"
              placeholder="Your Email"
            />
          </div>
          
          <textarea
            name="message" rows={5} value={formData.message} onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all duration-200 resize-none"
            placeholder="Your Message..."
          />
          
          <button
            type="submit"
            className="group w-full relative inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white bg-cyan-500 rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:bg-cyan-600 shadow-lg shadow-cyan-500/20 disabled:bg-slate-600 disabled:cursor-not-allowed"
            disabled={status === 'sending'} // Nonaktifkan tombol saat mengirim
          >
            <span className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <span className="relative flex items-center gap-2">
              <Send size={20} />
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </span>
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;