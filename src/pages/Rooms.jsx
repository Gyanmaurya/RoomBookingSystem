import React, { useState } from "react";
import { hotelsData } from "../../data.json";
import { BookingModal } from "../components";

const Rooms = () => {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleBookNow = (hotel) => {
    setSelectedHotel(hotel);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedHotel(null);
  };

  return (
    <div className="container mt-5">
      <header className="text-center mb-4">
        <h1>Welcome to Our Booking System</h1>
        <p>Your perfect getaway starts here.</p>
      </header>
      <div className="row">
        {hotelsData?.map((item, index) => (
          <div
            key={index}
            className="col-12 col-md-4 d-flex justify-content-center mb-4"
          >
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={item?.photo5}
                className="card-img-top"
                alt={item?.hotel_name}
              />
              <div className="card-body">
                <h5 className="card-title">{item?.hotel_name}</h5>
                <p className="card-text">{item?.addressline1}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-success fw-bold">$47</span>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleBookNow(item)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <BookingModal
        showModal={showModal}
        handleClose={handleCloseModal}
        hotel={selectedHotel}
      />
    </div>
  );
};

export default Rooms;
