import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, Crown, Award, Users, Coffee, Briefcase, Rocket } from 'lucide-react';

interface Program {
  id: string;
  title: string;
  description: string;
  image_urls: string[];
  icon: React.ElementType;
  gradient: string;
}

const programCards: Program[] = [
  {
    id: 'flagship',
    title: 'IMA Flagship Event',
    description: 'Our premier annual conclave featuring global thought leaders.',
    image_urls: ['/image/tata.jpg','/image/aman.JPG','/image/amitabh.jpeg', '/image/suhani4.JPG', '/image/niranjan2.JPG','/image/birla.png','/image/nitin.png','/image/anupam.jpeg','/image/sadhguru.png','/image/rajat.png','/image/c1.png','/image/c2.png','/image/c3.png','/image/c4.png'],
    icon: Crown,
    gradient: 'from-purple-600/30 to-blue-600/30',
  },
  {
    id: 'women',
    title: 'IMA Women Conclave',
    description: 'Empowering and celebrating women in leadership.',
    image_urls: ['/image/wlc.png','/image/wlc-1.png','/image/wlc4.png','/image/wlc1.JPG','/image/wlc2.JPG','/image/wlc3.JPG','/image/wlc5.png','/image/wlc6.JPG','/image/wlc7.JPG','/image/wlc8.JPG','/image/wlc9.JPG','/image/wlc10.JPG','/image/wlc11.JPG'],
    icon: Briefcase,
    gradient: 'from-pink-500/30 to-purple-500/30',
  },
  {
    id: 'signature',
    title: 'IMA Signature Program',
    description: 'Exclusive Program for CEOs and Vertical Heads.',
    image_urls: [ '/image/apjsir.png','/image/ramdev.png','/image/rajiv.jpeg','/image/sign.jpg','/image/manoj.png','/image/prince.JPG'],
    icon: Award,
    gradient: 'from-green-500/30 to-cyan-500/30',
  },
  {
    id: 'training',
    title: 'Training Program',
    description: 'Skill development workshops and management programs.',
    image_urls: ['/image/t.jpg', '/image/t1.jpeg', '/image/t2.jpg','/image/t3.JPG','/image/t4.jpeg', '/image/t5.jpeg', '/image/t6.jpeg','/image/t7.jpeg','/image/t8.jpeg', '/image/t9.jpeg','/image/t10.jpg','/image/t11.jpg','/image/t12.jpg'],
    icon: Users,
    gradient: 'from-orange-500/30 to-yellow-500/30',
  },
  {
    id: 'evening',
    title: 'Evening Program / Open Forum',
    description: 'IMA Learning & networking sessions.',
    image_urls: ['/image/ev.jpeg','/image/ev1.jpeg','/image/ev2.jpeg','/image/ev3.JPG','/image/ev4.JPG','/image/ev5.JPG','/image/ev6.JPG'],
    icon: Coffee,
    gradient: 'from-red-500/30 to-pink-500/30',
  },
  {
    id: 'startup',
    title: 'Startup & Innovation',
    description: 'Fostering the next generation of entrepreneurs and ideas.',
    image_urls: ['/image/robot.JPG','/image/ai.JPG','/image/ai1.JPG','/image/ai2.jpg','/image/ai3.JPG','/image/ai4.JPG','/image/ai5.JPG'],
    icon: Rocket,
    gradient: 'from-teal-500/30 to-lime-500/30',
  },
];

export const Events = () => {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="events" className="py-16 md:py-24 px-4 md:px-8 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/image/front.jpg"
          alt="IMA Event Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-white"
        >
          IMA <span className="text-[#D4AF37]">Programs</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="text-center text-gray-300 mb-16 max-w-2xl mx-auto"
        >
          A look into our various programs and initiatives
        </motion.p>
        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {programCards.map((program, index) => (
            <motion.div
              key={program.id}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.95 },
                show: { opacity: 1, y: 0, scale: 1 }
              }}
              whileHover={{ 
                translateY: -5, 
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' 
              }}
              onClick={() => setSelectedProgram(program)}
              className="group relative rounded-2xl p-6 text-left cursor-pointer transition-all duration-300 h-full flex flex-col
                         bg-white/5 backdrop-blur-md border border-[#D4AF37] shadow-lg"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${program.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-400`}></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4 border border-white/10">
                  <program.icon className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{program.title}</h3>
                <p className="text-gray-300 text-sm mb-6 flex-grow">{program.description}</p>
                <div className="mt-auto text-right">
                  <span className="inline-block px-3 py-1.5 text-xs font-semibold text-white bg-white/10 rounded-full group-hover:bg-white group-hover:text-black transition-colors duration-300">
                    View Gallery →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProgram && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProgram(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              style={{ willChange: 'transform, opacity' }}
              className="bg-white/80 backdrop-blur-lg border border-white/20 rounded-3xl w-full max-w-6xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-black/10 flex justify-between items-center bg-white/70 backdrop-blur-md sticky top-0 z-20">
                <h3 className="text-2xl md:text-3xl font-bold text-[#111111]">{selectedProgram.title}</h3>
                <button
                  onClick={() => { setSelectedProgram(null); setSelectedImage(null); }}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-gray-900"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-6 overflow-y-auto flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                  {selectedProgram.image_urls.map((url, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="aspect-video overflow-hidden rounded-xl cursor-pointer group relative border border-black/10 shadow-lg bg-gray-100"
                      onClick={() => setSelectedImage(url)}
                    >
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 z-10" />
                      <img src={url} alt={`${selectedProgram.title} image ${index + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full-screen Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-4 right-4 md:top-8 md:right-8 z-[90] p-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full backdrop-blur-md transition-all shadow-xl"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Full screen"
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
