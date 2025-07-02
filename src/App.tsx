import "./index.css";
import { Routes, Route } from "react-router-dom";
import { HomePage, DestinationsPage, TripsPage } from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/trips" element={<TripsPage />} />
      </Routes>
    </>
  );
};

export default App;
