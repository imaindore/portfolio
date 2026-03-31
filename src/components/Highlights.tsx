import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import { useState } from 'react';

interface Highlight {
  id: string;
  title: string;
  video_url: string;
  thumbnail_url?: string;
}

const getYouTubeThumbnail = (url: string) => {
  if (!url) return '';
  let videoId = '';
  if (url.includes('youtube.com/watch?v=')) {
    videoId = url.split('watch?v=')[1]?.split('&')[0];
  } else if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1]?.split('?')[0];
  }
  return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '';
};

const isYouTube = (url: string) => {
  if (!url) return false;
  return url.includes('youtube.com') || url.includes('youtu.be');
};

const staticHighlights: Highlight[] = [
 
  {
    id: 'yt-1',
    title: 'IMA International Management Conclave (Feb. 2026)',
    video_url: 'https://youtu.be/sDFDQynAqgc?si=BnQSySssVQdWnB0r',
  },  
  {
    id: 'yt-6',
    title: 'IMA International Management Conclave (Jan. 2014) - Mr. Amitabh Bachchan',
    video_url: 'https://youtu.be/hQ3F7ndetYY?si=8Mu4li-YCrwxnTwf',
  },
  {
    id: 'yt-3',
    title: 'Theme Reveal of the 33rd IMA International Management Conclave 2026',
    video_url: 'https://youtu.be/6dTi5OnFquk?si=IUhrmf7CchA__3uO',
  },
  {
    id: 'yt-4',
    title: 'IMA International Management Conclave (Feb. 2026)',
    video_url: 'https://youtu.be/aWzwwqJHT_U?si=rzj3XAX1VrYRMKkX',
  },
  {
    id: 'yt-5',
    title: 'IMA International Management Conclave (Feb. 2026)',
    video_url: 'https://youtu.be/eSCfBGyT_Qg?si=0-chVGjTUcmGOm4e',
  },
  {
    id: 'yt-5',
    title: 'Masterchef Pankaj Bhadouria on Flavours of Fame | IMA Women Leadership Conclave 2024',
    video_url: 'https://youtu.be/CgLKmDXbxgo?si=UbhEyOsEnqsyfFw0',
  },
  {
    id: 'yt-5',
    title: 'Ms. Mandira Bedi,Actor, Anchor, Author and Fitness Enthusiast, at IMA Women Leadership Conclave 2023.',
    video_url: 'https://youtu.be/FPrlaljqN2I?si=GCq3q81MffumMtqx',
  },
  {
    id: 'yt-5',
    title: 'Ms. Divya Dutta ,Actor, Model and Author, Mumbai, at IMA Women Leadership Conclave 2023.',
    video_url: 'https://youtu.be/SLWl385oGj4?si=SNNyjz0ER3I2tp-J',
  },
  {
    id: 'yt-5',
    title: 'Avani Davda, Director at Persistent Systems Public Ltd. at IMA Women Leadership Conclave 2023.',
    video_url: 'https://youtu.be/Mg7f3DBESlM?si=K7EhBGgR0FnZSinq',
  },
  {
    id: 'yt-5',
    title: 'Puja Puneet on Overcoming Self-Doubts with High-Energy Insights | IMA Women Leadership Conclave 2024',
    video_url: 'https://youtu.be/BsuAz-GI7Xw?si=-pnzplCQl3cquF3b',
  },
  {
    id: 'yt-5',
    title: 'Highlights of IMA International Management Conclave 2024 | A Legacy of Leadership and Innovation',
    video_url: 'https://youtu.be/5ZBI0oLvSM0?si=MCe0Qk2y03J9Ie-H',
  },
];

