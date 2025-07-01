import "./index.css";
import { Routes, Route } from "react-router-dom";
import { HomePage, DestinationsPage } from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
      </Routes>
    </>
  );
};

export default App;
