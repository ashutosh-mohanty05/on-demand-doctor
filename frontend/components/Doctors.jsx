import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import DoctorCard from "./DoctorCard";
import Autosuggest from 'react-autosuggest';


const SearchInput = ({ suggestions, onSuggestionsFetchRequested, onSuggestionsClearRequested, onSuggestionSelected, value, onChange }) => {
  const inputProps = {
    placeholder: '🔍Search',
    value,
    onChange,

  };
  
  const renderSuggestion = (suggestion, { isHighlighted }) => (
    <div className={`suggestion ${isHighlighted ? 'highlighted' : ''}`}>{suggestion}</div>
  );

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      onSuggestionSelected={onSuggestionSelected}
      getSuggestionValue={(suggestion) => suggestion}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
      theme={{
        container: 'suggestion-container',
        suggestionsList: 'suggestion-container',
        suggestion: 'suggestion',
      }}
    />
  );
};

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");
  const { isAuthenticated } = useContext(Context);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get("https://doctor-on-call.onrender.com/api/v1/user/doctors", {
          withCredentials: true,
        });
        setDoctors(data.doctors);
        setFilteredDoctors(data.doctors);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    fetchDoctors();
  }, []);

  useEffect(() => {
    const filtered = doctors.filter((doctor) =>
      doctor.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.doctorDepartment.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.clinic.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortBy === "department") {
      filtered.sort((a, b) => a.doctorDepartment.localeCompare(b.doctorDepartment));
    } else if (sortBy === "experience") {
      filtered.sort((a, b) => a.docExperience.localeCompare(b.docExperience));
    }

    setFilteredDoctors(filtered);
  }, [doctors, searchTerm, sortBy]);

  const onSuggestionsFetchRequested = ({ value }) => {
    const suggestions = doctors
      .flatMap((doctor) => [
        `${doctor.firstName} ${doctor.lastName}`,
        doctor.doctorDepartment,
        doctor.clinic,
      ])
      .filter((suggestion) => suggestion.toLowerCase().includes(value.toLowerCase()))
      .slice(0, 5);

    setSuggestions(suggestions);
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onSuggestionSelected = (_, { suggestionValue }) => {
    setSearchTerm(suggestionValue);
  };

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <section className="page doctors">   
      <h1 className="doctorh">DOCTORS</h1>
      <div className="search-sort-container">
        <SearchInput
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          onSuggestionSelected={onSuggestionSelected}
          value={searchTerm}
          onChange={(_, { newValue }) => setSearchTerm(newValue)}
        />
      </div>
      <div className="banner">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => <DoctorCard key={doctor._id} doctor={doctor} />)
        ) : (
          <h1 className="no">No Registered Doctors Found!</h1>
        )}
      </div>
    </section>
  );
};

export default Doctors;