const HighlightCard = ({
  highlight,
  index,
  setPlayingVideo,
}: {
  highlight: Highlight;
  index: number;
  setPlayingVideo: (highlight: Highlight | null) => void;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: (index % 3) * 0.15, ease: 'easeOut' }}
    whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300, damping: 20 } }}
    className="group relative cursor-pointer"
  >
    {/* Animated glowing border effect */}
    <motion.div
      className="absolute -inset-[2px] bg-gradient-to-r from-[#D4AF37] via-[#FFF9F0] to-[#D4AF37] rounded-[18px] opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"
      animate={{ backgroundPosition: ['0% center', '200% center'] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      style={{ backgroundSize: '200% auto' }}
    />

    <div className="relative aspect-video overflow-hidden bg-black rounded-2xl border-2 border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-all duration-300 z-10 shadow-lg" onClick={() => setPlayingVideo(highlight)}>
          <motion.img
            src={highlight.thumbnail_url || getYouTubeThumbnail(highlight.video_url)}
            alt={highlight.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all duration-300">
              <Play className="w-8 h-8 text-[#D4AF37] ml-1" fill="#D4AF37" />
            </div>
          </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none bg-gradient-to-t from-black/90 to-transparent">
            <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">{highlight.title}</h3>
          </div>
        </div>
  </motion.div>
);

export const Highlights = () => {
  const [highlights, setHighlights] = useState<Highlight[]>(staticHighlights);
  const [playingVideo, setPlayingVideo] = useState<Highlight | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getEmbedUrl = (url: string) => {
    if (!url) return '';
    if (url.includes('youtube.com/watch?v=')) {
      return url.replace('watch?v=', 'embed/').split('&')[0] + '?autoplay=1';
    }
    if (url.includes('youtu.be/')) {
      const id = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1`;
    }
    return url;
  };

  const displayedHighlights = highlights.slice(0, 3);

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-[#FAFAFA] relative overflow-hidden">
      {/* Unique Theme: Elegant Light with Gold Glowing Particles */}
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-30" 
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.2) 1px, transparent 0)', backgroundSize: '32px 32px' }} 
        animate={{ backgroundPosition: ['0px 0px', '32px 32px'] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
      />
      
      <motion.div
        className="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-[#D4AF37]/15 rounded-full blur-[120px]"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        style={{ willChange: 'transform' }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[40rem] h-[40rem] bg-[#E6C97A]/10 rounded-full blur-[120px]"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        style={{ willChange: 'transform' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-[#111111]"
        >
          <span className="text-[#D4AF37]">Highlights</span> & Achievements
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="text-center text-gray-600 mb-16 max-w-2xl mx-auto"
        >
          Experience the moments that define our excellence
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedHighlights.map((highlight, index) => (
            <HighlightCard
              key={highlight.id}
              highlight={highlight}
              index={index}
              setPlayingVideo={setPlayingVideo}
            />
          ))}
        </div>

        {highlights.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mt-16 flex justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(212, 175, 55, 0.2)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-[#E6C97A] text-white rounded-full font-medium shadow-lg transition-all"
            >
              View More Videos
            </motion.button>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="bg-white/80 backdrop-blur-lg border border-white/20 rounded-3xl w-full max-w-6xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
            >
              <div className="p-6 border-b border-black/10 flex justify-between items-center bg-white/70 backdrop-blur-md sticky top-0 z-20">
                <h3 className="text-2xl md:text-3xl font-bold text-[#111111]">All <span className="text-[#D4AF37]">Highlights</span></h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-gray-900"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-6 overflow-y-auto flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {highlights.map((highlight, index) => (
                    <HighlightCard key={highlight.id} highlight={highlight} index={index} setPlayingVideo={setPlayingVideo} />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {playingVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setPlayingVideo(null)}
                className="fixed top-4 right-4 md:top-8 md:right-8 z-[70] p-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full backdrop-blur-md transition-all shadow-xl"
              >
                <X className="w-6 h-6" />
              </button>
              {isYouTube(playingVideo.video_url) ? (
                <iframe
                  src={getEmbedUrl(playingVideo.video_url)}
                  title={playingVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  src={playingVideo.video_url}
                  title={playingVideo.title}
                  className="w-full h-full object-contain bg-black"
                  controls
                  autoPlay
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
