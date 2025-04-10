import { classNames } from '@arpansaha13/utils';
import Container from '~common/Container';
import styles from './styles.module.css';
import { motion } from 'framer-motion';

export default function Hero() {
  // Adjusted sizes for better responsiveness
  const imageSizeStyles = 'w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem]';


  return (
    <section
      className={classNames(
        '-mt-[100px] pt-[100px] pb-4 sm:pb-8 relative overflow-hidden',
        styles['hero-bg']
      )}
    >
      {/* Background Gradient Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black via-green-900 to-black opacity-40"></div> */}

      {/* Floating Nature Particles */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {Array.from({ length: 12 }).map((_, idx) => (
          <motion.div
            key={idx}
            className="absolute w-1.5 h-1.5 bg-yellow-300 rounded-full shadow-md"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <Container className="relative grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-y-0">
        {/* Text Section */}
        <div className="flex items-center text-center sm:text-left justify-center sm:justify-start px-4 sm:px-0">
          <div>
            {/* Logo */}
            <img
              src="/moksha/text_logo.png"
              alt="Moksha logo"
              className="w-48 sm:w-64 md:w-72 lg:w-[22rem] xl:w-[26rem] mb-3 mx-auto sm:mx-0"
            />

            {/* Title */}
            <p className="text-3xl sm:text-4xl font-bold text-green-400 drop-shadow-lg tracking-wide font-[Orbitron]">
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                ECHOS OF EDEN
              </motion.span>
            </p>

            {/* Description */}
            <div className="mt-4 md:mt-6 text-gray-300 text-base sm:text-lg leading-relaxed">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2 }}
              >
                Step into a realm where nature sings, leaves whisper, and paradise unfolds in golden hues.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="py-8 sm:py-16 flex items-center justify-center relative mix-blend-lighten">
          {/* Heart Pulse Background */}
          <motion.div
            className={classNames(
              imageSizeStyles,
              'absolute rounded-full bg-gradient-to-br from-pink-400 via-red-300 to-amber-300 opacity-20'
            )}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.2, 0.35, 0.2],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Glowing Aura */}
          <motion.div
            className={classNames(
              imageSizeStyles,
              'absolute rounded-full blur-2xl opacity-30'
            )}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Hero Image */}
          <picture>
            <source
              srcSet="/moksha/moksha-512x512.webp, /moksha/moksha-1024x1024.webp 2x"
              type="image/webp"
            />
            <source
              srcSet="/moksha/moksha-512x512.png, /moksha/moksha-1024x1024.png 2x"
              type="image/png"
            />
            <motion.img
              src="/moksha/moksha-1024x1024.png"
              alt="Moksha hero image"
              className={classNames(
                imageSizeStyles,
                'mix-blend-hard-light drop-shadow-2xl'
              )}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            />
          </picture>
        </div>
      </Container>
    </section>
  );
}
