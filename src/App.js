import './App.css';
import {
  Main,
  Services,
  About,
  Gallery,
  Videos,
  Testimonials,
  ContactUs,
  FormSection,
  MapSection,
  UsefulLinks,
  FooterSection,
  ScrollTop
} from "../src/exportDefaultComp";

/*===================================*/
/*===================================*/
/*===================================*/

function App() {
  return (
    <div className="App">
      <Main />
      <Services />
      <About />
      <Gallery />
      <Videos />
      <Testimonials />
      <ContactUs />
      <FormSection />
      <MapSection />
      <UsefulLinks />
      <FooterSection />
      <ScrollTop />
    </div>
  );
}

export default App;
