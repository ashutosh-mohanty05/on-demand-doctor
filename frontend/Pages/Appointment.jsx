import React from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";
const Appointment = () => {
  
  return (
    <>
      <Hero
        title={'Schedule Your Appointment | Doctor On Call'}
        imageUrl={"/signin.png"}
      />
      <AppointmentForm/>
    </>
  );
};

export default Appointment;
