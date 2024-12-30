import React from "react";
import { useForm } from "react-hook-form";

const BookingModal = ({ showModal, handleClose, hotel }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const {
      name,
      mobileNumber,
      checkInDate,
      checkOutDate,
      checkInTime,
      checkOutTime,
    } = data;

    const whatsappMessage = `Name: ${name}\nMobile Number: ${mobileNumber}\nHotel: ${hotel?.hotel_name}\nAddress: ${hotel?.addressline1}\nCheck-in Date: ${checkInDate}\nCheck-in Time: ${checkInTime}\nCheck-out Date: ${checkOutDate}\nCheck-out Time: ${checkOutTime}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);

    const ownerPhoneNumber = "453453453453";
    window.open(
      `https://wa.me/${ownerPhoneNumber}?text=${encodedMessage}`,
      "_blank"
    );

    handleClose();
  };

  if (!hotel) return null;

  return (
    <div
      className={`modal fade ${showModal ? "show" : ""}`}
      id="hotelModal"
      tabIndex="-1"
      aria-labelledby="hotelModalLabel"
      aria-hidden={!showModal}
      style={{ display: showModal ? "block" : "none" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="hotelModalLabel">
              {hotel?.hotel_name}
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={handleClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <h6 className="mb-3">Booking Form</h6>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name.message}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="mobileNumber" className="form-label">
                  Mobile Number
                </label>
                <input
                  type="text"
                  id="mobileNumber"
                  {...register("mobileNumber", {
                    required: "Mobile Number is required",
                    pattern: {
                      value: /^\d{10}$/,
                      message: "Enter a valid 10-digit mobile number",
                    },
                  })}
                  className={`form-control ${
                    errors.mobileNumber ? "is-invalid" : ""
                  }`}
                />
                {errors.mobileNumber && (
                  <div className="invalid-feedback">
                    {errors.mobileNumber.message}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="checkInDate" className="form-label">
                  Check-in Date
                </label>
                <input
                  type="date"
                  id="checkInDate"
                  {...register("checkInDate", {
                    required: "Check-in Date is required",
                  })}
                  className={`form-control ${
                    errors.checkInDate ? "is-invalid" : ""
                  }`}
                />
                {errors.checkInDate && (
                  <div className="invalid-feedback">
                    {errors.checkInDate.message}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="checkInTime" className="form-label">
                  Check-in Time
                </label>
                <input
                  type="time"
                  id="checkInTime"
                  {...register("checkInTime", {
                    required: "Check-in Time is required",
                  })}
                  className={`form-control ${
                    errors.checkInTime ? "is-invalid" : ""
                  }`}
                />
                {errors.checkInTime && (
                  <div className="invalid-feedback">
                    {errors.checkInTime.message}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="checkOutDate" className="form-label">
                  Check-out Date
                </label>
                <input
                  type="date"
                  id="checkOutDate"
                  {...register("checkOutDate", {
                    required: "Check-out Date is required",
                  })}
                  className={`form-control ${
                    errors.checkOutDate ? "is-invalid" : ""
                  }`}
                />
                {errors.checkOutDate && (
                  <div className="invalid-feedback">
                    {errors.checkOutDate.message}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="checkOutTime" className="form-label">
                  Check-out Time
                </label>
                <input
                  type="time"
                  id="checkOutTime"
                  {...register("checkOutTime", {
                    required: "Check-out Time is required",
                  })}
                  className={`form-control ${
                    errors.checkOutTime ? "is-invalid" : ""
                  }`}
                />
                {errors.checkOutTime && (
                  <div className="invalid-feedback">
                    {errors.checkOutTime.message}
                  </div>
                )}
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
