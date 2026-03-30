import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Calendar, X } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  image_url: string;
  date: string;
}

const staticEvents: Event[] = [

  {
    id: 'event-2',
    title: 'Amitabh Bachchan',
    image_url: '/image/amitabh.jpeg',
    date: '2014-01-26',
  },
  {
    id: 'event-6',
    title: 'A. P. J. Abdul Kalam',
    image_url: '/image/apjsir.png',
    date: '2012-06-23',
  },
  {
    id: 'event-1',
    title: 'Aman Gupta',
    image_url: '/image/aman.JPG',
    date: '2026-02-27',
  },
  {
    id: 'event-3',
    title: 'Dr. Niranjan Hiranandani',
    image_url: '/image/niranjan2.JPG',
    date: '2026-02-26',
  },
  {
    id: 'event-9',
    title: 'Baba Ramdev',
    image_url: '/image/ramdev.png',
    date: '2020-01-16',
  },
  {
    id: 'event-4',
    title: 'Suhani Shah',
    image_url: '/image/suhani4.JPG',
    date: '2026-02-27',
  },
  {
    id: 'event-7',
    title: 'AI Robotics integrates',
    image_url: '/image/robot.JPG',
    date: '2026-02-26',
  },
   {
    id: 'event-8',
    title: 'Dr. Niranjan Hiranandani',
    image_url: '/image/niranjan1.JPG',
    date: '2026-02-26',
  },
  {
    id: 'event-10',
    title: 'Jagadish Vasudev (Sadhguru)',
    image_url: '/image/sadhguru.png',
    date: '2015-02',
  },
  {
    id: 'event-11',
    title: 'Nitin Gadkari',
    image_url: '/image/nitin.png',
    date: '2020-01-18',
  },
  {
    id: 'event-12',
    title: 'Kumar Mangalam Birla',
    image_url: '/image/birla.png',
    date: '2012-01-19',
  },
];

const EventCard = ({
  event,
  index,
  onClick,
}: {
  event: Event;
  index: number;
  onClick: (event: Event) => void;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: 'easeOut' }}
    whileHover={{ y: -10, rotateY: 3, rotateX: 3 }}
    onClick={() => onClick(event)}
    className="group relative overflow-hidden rounded-3xl shadow-xl bg-white cursor-pointer border border-transparent hover:border-[#D4AF37]/30 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.2)]"
  >
    <div className="relative aspect-[4/3] overflow-hidden">
      <motion.img
        src={event.image_url}
        alt={event.title}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-all duration-700 ease-out"
        whileHover={{ scale: 1.15 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-black/80 to-transparent">
      <div className="flex items-center gap-2 text-[#E6C97A] mb-2">
        <Calendar className="w-4 h-4" />
        <span className="text-sm">
          {event.date ? new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : ''}
        </span>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
     
    </div>
  </motion.div>
);

export const Events = () => {
  const [events, setEvents] = useState<Event[]>(staticEvents);
  const [isViewMoreOpen, setIsViewMoreOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  useEffect(() => {
    // Database fetch removed to clear the demo events. 
    // You can add your actual events manually in the staticEvents array above.
  }, []);

  const displayedEvents = events.slice(0, 3);

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-[#FAFAFA] relative overflow-hidden">
      {/* Unique Theme: Grid Pattern with Animated Orbs */}
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-[0.04]" 
        style={{ backgroundImage: 'linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)', backgroundSize: '40px 40px', willChange: 'background-position' }} 
        animate={{ backgroundPosition: ['0px 0px', '40px 40px'] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
      />
      
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#D4AF37]/20 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{ willChange: 'transform' }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-[#E6C97A]/20 to-transparent rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], x: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
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
          Event <span className="text-[#D4AF37]">Gallery</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="text-center text-gray-600 mb-16 max-w-2xl mx-auto"
        >
          Capturing moments of excellence and collaboration
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} onClick={setSelectedEvent} />
          ))}
        </div>

        {events.length > 3 && (
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
              onClick={() => setIsViewMoreOpen(true)}
              className="px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-[#E6C97A] text-white rounded-full font-medium shadow-lg transition-all"
            >
              View More Events
            </motion.button>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {isViewMoreOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              style={{ willChange: 'transform, opacity' }}
              className="bg-white rounded-3xl w-full max-w-6xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
            >
              <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-20">
                <h3 className="text-2xl md:text-3xl font-bold text-[#111111]">Event <span className="text-[#D4AF37]">Gallery</span></h3>
                <button
                  onClick={() => setIsViewMoreOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-gray-900"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-6 overflow-y-auto flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {events.map((event, index) => (
                    <EventCard key={event.id} event={event} index={index} onClick={setSelectedEvent} />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedEvent && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-md" 
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              style={{ willChange: 'transform, opacity' }}
              className="relative w-full max-w-5xl flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="fixed top-4 right-4 md:top-8 md:right-8 z-[70] p-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full backdrop-blur-md transition-all shadow-xl"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedEvent.image_url}
                alt={selectedEvent.title}
                loading="lazy"
                decoding="async"
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-6 text-center text-white">
                <h3 className="text-2xl font-bold mb-2">{selectedEvent.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
