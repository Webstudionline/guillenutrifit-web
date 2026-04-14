import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Apple, 
  Activity, 
  Target, 
  Users, 
  ChevronRight, 
  Instagram, 
  Mail, 
  Phone,
  CheckCircle2,
  Menu,
  X,
  ArrowRight,
  Clock,
  HelpCircle,
  MessageCircle,
  ClipboardCheck,
  TrendingUp,
  ChevronDown
} from 'lucide-react';
import { cn } from './lib/utils';

const TikTokIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.76-.53-1.43-1.19-1.93-1.97V14.5c.01 1.44-.2 2.91-.84 4.19-.8 1.64-2.19 3.03-3.88 3.69-1.97.78-4.3.83-6.29.18-1.64-.53-3.1-1.65-4.01-3.11-.95-1.51-1.28-3.39-1.02-5.15.25-1.72 1.1-3.34 2.45-4.43 1.44-1.17 3.36-1.79 5.22-1.73.01 1.46.02 2.92.03 4.38-.81-.04-1.64.16-2.34.58-.62.37-1.13.94-1.38 1.62-.31.84-.31 1.8-.02 2.65.26.78.82 1.47 1.54 1.87.75.42 1.64.56 2.48.47.93-.1 1.81-.55 2.44-1.24.58-.65.88-1.51.89-2.39V0h.01z"/>
  </svg>
);

// --- Components ---

