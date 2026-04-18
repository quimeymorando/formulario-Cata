import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const App = () => {
  return (
    <main className="flex items-center justify-center min-h-screen w-full px-6 py-12 md:py-0 overflow-hidden">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        
        {/* Columna Izquierda: Copy */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col space-y-6 text-center md:text-left"
        >
          <div className="inline-flex items-center justify-center md:justify-start space-x-2 text-brand-gold tracking-widest text-xs uppercase font-medium mb-2">
            <span>TU MOMENTO ES AHORA</span>
          </div>
          
          <h1 className="font-dream text-4xl md:text-5xl lg:text-7xl leading-tight md:leading-[1.1] text-brand-purple">
            Súmate al curso gratuito para madres que quieren disfrutar su día a día <Sparkles className="inline-block w-8 h-8 md:w-12 md:h-12 text-primary-pink animate-pulse align-middle" />
          </h1>
          
          <p className="font-outfit text-base md:text-lg text-brand-purple/70 max-w-lg mx-auto md:mx-0 leading-relaxed flex items-center md:items-start justify-center md:justify-start gap-2">
            <span className="text-primary-pink text-xl">•</span> Te comparto los 3 pasos para salir del agotamiento maternal al disfrute en tu maternidad.
          </p>
        </motion.div>

        {/* Columna Derecha: Formulario */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative w-full max-w-md mx-auto"
        >
          {/* Elemento decorativo de fondo */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-pink/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-purple/10 rounded-full blur-2xl"></div>
          
          <div className="p-2 md:p-4 rounded-3xl relative overflow-hidden min-h-[600px]">
            <iframe
              src="https://api.funnelup.io/widget/form/dfeahNoL8LvReY6UxCii"
              style={{ width: '100%', height: '100%', border: 'none', borderRadius: '1.5rem', minHeight: '600px', backgroundColor: 'transparent' }}
              id="inline-dfeahNoL8LvReY6UxCii"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivated"
              data-deactivation-value=""
              data-form-name="Formulario Curso Gratuito"
              data-scrollbar="yes"
              data-contact-id=""
              title="Formulario de Inscripción"
            ></iframe>
            <script src="https://api.funnelup.io/js/form_embed.js"></script>
          </div>
        </motion.div>
        
      </div>
    </main>
  )
}

export default App
