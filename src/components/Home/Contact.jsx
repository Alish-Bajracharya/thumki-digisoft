import { FiPhone, FiMail } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Contact = () => {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-3 min-h-[400px]">
      {/* Map Section */}
      <div className="h-[400px] lg:h-auto">
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
      </div>

      {/* Contact Us */}
      <div className="bg-blue-900 text-white flex flex-col justify-center items-center p-8">
        <HiOutlineLocationMarker className="text-4xl mb-4 text-amber-400" />
        <h2 className="text-2xl font-semibold mb-6 text-amber-400">Contact Us</h2>
        <p className="mb-3">Phone :</p>
        <a href="tel:+977-9767650124" className="hover:text-amber-400 transition">
          +977-9767650124
        </a>
        <p className="mt-6 mb-3">Main Phone :</p>
        <a href="tel:+977-9851078863" className="hover:text-amber-400 transition">
          +977-9851078863
        </a>
      </div>

      {/* Drop a Line */}
      <div className="bg-amber-500 text-blue-950 flex flex-col justify-center items-center p-8">
        <FiMail className="text-4xl mb-4" />
        <h2 className="text-2xl font-semibold mb-6">Drop a Line</h2>
        <p className="mb-3">Information :</p>
        <a href="mailto:info@thumkiresort.com" className="hover:text-white transition">
          info@thumkiresort.com
        </a>
        <p className="mt-6 mb-3">Contact Us :</p>
        <a href="mailto:thumki@resort.com" className="hover:text-white transition">
          thumki@resort.com
        </a>
      </div>
    </section>
  );
};

export default Contact;