const Navbar = ({ onStart }: { onStart: () => void }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-3">
            <img 
              src="https://i.postimg.cc/N0bq2RwB/IMG_0555.png" 
              alt="Logo Nutrifit" 
              className="h-12 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="text-2xl font-serif font-bold tracking-tight text-emerald-800">
              guille.<span className="text-stone-900">nutrifit</span>
            </span>
          </div>
          
          <div className="flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-emerald-700 hover:text-emerald-800 transition-colors p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Menu (Mobile & Desktop) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-white border-b border-stone-200 overflow-y-auto max-h-[calc(100vh-5rem)]"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-6">Navegación</p>
                <a href="#inicio" onClick={() => setIsOpen(false)} className="block text-2xl font-serif hover:text-emerald-700 transition-colors">Inicio</a>
                <a href="#sobre-mi" onClick={() => setIsOpen(false)} className="block text-2xl font-serif hover:text-emerald-700 transition-colors">Sobre Mí</a>
                <a href="#metodologia" onClick={() => setIsOpen(false)} className="block text-2xl font-serif hover:text-emerald-700 transition-colors">Metodología</a>
                <a href="#objetivos" onClick={() => setIsOpen(false)} className="block text-2xl font-serif hover:text-emerald-700 transition-colors">Objetivos</a>
                <a href="#planes" onClick={() => setIsOpen(false)} className="block text-2xl font-serif hover:text-emerald-700 transition-colors">Planes</a>
                <a href="#resultados" onClick={() => setIsOpen(false)} className="block text-2xl font-serif hover:text-emerald-700 transition-colors">Resultados</a>
                <a href="#faq" onClick={() => setIsOpen(false)} className="block text-2xl font-serif hover:text-emerald-700 transition-colors">Preguntas Frecuentes</a>
                <a href="#contacto" onClick={() => setIsOpen(false)} className="block text-2xl font-serif hover:text-emerald-700 transition-colors">Contacto</a>
              </div>
              
              <div className="flex flex-col justify-center items-center md:items-end gap-6 border-t md:border-t-0 md:border-l border-stone-100 pt-8 md:pt-0 md:pl-8">
                <p className="text-stone-600 text-center md:text-right max-w-xs">
                  ¿Listo para transformar tu vida? Empieza tu plan personalizado hoy mismo.
                </p>
                <button 
                  onClick={() => {
                    onStart();
                    setIsOpen(false);
                  }} 
                  className="w-full md:w-auto bg-emerald-700 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-900/20"
                >
                  Empezar Ahora
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="pt-32 pb-20 overflow-hidden relative">
      {/* Grid Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          initial={{ opacity: 0.3 }}
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#d1fae5_2px,transparent_2px),linear-gradient(to_bottom,#d1fae5_2px,transparent_2px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        />
      </div>

      {/* Background Image Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden opacity-5 pointer-events-none hidden lg:block">
        <img 
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1920" 
          className="w-full h-full object-cover blur-3xl scale-150"
          alt=""
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-6">
              Tu mejor versión empieza aquí
            </span>
            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6 text-stone-900">
              Transforma tu cuerpo, <br />
              <span className="italic text-emerald-700">mejora tu vida.</span>
            </h1>
            <p className="text-lg text-stone-600 mb-8 max-w-lg leading-relaxed">
              Asesoría nutricional personalizada para alcanzar tus objetivos de salud y rendimiento deportivo sin restricciones extremas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#planes" className="flex items-center justify-center gap-2 bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-700/20">
                Ver planes <ArrowRight size={20} />
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/user${i}/100/100`}
                    className="w-12 h-12 rounded-full border-2 border-white object-cover"
                    alt="User"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div className="text-sm">
                <p className="font-bold text-stone-900">Más de 150 clientes satisfechos</p>
                <div className="flex text-amber-400">
                  {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10 bg-stone-200">
              <img 
                src="https://i.postimg.cc/hGMWQVqF/5cedd2a0-e8ce-496c-9648-7211ed860676.jpg" 
                alt="Guillermo García - Nutricionista Deportivo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-200 rounded-full blur-3xl opacity-50 -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-60 -z-10"></div>
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 -left-8 bg-white p-4 rounded-2xl shadow-xl z-20 hidden sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-100 rounded-lg text-emerald-700">
                  <Apple size={24} />
                </div>
                <div>
                  <p className="text-xs text-stone-500 font-medium">Dieta Semanal</p>
                  <p className="text-sm font-bold text-stone-900">100% Personalizada</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-1/4 -right-8 bg-white p-4 rounded-2xl shadow-xl z-20 hidden sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-700">
                  <Activity size={24} />
                </div>
                <div>
                  <p className="text-xs text-stone-500 font-medium">Progreso</p>
                  <p className="text-sm font-bold text-stone-900">+12% Masa Muscular</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Objectives = () => {
  const objectives = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Pérdida de Grasa",
      description: "Optimiza tu metabolismo para perder grasa de forma eficiente y sostenible.",
      color: "bg-orange-50 text-orange-600"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Ganancia Muscular",
      description: "Aumenta tu masa muscular con un plan nutricional enfocado en la hipertrofia.",
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      icon: <Apple className="w-8 h-8" />,
      title: "Salud y Bienestar",
      description: "Mejora tu energía diaria y salud general a través de una alimentación equilibrada.",
      color: "bg-blue-50 text-blue-600"
    }
  ];

  return (
    <section id="objetivos" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4 text-stone-900">Objetivos</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Nos enfocamos en resultados reales mediante planes adaptados a tu meta específica.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {objectives.map((obj, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 transition-all"
            >
              <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-6", obj.color)}>
                {obj.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-stone-900">{obj.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                {obj.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Survey = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [step, setStep] = React.useState(0);
  const [formData, setFormData] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const questions = [
    { id: 'plan', label: '¿Qué plan has escogido?', type: 'select', options: ['Plan Básico', 'Plan Premium'] },
    { id: 'nombre', label: 'Nombre y Apellidos', type: 'text', placeholder: 'Tu nombre completo...' },
    { id: 'nacimiento', label: 'Fecha de nacimiento', type: 'date' },
    { id: 'motivo', label: 'Motivo de la consulta', type: 'textarea', placeholder: '¿Por qué buscas asesoría nutricional?' },
    { id: 'peso', label: 'Peso actual (kg)', type: 'number', placeholder: 'Ej: 75' },
    { id: 'altura', label: 'Altura (cm)', type: 'number', placeholder: 'Ej: 175' },
    { id: 'trabajo', label: '¿En qué trabajas?', type: 'text', placeholder: 'Tu profesión...' },
    { id: 'horario', label: '¿Qué horario de trabajo tienes?', type: 'text', placeholder: 'Ej: De 8:00 a 16:00' },
    { id: 'sueno', label: 'Calidad del sueño', type: 'select', options: ['Mala', 'Regular', 'Buena', 'Excelente'] },
    { id: 'fumador', label: '¿Eres fumador?', type: 'select', options: ['Sí', 'No', 'Ocasionalmente'] },
    { id: 'alcohol', label: '¿Bebes alcohol?', type: 'select', options: ['Sí', 'No', 'Ocasionalmente'] },
    { id: 'actividad', label: 'Actividad física diaria', type: 'select', options: ['Sedentaria', 'Ligera', 'Moderada', 'Intensa'] },
    { id: 'patologias', label: 'Patologías', type: 'textarea', placeholder: 'Enfermedades, lesiones, etc.' },
    { id: 'medicacion', label: 'Medicación', type: 'textarea', placeholder: '¿Tomas algún medicamento actualmente?' },
    { id: 'dietas', label: 'Intentos de dieta', type: 'textarea', placeholder: '¿Has seguido otras dietas antes? ¿Cómo te fue?' },
    { id: 'favoritos', label: 'Alimentos favoritos', type: 'textarea', placeholder: '¿Qué alimentos te encantan?' },
    { id: 'rechazados', label: 'Alimentos rechazados (No te gustan)', type: 'textarea', placeholder: '¿Qué alimentos no soportas?' },
    { id: 'alergias', label: 'Alergias e intolerancias', type: 'textarea', placeholder: '¿Tienes alguna alergia diagnosticada?' },
    { id: 'agua', label: 'Ingesta de agua diaria', type: 'text', placeholder: 'Ej: 2 litros al día' },
    { id: 'recordatorio', label: 'Recordatorio (Dime qué has comido en tus últimas 24 horas)', type: 'textarea', placeholder: 'Desayuno, comida, cena, snacks...' }
  ];

  if (!isOpen) return null;

  const handleNext = async () => {
    if (step < questions.length - 1) setStep(step + 1);
    else {
      setIsSubmitting(true);
      
      // Save to backend
      try {
        await fetch('/api/survey', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ formData }),
        });
      } catch (error) {
        console.error("Error saving survey:", error);
      }

      // Format the message for WhatsApp/Email as fallback/direct contact
      const name = (formData as any).nombre || 'Nuevo Cliente';
      let message = `📋 *CUESTIONARIO: ${name.toUpperCase()}*\n\n`;
      
      questions.forEach(q => {
        const answer = (formData as any)[q.id] || 'No respondido';
        message += `*${q.label}:*\n${answer}\n\n`;
      });

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/34636903883?text=${encodedMessage}`;
      const emailSubject = encodeURIComponent(`Cuestionario: ${name}`);
      const emailBody = encodeURIComponent(message.replace(/\*/g, ''));
      const mailtoUrl = `mailto:guille.nutrifit@gmail.com?subject=${emailSubject}&body=${emailBody}`;

      // Store URLs in state to show in success screen
      (window as any)._surveyUrls = { whatsappUrl, mailtoUrl };

      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    const { whatsappUrl, mailtoUrl } = (window as any)._surveyUrls || {};
    return (
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-stone-900/80 backdrop-blur-md">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl p-8 max-w-xl w-full shadow-2xl text-center"
        >
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600">
            <CheckCircle2 size={40} />
          </div>
          <h3 className="text-3xl font-serif font-bold text-stone-900 mb-4">¡Cuestionario Enviado!</h3>
          <p className="text-stone-600 mb-8 leading-relaxed">
            Tus datos han sido guardados correctamente. Para agilizar el proceso, también puedes enviarlos directamente por WhatsApp o Email.
          </p>
          <div className="grid gap-4">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-600 text-white py-4 rounded-2xl font-bold hover:bg-emerald-700 transition-all"
            >
              Enviar por WhatsApp
            </a>
            <button 
              onClick={() => {
                setIsSubmitted(false);
                setStep(0);
                setFormData({});
                onClose();
              }}
              className="mt-4 text-stone-400 hover:text-stone-600 font-medium transition-colors"
            >
              Cerrar
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  const currentQ = questions[step];

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-stone-900/80 backdrop-blur-md">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl p-8 max-w-xl w-full shadow-2xl max-h-[90vh] overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-8 gap-4">
          <div className="flex flex-1 gap-1">
            {questions.map((_, i) => (
              <div key={i} className={cn("h-1.5 flex-1 rounded-full transition-all", i <= step ? "bg-emerald-600" : "bg-stone-100")} />
            ))}
          </div>
          <button onClick={onClose} className="text-stone-400 hover:text-stone-600 shrink-0"><X size={20} /></button>
        </div>

        <div className="mb-8">
          <label className="block text-sm font-bold text-stone-400 uppercase tracking-widest mb-2">Pregunta {step + 1} de {questions.length}</label>
          <h3 className="text-2xl font-serif font-bold text-stone-900">{currentQ.label}</h3>
        </div>

        <div className="mb-8">
          {currentQ.type === 'text' || currentQ.type === 'number' || currentQ.type === 'date' ? (
            <input 
              key={currentQ.id}
              type={currentQ.type}
              value={(formData as any)[currentQ.id] || ''}
              placeholder={currentQ.placeholder}
              className="w-full bg-stone-50 border-none rounded-2xl p-4 text-lg focus:ring-2 focus:ring-emerald-600 transition-all"
              onChange={(e) => setFormData({ ...formData, [currentQ.id]: e.target.value })}
            />
          ) : currentQ.type === 'select' ? (
            <div className="grid gap-3">
              {currentQ.options?.map((opt) => (
                <button
                  key={opt}
                  onClick={() => {
                    setFormData({ ...formData, [currentQ.id]: opt });
                    handleNext();
                  }}
                  className="w-full text-left p-4 rounded-2xl border border-stone-100 hover:border-emerald-600 hover:bg-emerald-50 transition-all text-stone-700 font-medium"
                >
                  {opt}
                </button>
              ))}
            </div>
          ) : (
            <textarea 
              key={currentQ.id}
              value={(formData as any)[currentQ.id] || ''}
              placeholder={currentQ.placeholder}
              rows={4}
              className="w-full bg-stone-50 border-none rounded-2xl p-4 text-lg focus:ring-2 focus:ring-emerald-600 transition-all"
              onChange={(e) => setFormData({ ...formData, [currentQ.id]: e.target.value })}
            />
          )}
        </div>

        {currentQ.type !== 'select' && (
          <div className="flex gap-3">
            {step > 0 && (
              <button 
                onClick={() => setStep(step - 1)}
                className="flex-1 bg-stone-100 text-stone-600 py-4 rounded-2xl font-bold text-lg hover:bg-stone-200 transition-all"
              >
                Anterior
              </button>
            )}
            <button 
              onClick={handleNext}
              disabled={isSubmitting}
              className="flex-[2] bg-emerald-700 text-white py-4 rounded-2xl font-bold text-lg hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-700/20 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? 'Enviando...' : step === questions.length - 1 ? 'Finalizar' : 'Siguiente'} <ArrowRight size={20} />
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

const WelcomeModal = ({ isOpen, onClose, onStartSurvey }: { isOpen: boolean; onClose: () => void; onStartSurvey: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-white rounded-3xl p-6 sm:p-10 max-w-lg w-full shadow-2xl relative max-h-[90vh] overflow-y-auto"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-emerald-600"></div>
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-stone-400 hover:text-stone-600 transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-8">
          <div className="w-24 h-24 mx-auto mb-4">
            <img 
              src="https://i.postimg.cc/N0bq2RwB/IMG_0555.png" 
              alt="Logo Nutrifit" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <h3 className="text-3xl font-serif font-bold text-stone-900">¡Bienvenid@ a Guille.nutrifit! ☺️</h3>
        </div>

        <div className="space-y-5 text-stone-600 leading-relaxed text-center">
          <p className="font-semibold text-lg text-stone-800">
            Acabas de comenzar el camino hacia tu mejor versión. El momento es AHORA. 🏋️‍♀️
          </p>
          <p>
            Me presento, soy <strong>Guillermo García</strong>, Técnico Superior en Dietética y Nutrición y te voy a ayudar a conseguir todos tus objetivos.
          </p>
          <p>
            A continuación voy a pasarte un cuestionario fácil y rápido de rellenar donde recopilaré los primeros datos sobre ti. 
            Debes de rellenarlo con total sinceridad 💪🏼
          </p>
          <p>
            Posteriormente analizaré estos datos y comenzaremos con el plan personalizado.
          </p>
          <p className="text-2xl font-serif font-bold text-emerald-700 pt-2">
            ¡¡Vamos con todo!! 🙌🏼
          </p>
        </div>

        <div className="flex flex-col gap-4 mt-10 pb-2">
          <button 
            onClick={() => {
              onStartSurvey();
              onClose();
            }}
            className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-black text-xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/30 flex items-center justify-center gap-3 animate-pulse-subtle"
          >
            Iniciar Cuestionario <ArrowRight size={24} />
          </button>
          <button 
            onClick={onClose}
            className="w-full py-2 text-stone-400 text-sm font-medium hover:text-stone-600 transition-colors"
          >
            Cerrar
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const Pricing = ({ onSelectPlan }: { onSelectPlan: () => void }) => {
  const plans = [
    {
      name: "Plan Básico",
      price: "40",
      period: "mes",
      features: [
        "Plan de alimentación personalizado",
        "Adaptado a tus objetivos, horarios y preferencias",
        "Ajustes según tu progreso",
        "Seguimiento periódico",
        "Resolución de dudas"
      ],
      recommended: false,
      buttonText: "Elegir Plan Básico"
    },
    {
      name: "Plan Premium",
      price: "50",
      period: "mes",
      features: [
        "Incluye todo lo del Plan Básico, además de:",
        "Plan de entrenamiento personalizado",
        "Adaptado a tu nivel y material disponible (gimnasio o casa)",
        "Progresión estructurada para mejorar fuerza y físico",
        "Ajustes de entrenamiento y nutrición según evolución",
        "Seguimiento más completo"
      ],
      recommended: true,
      buttonText: "Elegir Plan Premium"
    }
  ];

  return (
    <section id="planes" className="py-24 bg-white relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d1fae5_1px,transparent_1px),linear-gradient(to_bottom,#d1fae5_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4 text-stone-900">Planes Mensuales</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades y empieza hoy mismo tu transformación.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className={cn(
                "relative p-8 rounded-3xl border transition-all",
                plan.recommended 
                  ? "border-emerald-200 bg-emerald-100/40 shadow-xl shadow-emerald-900/10" 
                  : "border-emerald-100 bg-emerald-50/50 shadow-sm"
              )}
            >
              {plan.recommended && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-700 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Más Popular
                </span>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-stone-900">{plan.price}€</span>
                  <span className="text-stone-500 font-medium">/{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-600 text-sm">
                    <CheckCircle2 className="text-emerald-600 shrink-0" size={18} />
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                onClick={onSelectPlan}
                className={cn(
                  "block w-full text-center py-4 rounded-xl font-bold transition-all",
                  plan.recommended
                    ? "bg-emerald-700 text-white hover:bg-emerald-800 shadow-lg shadow-emerald-700/20"
                    : "bg-stone-900 text-white hover:bg-stone-800"
                )}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Transformations = () => {
  const transformations = [
    {
      name: "Mi Cambio Físico",
      change: "Recomposición Corporal",
      duration: "6 meses",
      description: "Evolución personal enfocada en la ganancia de masa muscular magra y mejora de la densidad.",
      detailedDescription: "Mi camino no fue fácil. Al principio, no me encontraba bien conmigo mismo y decidí empezar este camino para cambiar mi realidad por completo. Me sentía estancado, sin energía y descontento con mi imagen en el espejo. A través de una recomposición corporal meticulosa y años de estudio, logré no solo ganar masa muscular magra, sino mejorar drásticamente mi densidad muscular y simetría. Este proceso fue el resultado de aplicar protocolos de hipertrofia avanzados y una nutrición de precisión adaptada a mis necesidades biológicas cada semana. Hoy, mi físico es el reflejo de mi disciplina y conocimiento.",
      image: "https://i.postimg.cc/CLjRGQDK/1FE86851-B26F-4E9D-9781-1C5ADE41C3C2.jpg",
      tag: "Coach",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      name: "Resultados Reales",
      change: "Pérdida de Grasa y Tonificación",
      duration: "4 meses",
      description: "Transformación integral centrada en la reducción del porcentaje de grasa corporal.",
      detailedDescription: "Mi clienta no se encontraba bien consigo misma y decidió empezar este camino buscando una versión más saludable, fuerte y segura. Se sentía frustrada por intentos previos sin éxito y por la falta de una guía clara. Implementamos una transformación integral centrada en la reducción estratégica del porcentaje de grasa corporal sin pasar hambre ni sacrificar su vida social. Mediante un déficit calórico controlado y un entrenamiento de fuerza adaptado a su nivel, logramos una tonificación excepcional, mejorando su composición corporal global y, lo más importante, su confianza y bienestar diario. El cambio mental fue incluso mayor que el físico.",
      image: "https://i.postimg.cc/YqbHBNBC/FA3E74EB-051F-4040-964D-79C33168DFCF.jpg",
      tag: "Clienta",
      gradient: "from-emerald-400 to-emerald-600"
    },
    {
      name: "Transformación Cliente",
      change: "Ganancia de Masa Muscular",
      duration: "3 meses",
      description: "Incremento significativo de masa muscular magra y fuerza funcional.",
      detailedDescription: "Este cliente buscaba superar su estancamiento físico y decidió empezar este camino para construir una base sólida de músculo y fuerza. Implementamos un protocolo de volumen controlado, priorizando la ganancia de masa muscular magra sin acumulación excesiva de grasa. A través de un entrenamiento de fuerza progresivo y una nutrición hipercalórica optimizada, logramos un cambio notable en su volumen y densidad muscular en tiempo récord. Su compromiso con el entrenamiento pesado y la recuperación fue fundamental para transformar su físico por completo.",
      image: "https://i.postimg.cc/ydBQN5FC/357C8231-8C56-45C7-AB2E-BB7AC3EAAA5D.jpg",
      tag: "Cliente",
      gradient: "from-teal-500 to-emerald-700"
    },
    {
      name: "Cambio Radical",
      change: "Pérdida de Peso y Salud",
      duration: "6 meses",
      description: "Transformación asombrosa enfocada en la salud metabólica y la reducción de peso.",
      detailedDescription: "Mi clienta no se encontraba bien consigo misma y decidió empezar este camino porque sentía que su salud estaba en riesgo. Con un enfoque 100% personalizado, logramos una pérdida de peso significativa de manera saludable y sostenible. No solo cambió su físico, sino que recuperó su energía, mejoró sus analíticas y ahora disfruta de un estilo de vida activo que antes creía imposible. Es el ejemplo perfecto de que nunca es tarde para empezar.",
      image: "https://i.postimg.cc/KjmtBhzm/0C8FAB2D-C7F3-4353-A104-D677D2FC5779.jpg",
      tag: "Clienta",
      gradient: "from-emerald-600 to-teal-800"
    },
    {
      name: "Transformación Integral",
      change: "Pérdida de Peso",
      duration: "4 meses",
      description: "Reducción drástica de grasa corporal y mejora de la salud general.",
      detailedDescription: "Este cliente no se encontraba bien consigo mismo y decidió empezar este camino porque sentía que su peso estaba limitando su vida diaria. Se sentía cansado y sin motivación. Implementamos un plan integral de pérdida de peso, combinando un déficit calórico sostenible con entrenamiento de fuerza para preservar la masa muscular. El resultado fue una transformación física asombrosa, perdiendo una cantidad significativa de grasa y ganando una vitalidad que ha cambiado su forma de ver el mundo. Su disciplina ha sido el motor de este gran cambio.",
      image: "https://i.postimg.cc/d1s09s2h/1D75CA90-5B8C-4FD7-AC9F-4FFA63503A98.jpg",
      tag: "Cliente",
      gradient: "from-emerald-700 to-teal-900"
    }
  ];

  const [selectedCase, setSelectedCase] = React.useState<typeof transformations[0] | null>(null);

  return (
    <section id="resultados" className="py-24 bg-white relative overflow-hidden">
      {/* Modal for detailed view */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCase(null)}
              className="absolute inset-0 bg-stone-900/90 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-[2rem] shadow-2xl flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedCase(null)}
                className="absolute top-6 right-6 z-10 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white md:text-stone-900 md:bg-stone-100 md:hover:bg-stone-200 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image Side */}
              <div className="w-full md:w-1/2 h-[40vh] md:h-auto bg-stone-100 relative">
                <img 
                  src={selectedCase.image} 
                  alt={selectedCase.name}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute top-6 left-6 bg-gradient-to-br ${selectedCase.gradient} text-white px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl`}>
                  {selectedCase.change}
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto bg-white custom-scrollbar">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-wider mb-6">
                  <Activity className="w-3 h-3" />
                  Caso de Éxito
                </div>
                
                <h3 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6">
                  {selectedCase.name}
                </h3>

                <div className="space-y-6">
                  <p className="text-stone-600 text-lg leading-relaxed italic border-l-4 border-emerald-500 pl-6">
                    {selectedCase.detailedDescription}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-x-8 gap-y-6 py-8 border-y border-stone-100">
                    <div className="flex flex-col min-w-[120px]">
                      <span className="text-[10px] font-black text-stone-400 uppercase tracking-[0.2em] mb-2">Tipo de Cambio</span>
                      <span className="text-base font-bold text-stone-900 leading-tight">{selectedCase.change}</span>
                    </div>
                    <div className="hidden sm:block w-px h-10 bg-stone-200" />
                    <div className="flex flex-col min-w-[100px]">
                      <span className="text-[10px] font-black text-stone-400 uppercase tracking-[0.2em] mb-2">Tiempo Total</span>
                      <span className="text-base font-bold text-stone-900 leading-tight">{selectedCase.duration}</span>
                    </div>
                    <div className="hidden sm:block w-px h-10 bg-stone-200" />
                    <div className="flex flex-col min-w-[100px]">
                      <span className="text-[10px] font-black text-stone-400 uppercase tracking-[0.2em] mb-2">Rol</span>
                      <span className="text-base font-bold text-stone-900 leading-tight">{selectedCase.tag}</span>
                    </div>
                  </div>

                  <div className="pt-8">
                    <a 
                      href="#planes"
                      onClick={() => setSelectedCase(null)}
                      className="inline-flex items-center justify-center w-full px-8 py-4 bg-emerald-600 text-white rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200"
                    >
                      Quiero un cambio como este
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* High-end Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_70%)]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />
      
      {/* Floating Blobs for Color */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-emerald-200/30 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-teal-200/30 rounded-full blur-[100px] animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-sm"
          >
            <Activity className="w-3.5 h-3.5" />
            Resultados Comprobados
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-serif mb-6 text-stone-900 tracking-tight">
            Casos de <span className="text-emerald-600 italic">Éxito</span>
          </h2>
          
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-8 rounded-full" />
          
          <p className="text-stone-500 max-w-2xl mx-auto text-lg leading-relaxed">
            El cambio real es posible con constancia y el plan adecuado. 
            Aquí tienes ejemplos reales de transformaciones logradas bajo mi asesoría.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {transformations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
              className="group relative flex flex-col h-full"
            >
              {/* Card Container */}
              <div className="relative bg-white rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-stone-100 group-hover:shadow-[0_20px_60px_-20px_rgba(16,185,129,0.2)] transition-all duration-500 flex flex-col h-full">
                
                {/* Image Section */}
                <div className="aspect-[3/4] overflow-hidden relative bg-stone-50">
                  <img 
                    src={item.image} 
                    alt={`Transformación de ${item.name}`}
                    className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Change Badge - Now at the top and always visible */}
                  <div className={`absolute top-6 right-6 bg-gradient-to-br ${item.gradient} text-white px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl border border-white/10 z-10`}>
                    {item.change}
                  </div>
                  
                  {/* Floating Tag (Coach/Clienta/Cliente) - Moved to bottom left */}
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md text-stone-900 px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl border border-white/20">
                    {item.tag}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-10 flex flex-col flex-grow relative">
                  {/* Duration Badge - Integrated in content */}
                  <div className="flex items-center gap-2 text-emerald-600 font-black text-[10px] uppercase tracking-[0.2em] mb-3">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Logrado en {item.duration}</span>
                  </div>

                  {/* Decorative Icon */}
                  <div className="absolute -top-6 right-10 w-12 h-12 bg-white rounded-2xl shadow-xl border border-stone-50 flex items-center justify-center transform group-hover:-translate-y-2 transition-transform duration-500">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  </div>

                  <h3 className="text-2xl font-bold text-stone-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                    {item.name}
                  </h3>
                  
                  <p className="text-stone-500 text-sm leading-relaxed mb-8 flex-grow">
                    {item.description}
                  </p>

                  <div className="pt-8 border-t border-stone-100 flex items-center justify-end">
                    <motion.div 
                      whileHover={{ x: 5 }}
                      onClick={() => setSelectedCase(item)}
                      className="flex items-center gap-2 text-emerald-600 font-bold text-sm cursor-pointer"
                    >
                      Ver detalles
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Background Decorative Element */}
              <div className={`absolute -inset-2 bg-gradient-to-br ${item.gradient} rounded-[3rem] -z-10 opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA for section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center relative"
        >
          {/* Radiating rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.6,
                  ease: "easeOut"
                }}
                className="absolute inset-0 border-2 border-emerald-400 rounded-full"
              />
            ))}
          </div>

          <motion.a 
            href="#planes"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              y: [0, -5, 0],
            }}
            transition={{ 
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-700 text-white rounded-full font-black text-lg uppercase tracking-widest overflow-hidden group shadow-2xl z-10"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer transition-transform duration-1000" />
            
            <span className="relative z-10 flex items-center">
              ¡Empieza tu evolución hoy mismo!
              <ChevronRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="sobre-mi" className="py-24 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d1fae5_1px,transparent_1px),linear-gradient(to_bottom,#d1fae5_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] opacity-20"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden border-8 border-emerald-50 shadow-2xl bg-white flex items-center justify-center p-4">
              <img 
                src="https://i.postimg.cc/N0bq2RwB/IMG_0555.png" 
                alt="Logo Nutrifit" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-6 rounded-3xl shadow-xl border border-stone-100 max-w-[200px]">
              <p className="text-3xl font-serif font-bold text-emerald-700 mb-1">2+</p>
              <p className="text-xs text-stone-500 font-medium uppercase tracking-wider">Años de Experiencia</p>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-serif mb-6 text-stone-900">Hola, soy Guillermo García.</h2>
            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
              Mi misión es simplificar la nutrición. No creo en las dietas milagro ni en la restricción extrema. Creo en la educación nutricional y en crear hábitos que puedas mantener de por vida.
            </p>
            <div className="space-y-4 mb-10">
              {[
                "Planes 100% personalizados",
                "Acompañamiento constante",
                "Especialista en Nutrición Deportiva",
                "Apasionado del entrenamiento de fuerza",
                "Enfoque flexible y realista"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-stone-700">
                  <CheckCircle2 className="text-emerald-600" size={20} />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-8 bg-emerald-900 text-white rounded-[2.5rem] relative overflow-hidden group mb-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-800 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50 blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10">
                <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">Formación Académica</p>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="mt-1 p-2 bg-emerald-800 rounded-xl">
                      <ClipboardCheck size={20} className="text-emerald-300" />
                    </div>
                    <div>
                      <p className="font-bold text-lg leading-tight">Técnico Superior en Dietética y Nutrición</p>
                      <p className="text-emerald-300/70 text-sm">Especializado en patologías y salud general</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="mt-1 p-2 bg-emerald-800 rounded-xl">
                      <TrendingUp size={20} className="text-emerald-300" />
                    </div>
                    <div>
                      <p className="font-bold text-lg leading-tight">Nutrición Deportiva Avanzada</p>
                      <p className="text-emerald-300/70 text-sm">Optimización del rendimiento y composición corporal</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="mt-1 p-2 bg-emerald-800 rounded-xl">
                      <Activity size={20} className="text-emerald-300" />
                    </div>
                    <div>
                      <p className="font-bold text-lg leading-tight">Técnico de Deporte</p>
                      <p className="text-emerald-300/70 text-sm">Grado Medio de Deporte</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="https://www.instagram.com/guille.nutrifit?igsh=bDBuN3Rnc3J2Y2tl" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-tr from-amber-400 via-fuchsia-500 to-indigo-600 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-all active:scale-95 group"
              >
                <Instagram size={24} className="group-hover:rotate-12 transition-transform" />
                <span>Sígueme en Instagram</span>
              </a>
              <a 
                href="https://www.tiktok.com/@guille.nutrifit" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-black text-white px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-all active:scale-95 group"
              >
                <TikTokIcon size={24} className="group-hover:-rotate-12 transition-transform" />
                <span>Sígueme en TikTok</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('guille.nutrifit@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contacto" className="py-24 bg-emerald-900 text-white overflow-hidden relative">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-800 rounded-full blur-3xl -mr-48 -mt-48 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-800 rounded-full blur-3xl -ml-48 -mb-48 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">¿Listo para empezar tu cambio?</h2>
          <p className="text-emerald-100 text-lg mb-12">
            Si tienes cualquier duda o quieres empezar ya, puedes contactarme directamente a través de mi correo o Instagram.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col gap-4">
              <a 
                href="mailto:guille.nutrifit@gmail.com?subject=Consulta%20sobre%20Asesor%C3%ADa%20Nutricional&body=Hola%20Guille%2C%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20tus%20planes%20de%20nutrici%C3%B3n%20y%20entrenamiento."
                className="group bg-emerald-800/50 backdrop-blur-sm p-8 rounded-3xl border border-emerald-700 hover:bg-emerald-800 transition-all flex flex-col items-center gap-4 h-full"
              >
                <div className="w-16 h-16 rounded-2xl bg-emerald-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={32} />
                </div>
                <div className="text-center">
                  <p className="text-emerald-300 text-sm font-bold uppercase tracking-widest mb-1">Email</p>
                  <p className="text-xl font-bold break-all">guille.nutrifit@gmail.com</p>
                </div>
              </a>
              <button 
                onClick={handleCopy}
                className="text-sm text-emerald-300 hover:text-white transition-colors font-medium flex items-center justify-center gap-2"
              >
                {copied ? '¡Copiado!' : '¿No funciona el enlace? Copiar correo'}
              </button>
            </div>

            <a 
              href="https://www.instagram.com/guille.nutrifit?igsh=bDBuN3Rnc3J2Y2tl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-emerald-800/50 backdrop-blur-sm p-8 rounded-3xl border border-emerald-700 hover:bg-emerald-800 transition-all flex flex-col items-center gap-4"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Instagram size={32} />
              </div>
              <div>
                <p className="text-emerald-300 text-sm font-bold uppercase tracking-widest mb-1">Instagram</p>
                <p className="text-xl font-bold">@guille.nutrifit</p>
              </div>
            </a>

            <a 
              href="https://www.tiktok.com/@guille.nutrifit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-emerald-800/50 backdrop-blur-sm p-8 rounded-3xl border border-emerald-700 hover:bg-emerald-800 transition-all flex flex-col items-center gap-4"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                <TikTokIcon size={32} />
              </div>
              <div>
                <p className="text-emerald-300 text-sm font-bold uppercase tracking-widest mb-1">TikTok</p>
                <p className="text-xl font-bold">@guille.nutrifit</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Methodology = () => {
  const steps = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Cuestionario Inicial",
      description: "Analizamos tus hábitos, gustos, horarios y objetivos para crear una base sólida.",
      color: "bg-emerald-100 text-emerald-700"
    },
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "Plan a Medida",
      description: "Diseñamos tu estrategia nutricional y de entrenamiento 100% personalizada.",
      color: "bg-stone-100 text-stone-700"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Seguimiento Semanal",
      description: "Revisamos tu progreso y ajustamos el plan según tus sensaciones y resultados.",
      color: "bg-emerald-100 text-emerald-700"
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Resultados Reales",
      description: "Alcanzas tu mejor versión de forma sostenible, sin efecto rebote ni restricciones.",
      color: "bg-stone-100 text-stone-700"
    }
  ];

  return (
    <section id="metodologia" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Tu camino al <span className="italic text-emerald-700">éxito</span></h2>
          <p className="text-stone-600 max-w-2xl mx-auto">Un proceso estructurado y profesional diseñado para que no falles esta vez.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-stone-100 -translate-y-1/2 z-0" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative z-10 bg-white p-8 rounded-3xl border border-stone-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {step.icon}
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center text-stone-300 font-serif text-2xl font-bold border border-stone-100">
                0{index + 1}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "¿Necesito tomar suplementos para ver resultados?",
      answer: "No son obligatorios. La suplementación es solo una herramienta opcional que utilizaremos si tu dieta no cubre tus necesidades específicas o para optimizar el rendimiento en casos concretos."
    },
    {
      question: "¿Qué pasa si una semana no puedo cumplir el plan al 100%?",
      answer: "No te preocupes. La clave del éxito es la constancia, no la perfección. Si una semana se complica, simplemente retomamos donde lo dejamos y seguimos avanzando. Te enseñaré a gestionar estos momentos sin estrés."
    },
    {
      question: "¿Cómo es el contacto y el soporte?",
      answer: "Tendrás soporte continuo vía WhatsApp para resolver dudas rápidas. Además, realizamos revisiones semanales profundas para ajustar el plan según tu progreso."
    },
    {
      question: "¿Tengo que comer siempre lo mismo?",
      answer: "Para nada. Te proporcionamos una guía con opciones variadas y equivalencias para que puedas disfrutar de la comida mientras alcanzas tus objetivos."
    },
    {
      question: "¿Es necesario ir al gimnasio?",
      answer: "No es obligatorio, pero sí es muy recomendable porque el entrenamiento de fuerza ayuda enormemente a conseguir tus objetivos de forma más eficiente. Si prefieres no ir, adaptamos el plan a tus circunstancias sin problema."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mb-4">
            <HelpCircle size={24} />
          </div>
          <h2 className="text-4xl font-serif mb-4">Preguntas <span className="italic text-emerald-700">Frecuentes</span></h2>
          <p className="text-stone-600">Todo lo que necesitas saber antes de empezar tu transformación.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-stone-50 transition-colors"
              >
                <span className="font-bold text-stone-800">{faq.question}</span>
                <ChevronDown 
                  className={cn(
                    "w-5 h-5 text-stone-400 transition-transform duration-300",
                    openIndex === index && "rotate-180 text-emerald-600"
                  )} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-stone-600 text-sm leading-relaxed border-t border-stone-50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <img 
          src="https://i.postimg.cc/N0bq2RwB/IMG_0555.png" 
          alt="Logo Nutrifit" 
          className="h-16 w-auto object-contain mb-4"
          referrerPolicy="no-referrer"
        />
        <span className="text-xl font-serif font-bold tracking-tight text-emerald-800 mb-6 block">
          guille.<span className="text-stone-900">nutrifit</span>
        </span>
        <p className="text-stone-500 text-sm mb-8">
          © {new Date().getFullYear()} Guille Nutrifit. Todos los derechos reservados.
        </p>
        <div className="flex justify-center gap-6">
          <a href="mailto:guille.nutrifit@gmail.com" className="text-stone-400 hover:text-emerald-700 transition-colors" title="Enviar correo"><Mail size={20} /></a>
          <a href="https://www.instagram.com/guille.nutrifit?igsh=bDBuN3Rnc3J2Y2tl" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-emerald-700 transition-colors" title="Instagram"><Instagram size={20} /></a>
          <a href="https://www.tiktok.com/@guille.nutrifit" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-emerald-700 transition-colors" title="TikTok"><TikTokIcon size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isSurveyOpen, setIsSurveyOpen] = React.useState(false);

  return (
    <div className="min-h-screen selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar onStart={() => setIsModalOpen(true)} />
      <main>
        <Hero />
        <About />
        <Methodology />
        <Objectives />
        <Pricing onSelectPlan={() => setIsModalOpen(true)} />
        <Transformations />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WelcomeModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onStartSurvey={() => setIsSurveyOpen(true)}
      />
      <Survey 
        isOpen={isSurveyOpen} 
        onClose={() => setIsSurveyOpen(false)} 
      />
    </div>
  );
}
