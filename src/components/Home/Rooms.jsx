import RoomComponent from "../RoomComponent";

// WebP versions of rooms
import room1 from "../../assets/Rooms/room1.JPG";
import room2 from "../../assets/Rooms/room2.JPG";
import room3 from "../../assets/Rooms/room3.JPG";
import room4 from "../../assets/Rooms/room4.JPG";
import room5 from "../../assets/Rooms/room5.JPG";
import room6 from "../../assets/Rooms/room6.JPG";

const Rooms = () => {
  return (
    <section id="rooms" className="py-10 lg:py-24">
      <div>
        <h6 className="uppercase text-amber-500 mb-2 font-bold text-sm text-center">
          Thumki Resorts
        </h6>
        <h1 className="lg:text-4xl md:text-4xl text-3xl leading-normal font-bold text-center">
          Luxury Rooms
        </h1>

        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RoomComponent type="King" price="100" img={room1} />
            <RoomComponent type="Superior" price="100" img={room2} />
            <RoomComponent type="Deluxe" price="100" img={room3} reverse />
            <RoomComponent type="Classic" price="100" img={room4} reverse />
            <RoomComponent type="Luxury" price="100" img={room5} />
            <RoomComponent type="Business" price="100" img={room6} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
