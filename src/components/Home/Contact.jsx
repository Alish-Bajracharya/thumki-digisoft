import { FiPhone, FiMail } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="relative w-full min-h-[600px] flex flex-col lg:flex-row overflow-hidden bg-gradient-to-r from-amber-50 via-white to-blue-50">
      {/* Decorative Blurs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-0 w-96 h-96 bg-amber-300/30 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/30 blur-3xl rounded-full"></div>
      </div>

      {/* Map on the Left (cover left to middle) */}
      <motion.div
        className="w-full lg:w-2/3 h-[400px] lg:h-auto"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <iframe
          title="Thumki Resort Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.097759409464!2d85.52881187613747!3d27.559476331996507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb0b8335253e41%3A0x10b5c00d9397ad9d!2sThumki%20Resort!5e0!3m2!1sen!2snp!4v1756359925891!5m2!1sen!2snp"
          width="100%"
          height="100%"
          className="object-cover w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>

      {/* Contact Info Floating Right */}
      <motion.div
        className="w-full lg:w-1/3 flex flex-col justify-center p-10 lg:p-16 space-y-10 bg-white/80 backdrop-blur-xl shadow-2xl z-10"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-6">
          Get in Touch
        </h2>

        {/* Address */}
        <div className="flex items-start space-x-4">
          <HiOutlineLocationMarker className="text-4xl text-amber-500 drop-shadow-md" />
          <div>
            <p className="font-semibold text-gray-700">Address</p>
            <p className="text-gray-600">Thumki Resort, Dhulikhel, Kavre, Nepal</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start space-x-4">
          <FiPhone className="text-3xl text-blue-700 drop-shadow-md" />
          <div>
            <p className="font-semibold text-gray-700">Phone</p>
            <a
              href="tel:+977-9767650124"
              className="text-blue-900 hover:text-amber-500 font-medium transition block"
            >
              +977-9767650124
            </a>
            <a
              href="tel:+977-9851078863"
              className="text-blue-900 hover:text-amber-500 font-medium transition block"
            >
              +977-9851078863
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start space-x-4">
          <FiMail className="text-3xl text-blue-600 drop-shadow-md" />
          <div>
            <p className="font-semibold text-gray-700">Email</p>
            <a
              href="mailto:info@thumkiresort.com"
              className="text-blue-700 hover:text-amber-500 font-medium transition block"
            >
              info@thumkiresort.com
            </a>
            <a
              href="mailto:thumki@resort.com"
              className="text-blue-700 hover:text-amber-500 font-medium transition block"
            >
              thumki@resort.com
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
