import {
  Navbar,
  Hero,
  About,
  Destinations,
  Testimonials,
  NewsLetter,
  Banner,
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
      <Banner />
      <NewsLetter />
    </>
  );
};

export default App;
