import { HiArrowNarrowRight } from "react-icons/hi";

const RoomComponent = ({ type, price, img, reverse }) => {
  return (
    <div
      className={`${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } md:flex transition-transform duration-300 ease-in-out cursor-pointer hover:scale-105`}
    >
      {/* Image */}
      <div className="relative md:h-auto md:w-1/2">
        <img
          src={img}
          loading="lazy"
          className="object-cover h-full w-full md:h-full will-change-transform "
          alt={type}
        />
      </div>

      {/* Content */}
      <div className="lg:py-28 py-14 md:w-1/2">
        <div className="text-center">
          <span className="text-4xl md:text-xl font-semibold">{price}.00</span>{" "}
          <span className="text-md">per night</span>
        </div>
        <h2 className="text-2xl font-semibold text-center mt-4">{type} Room</h2>
        <div className="flex justify-center mt-6">
          <button className="border-2 border-gray-300 py-2 px-4 rounded flex items-center gap-1 hover:bg-amber-500 hover:text-white transition-colors duration-300">
            View Details <HiArrowNarrowRight className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomComponent;
