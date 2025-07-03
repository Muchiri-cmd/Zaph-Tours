import "./index.css";
import { Routes, Route } from "react-router-dom";
import { HomePage, DestinationsPage, TripsPage, ContactPage } from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/trips" element={<TripsPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
      </Routes>
    </>
  );
};

export default App;
