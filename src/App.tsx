import {
  Navbar,
  Hero,
  About,
  Destinations,
  Testimonials,
  NewsLetter,
} from "./components";
import "./index.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Destinations />
      <Testimonials />
      <NewsLetter />
    </>
  );
};

export default App;
