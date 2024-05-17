import React from 'react';
import './DoctorCard.css';
import { RiHospitalFill } from "react-icons/ri";
import { MdWork } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
const DoctorCard = ({ doctor }) => {
  return (
    <div className="doctor-card">
      <div className="doctor-photo">
        <img src={doctor.docAvatar && doctor.docAvatar.url} alt="Doctor Avatar" />
      </div>
      <div className="doctor-details">
        <h4>{`${doctor.firstName} ${doctor.lastName}`}</h4>
        <p>
          Department: <span>{doctor.doctorDepartment}</span>
        </p>
        <p>
        <RiHospitalFill />- <span>{doctor.clinic}</span>
        </p>
        <p>
        <MdWork />- <span>{doctor.docExperience}</span>
        </p>
        <p>
        <MdEmail />- <span>{doctor.email}</span>
        </p>
        <p>
        <FaPhoneAlt />- <span>{doctor.phone}</span>
        </p>
        <p>
          DOB: <span>{doctor.dob.substring(0, 10)}</span>
        </p>
        <p>
        Reg.No: <span>{doctor.nic}</span>
        </p>
        <p>
          Gender: <span>{doctor.gender}</span>
        </p>
        <div className="button-container">
          <button className="appointment-button">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;