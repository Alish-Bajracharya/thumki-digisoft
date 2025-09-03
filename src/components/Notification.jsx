import { motion } from "framer-motion";
import { X } from "lucide-react";
import diningImg from "../assets/Activities/luxury-room.jpg";

const NotificationPopup = ({ onClose }) => {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-6 right-6 z-40 w-[350px] bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200"
    >
      <div className="flex justify-between items-center px-4 py-3 bg-gray-100">
        <h2 className="text-sm font-semibold text-gray-800">MAJHI GHAR</h2>
        <button
          onClick={onClose}
          className="text-gray-600 hover:text-gray-900"
        >
          <X size={18} />
        </button>
      </div>

      <img
        src={diningImg}
        alt="Dining"
        className="w-full h-48 object-cover"
      />

      <div className="px-4 py-3 text-center">
        <h3 className="text-lg font-bold text-gray-900">NOW OPEN</h3>
        <p className="text-sm text-gray-600 mt-1">
          Celebrate the spirit of homegrown Nepal.
          <br />
          <span className="text-gray-500">
            A culinary tribute to Chitwan’s river life.
          </span>
        </p>
      </div>
    </motion.div>
  );
};

export default NotificationPopup;
