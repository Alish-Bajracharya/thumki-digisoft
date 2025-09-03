import { FiPhone, FiMail } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-gray-100 via-white to-gray-100">
      {/* Decorative Blur Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-amber-300/40 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/40  blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Map Section */}
        <motion.div
          className=" overflow-hidden shadow-2xl border border-gray-200 bg-white backdrop-blur-md hover:scale-[1.02] transition-transform"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <iframe
            title="Thumki Resort Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.097759409464!2d85.52881187613747!3d27.559476331996507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb0b8335253e41%3A0x10b5c00d9397ad9d!2sThumki%20Resort!5e0!3m2!1sen!2snp!4v1756359925891!5m2!1sen!2snp"
            width="100%"
            height="100%"
            className="min-h-[400px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="relative bg-white/70 backdrop-blur-xl border border-gray-200 shadow-2xl flex flex-col justify-center items-center p-12 hover:shadow-amber-300/40 hover:scale-[1.03] transition"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <HiOutlineLocationMarker className="text-6xl mb-4 text-amber-500 drop-shadow-md" />
          <h2 className="text-3xl font-extrabold mb-6 text-gray-900">Contact Us</h2>
          <div className="space-y-5 text-center text-lg">
            <div>
              <p className="font-semibold text-gray-700">Phone:</p>
              <a
                href="tel:+977-9767650124"
                className="text-blue-700 hover:text-amber-500 font-medium transition"
              >
                +977-9767650124
              </a>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Main Phone:</p>
              <a
                href="tel:+977-9851078863"
                className="text-blue-700 hover:text-amber-500 font-medium transition"
              >
                +977-9851078863
              </a>
            </div>
          </div>
        </motion.div>

        {/* Drop a Line */}
        <motion.div
          className="relative bg-white/70 backdrop-blur-xl border border-gray-200  shadow-2xl flex flex-col justify-center items-center p-12 hover:shadow-blue-400/40 hover:scale-[1.03] transition"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <FiMail className="text-6xl mb-4 text-blue-600 drop-shadow-md" />
          <h2 className="text-3xl font-extrabold mb-6 text-gray-900">Drop a Line</h2>
          <div className="space-y-5 text-center text-lg">
            <div>
              <p className="font-semibold text-gray-700">Information:</p>
              <a
                href="mailto:info@thumkiresort.com"
                className="text-blue-700 hover:text-amber-500 font-medium transition"
              >
                info@thumkiresort.com
              </a>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Contact Us:</p>
              <a
                href="mailto:thumki@resort.com"
                className="text-blue-700 hover:text-amber-500 font-medium transition"
              >
                thumki@resort.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
