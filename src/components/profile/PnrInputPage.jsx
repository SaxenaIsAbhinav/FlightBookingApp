import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PnrInputPage.css";
import axios from "axios";

const App = () => {
  const [pnr, setPnr] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pnr.trim() !== "") {
      try {
        const response = await axios.get(`http://localhost:8080/TicketDetails/${pnr}`);
        const ticketData = response.data;
        console.log("ticket", ticketData);
        console.log("ticketdata", response.data);
        console.log("response", response);

        // Pass data via navigation state
        navigate("/ticket/pnr", { state: { ...ticketData } });
      } catch (error) {
        console.error("Error fetching ticket data", error);
        alert("PNR not found or server error.");
      }
    }
  };

  return (
    <div className="container">
      <h2 className="title">PNR Status</h2>
      <form className="search-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your PNR"
          value={pnr}
          onChange={(e) => setPnr(e.target.value)}
          className="pnr-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
};

export default App;
