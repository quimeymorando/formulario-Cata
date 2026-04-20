import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, MessageCircleHeart } from 'lucide-react'

const ConfirmationPage = () => {
  return (
    <main className="flex items-center justify-center min-h-screen w-full px-6 py-16 md:py-0 overflow-hidden relative">
      {/* Luces decorativas sutiles en el fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[40vw] md:h-[40vw] bg-primary-pink/10 rounded-full blur-[100px] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center text-center space-y-8 bg-brand-dark/40 backdrop-blur-xl p-8 md:p-14 rounded-[2rem] border border-brand-purple/10 shadow-2xl"
      >
        <div className="inline-flex items-center justify-center space-x-2 text-brand-gold tracking-widest text-xs uppercase font-medium">
          <span>¡INSCRIPCIÓN CONFIRMADA!</span>
        </div>
        
        <h1 className="font-dream text-3xl md:text-5xl lg:text-6xl leading-tight text-brand-purple">
          Gracias por sumarte! <br className="hidden md:block"/> 
          <span className="text-primary-pink">Falta muy poquito...</span> <Sparkles className="inline-block w-6 h-6 md:w-8 md:h-8 text-brand-gold animate-pulse align-top" />
        </h1>
        
        <div className="font-outfit text-base md:text-[1.1rem] text-brand-purple/80 space-y-6 leading-relaxed flex flex-col items-center">
          <p>
            ...para que nos encontremos en el Curso Exclusivo para Madres que quieren disfrutar sus días y su maternidad✨
          </p>
          <p>
            Abrí un grupo de WhatsApp exclusivo, en formato canal, donde voy a compartir info del evento, las grabaciones y también data como esta: hoy en el sincromaya iniciamos 13 días con el propósito del Mono Magnético Azul, que nos invita a salir de la ilusión a través de la alegría, el juego y la magia.
          </p>
          <p className="font-medium text-brand-purple text-lg">
            Mi intención en esta onda es abrir los ojos cada día desde ese lugar de inocencia que me enseña la maternidad 💗
          </p>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
           className="w-full flex flex-col items-center gap-6 pt-6 border-t border-brand-purple/10 mt-6"
        >
          <p className="text-sm md:text-base uppercase tracking-widest text-[#25D366] font-semibold font-outfit animate-pulse">
            Sumate acá que hoy enviaré un Regalo al grupo
          </p>
          
          <a 
            href="https://chat.whatsapp.com/HPJpCxUEris0prND702iHF?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-5 md:px-12 md:py-6 bg-[#25D366] text-brand-dark rounded-full font-bold text-lg hover:bg-[#1DA851] hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(37,211,102,0.3)] hover:shadow-[0_0_50px_rgba(37,211,102,0.6)]"
          >
            <MessageCircleHeart className="w-7 h-7 text-brand-dark transition-transform group-hover:scale-110" />
            <span>Unirme al Canal de WhatsApp</span>
          </a>
        </motion.div>
      </motion.div>
    </main>
  )
}

export default ConfirmationPage
