import { motion } from "framer-motion";
import MokshaLogo from "./pictures/MokshaLogo";

export default function AppLoader() {
  return (
    <div className="fixed w-screen h-screen flex flex-col items-center justify-between bg-black py-16 lg:py-12">
      <div />

      {/* Glowing Animated Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex items-center justify-center"
      >
        <motion.div
          className="absolute w-44 h-44 lg:w-52 lg:h-52 rounded-full bg-amber-500 opacity-30 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <MokshaLogo className="w-32 h-32 lg:w-40 lg:h-40 relative z-10 drop-shadow-2xl" />
      </motion.div>

      {/* Text */}
      <div className="text-center">
        <p className="text-amber-500 text-lg font-bold tracking-wide">MOKSHA IX </p>
        <p className="text-gray-400">NIT AGARTALA | 2025</p>
      </div>

      {/* Sexy Loading Dots */}
      <div className="flex space-x-2">
        <motion.div
          className="w-3 h-3 rounded-full bg-amber-500"
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -5, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
        />
        <motion.div
          className="w-3 h-3 rounded-full bg-amber-500"
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -5, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
        />
        <motion.div
          className="w-3 h-3 rounded-full bg-amber-500"
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -5, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
        />
      </div>
    </div>
  );
}
