import Layout from "../../Layout";
import HeroSection from "../../components/HeroSection";
import AboutUs from "../../components/AboutUs";
import BookList from "../../components/BookList";
import Category from "../../components/Category";

const LandingPage = () => {
  return (
    // Layout navbar dan footer
    <Layout>
      <HeroSection />
      <AboutUs />
      <BookList />
      <Category />
    </Layout>
  );
};

export default LandingPage;
