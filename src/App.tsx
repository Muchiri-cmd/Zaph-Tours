import {
  Navbar,
  Hero,
  About,
  Destinations,
  Testimonials,
  NewsLetter,
  Banner,
  Footer,
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
      <Footer />
    </>
  );
};

export default App;
