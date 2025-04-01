import Description from "./components/main/Description";
import Section from "./components/main/Section";
import SectionTwo from "./components/main/SectionTwo";
import Footer from "./components/Footer";
import Header from "./layout/Header";

const Index = () => {
  return (
    <div id="Home">
      <Header />
      <Section />
      <SectionTwo />
      <Description />
      <Footer />
    </div>
  );
};

export default Index;
