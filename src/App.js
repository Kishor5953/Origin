
// import './App.css';

// function App() {
//   return (
//     <>
//       <h1>Kishor more</h1>
//     </>
//   );
// }

// export default App;

import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./App.css";

function App() {
  const [region, setRegion] = useState("");
  const [info, setInfo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    switch (region) {
      case "USA":
        setInfo("The United States is a federal republic of 50 states and a capital district.");
        break;
      case "UK":
        setInfo("The United Kingdom is a sovereign country consisting of four countries: England, Scotland, Wales, and Northern Ireland.");
        break;
      case "India":
        setInfo("India is a country in South Asia known for its rich history, cultural diversity, and economic growth.");
        break;
      default:
        setInfo("");
        break;
    }
  };

  return (
    <div className="App">
      <MapContainer center={[37.0902, -95.7129]} zoom={3} scrollWheelZoom={false}>
        <TileLayer url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}" maxZoom={18} id="mapbox/streets-v11" accessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN} />
        <Marker position={[38.9072, -77.0369]}>
          <Popup>
            <strong>Washington D.C.</strong>
            <p>The capital of the United States</p>
          </Popup>
        </Marker>
        <Marker position={[51.5074, -0.1278]}>
          <Popup>
            <strong>London</strong>
            <p>The capital of the United Kingdom</p>
          </Popup>
        </Marker>
        <Marker position={[28.7041, 77.1025]}>
          <Popup>
            <strong>New Delhi</strong>
            <p>The capital of India</p>
          </Popup>
        </Marker>
      </MapContainer>
      <div className="controls">
        <form onSubmit={handleSubmit}>
          <label htmlFor="region">Select a region:</label>
          <select id="region" name="region" value={region} onChange={(event) => setRegion(event.target.value)}>
            <option value="">--Select--</option>
            <option value="USA">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="India">India</option>
          </select>
          <button type="submit">Load</button>
        </form>
      </div>
      {info && (
        <div className="card">
          <h2>{region}</h2>
          <p>{info}</p>
        </div>
      )}
    </div>
  );
}

export default App;
