import { motion } from 'framer-motion';
import { Trophy, Star, Calendar, GraduationCap, Rocket, TrendingUp, Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';
import { useRef, useState } from 'react';

const journeyPoints = [
  {
    title: '63 Years of Excellence',
    content: 'Indore Management Association (IMA) is Central India’s leading management forum, with a proud legacy of over 63 years. It is a non-profit association, affiliated with the All India Management Association (AIMA), IMA brings together enterprises, business leaders, professionals, academicians and students working collectively toward shared growth and excellence.\n\nIts a strong platform for leadership, learning & networking, uniting 500+ corporates and 3000+ students.',
    icon: Trophy,
  },
  {
    title: 'Unmatched Recognition',
    content: 'Proud recipient of the Best Local Management Association award 18 times, reflecting our consistency and excellence.',
    icon: Star,
  },
  {
    title: 'Active Engagement',
    content: 'Conducting 150+ programs annually, including the International Management Conclave, CEOs Meet, Training Programs, Specialized Forums and Student focused programs.',
    icon: Calendar,
  },
  {
    title: 'Empowering the Future',
    content: 'Developing future leaders through 21 student chapters with regular skill-building and industry-focused programs.',
    icon: GraduationCap,
  },
  {
    title: 'Driving Innovation',
    content: 'Leading initiatives like AI & Innovation Summit, HR Conclave, Fintech Conclave, Women Empowerment programs and Startup Event.',
    icon: Rocket,
  },
  {
    title: 'Massive Impact',
    content: 'With 33 conclaves, 500+ speakers and 1 lakh+ professionals impacted, IMA continues to be a powerful platform for growth.',
    icon: TrendingUp,
  },
];

export const Timeline = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!videoRef.current.muted);
    }
  };

  const toggleFullScreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-white relative overflow-hidden">
      {/* Unique Theme: Animated Diagonal Stripes & Soft Blobs */}
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]" 
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, #111111 25%, transparent 25%, transparent 75%, #111111 75%, #111111)', backgroundSize: '60px 60px' }} 
        animate={{ backgroundPosition: ['0px 0px', '60px 60px'] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
      />
      
      <motion.div
        className="absolute top-1/4 -left-20 w-[30rem] h-[30rem] bg-gradient-to-r from-[#D4AF37]/10 to-[#E6C97A]/5 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        style={{ willChange: 'transform' }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] bg-gradient-to-l from-[#D4AF37]/10 to-[#E6C97A]/5 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        style={{ willChange: 'transform' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] font-semibold tracking-wider uppercase text-sm mb-2 block">Our Legacy</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111]">
            A Journey of <span className="text-[#D4AF37]">Excellence</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#E6C97A] mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 relative">
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="w-full lg:w-1/2 space-y-6"
          >
            {journeyPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
                }}
                whileHover={{ scale: 1.03, x: 10 }}
                className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.15)] border border-gray-100 hover:border-[#D4AF37]/30 transition-all duration-500 flex gap-5 items-start group relative overflow-hidden"
              >
                <div className="absolute right-0 top-0 w-32 h-32 bg-gradient-to-bl from-[#D4AF37]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-14 h-14 rounded-2xl bg-[#F8F8F8] flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br from-[#D4AF37] to-[#E6C97A] group-hover:text-white transition-all duration-500 group-hover:shadow-[0_10px_20px_rgba(212,175,55,0.3)] shadow-inner text-[#D4AF37] relative z-10 group-hover:scale-110 group-hover:-rotate-12">
                  <point.icon className="w-7 h-7" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-[#111111] mb-2 group-hover:text-[#D4AF37] transition-colors">{point.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base whitespace-pre-line">{point.content}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full lg:w-1/2 flex flex-col gap-8"
          >
            <motion.div
              className="relative group aspect-video w-full rounded-[2.5rem] p-3 sm:p-4 bg-[#FAFAFA] shadow-[15px_15px_30px_rgba(212,175,55,0.1),-15px_-15px_30px_rgba(255,255,255,1),inset_6px_6px_15px_rgba(212,175,55,0.05),inset_-6px_-6px_15px_rgba(255,255,255,0.8)]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative w-full h-full rounded-3xl overflow-hidden bg-black shadow-[inset_0px_0px_20px_rgba(0,0,0,0.5)]">
                <video
                  ref={videoRef}
                  src="/image/ima.mp4"
                  title="IMA Song"
                  poster="/image/ima1.png"
                  className="w-full h-full absolute top-0 left-0 object-cover z-0"
                  loop
                  playsInline
                  preload="metadata"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  // Sync state with video's muted property
                  onVolumeChange={() => setIsMuted(videoRef.current?.muted ?? true)}
                />
                
                {/* Inner shadow overlay for 3D depth over the video */}
                <div className="absolute inset-0 shadow-[inset_0px_0px_20px_rgba(0,0,0,0.6)] pointer-events-none z-10" />

                <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/50 to-transparent pointer-events-none z-10">
                  <h4 className="text-white font-bold text-lg">IMA Song</h4>
                </div>
                <div
                  className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center cursor-pointer z-10"
                  onClick={togglePlayPause}
                >
                  <div
                    className={`w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 ${
                      isPlaying ? 'opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100' : 'opacity-100 scale-100'
                    }`}
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  >
                    {isPlaying ? (
                      <Pause className="w-8 h-8" fill="white" />
                    ) : (
                      <Play className="w-9 h-9 ml-1" fill="white" />
                    )}
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <button
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 cursor-pointer"
                    onClick={toggleMute}
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5" />
                    ) : (
                      <Volume2 className="w-5 h-5" />
                    )}
                  </button>
                  <button
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 cursor-pointer"
                    onClick={toggleFullScreen}
                    aria-label="Fullscreen"
                  >
                    <Maximize className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>

            <div className="relative group h-[300px] sm:h-[400px] w-full">
              <div className="absolute top-8 right-4 w-[80%] h-[70%] bg-gradient-to-tr from-[#D4AF37] to-[#E6C97A] rounded-[2rem] transform rotate-3 opacity-20 blur-xl transition-transform duration-700 group-hover:rotate-6" />
              <div className="absolute top-8 right-4 w-[80%] h-[70%] bg-gradient-to-tr from-[#D4AF37] to-[#E6C97A] rounded-3xl transform -rotate-3 scale-105 opacity-30 transition-transform duration-500 group-hover:rotate-0" />
              
              {/* Image 1 - Top Right */}
              <div className="absolute top-0 right-0 w-[70%] h-[80%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:rotate-3">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                  src="/image/oldima.PNG"
                  alt="IMA Journey 1963 to 2026"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Image 2 - Bottom Left */}
              <div className="absolute bottom-0 left-0 w-[60%] h-[70%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white z-20 transition-transform duration-500 group-hover:-translate-x-2 group-hover:translate-y-2 group-hover:-rotate-3">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                  src="/image/backdrop.JPG"
                  alt="IMA Leadership and Growth"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Floating Stat Card 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 50, rotate: -10 }}
                whileInView={{ opacity: 1, y: 0, rotate: -5 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.8, type: "spring", bounce: 0.5 }}
                className="absolute -bottom-8 -right-4 sm:bottom-0 sm:-right-8 z-30"
              >
                <motion.div 
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  className="bg-white p-3 sm:p-5 rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 backdrop-blur-sm bg-white/90"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                      <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37]" />
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-[#111111]">18<span className="text-[#D4AF37]">x</span></div>
                      <div className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase tracking-wider">Best LMA Award</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Stat Card 2 */}
              <motion.div 
                initial={{ opacity: 0, y: -50, rotate: 10 }}
                whileInView={{ opacity: 1, y: 0, rotate: 5 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 1.0, type: "spring", bounce: 0.5 }}
                className="absolute -top-8 -left-4 sm:top-0 sm:-left-8 z-30"
              >
                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ rotate: -5, scale: 1.05 }}
                  className="bg-white p-3 sm:p-5 rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 backdrop-blur-sm bg-white/90"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-[#111111]">2L<span className="text-[#D4AF37]">+</span></div>
                      <div className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Professionals<br/>Impacted</div>
                    </div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37]" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
