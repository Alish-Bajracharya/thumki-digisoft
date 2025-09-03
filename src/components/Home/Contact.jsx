import { FiPhone, FiMail } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-0 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Map Section */}
        <motion.div
          className="h-[400px] lg:h-auto rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <iframe
            title="Thumki Resort Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.097759409464!2d85.52881187613747!3d27.559476331996507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb0b8335253e41%3A0x10b5c00d9397ad9d!2sThumki%20Resort!5e0!3m2!1sen!2snp!4v1756359925891!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="bg-gradient-to-br from-blue-900 to-blue-800 text-white flex flex-col justify-center items-center p-10 rounded-2xl shadow-xl hover:scale-105 transition-transform"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <HiOutlineLocationMarker className="text-5xl mb-4 text-amber-400" />
          <h2 className="text-3xl font-bold mb-6 text-amber-400">Contact Us</h2>
          <div className="space-y-4 text-center">
            <p className="font-medium">Phone :</p>
            <a href="tel:+977-9767650124" className="hover:text-amber-300 transition">
              +977-9767650124
            </a>
            <p className="font-medium mt-4">Main Phone :</p>
            <a href="tel:+977-9851078863" className="hover:text-amber-300 transition">
              +977-9851078863
            </a>
          </div>
        </motion.div>

        {/* Drop a Line */}
        <motion.div
          className="bg-gradient-to-br from-amber-400 to-amber-500 text-blue-950 flex flex-col justify-center items-center p-10 rounded-2xl shadow-xl hover:scale-105 transition-transform"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <FiMail className="text-5xl mb-4" />
          <h2 className="text-3xl font-bold mb-6">Drop a Line</h2>
          <div className="space-y-4 text-center">
            <p className="font-medium">Information :</p>
            <a href="mailto:info@thumkiresort.com" className="hover:text-white transition">
              info@thumkiresort.com
            </a>
            <p className="font-medium mt-4">Contact Us :</p>
            <a href="mailto:thumki@resort.com" className="hover:text-white transition">
              thumki@resort.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
