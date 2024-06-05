import Layout from "../../Layout";
import HeroSection from "../../components/pageComponent/HeroSection";
import AboutUs from "../../components/pageComponent/AboutUs";
import BookList from "../../components/pageComponent/BookList";
import Category from "../../components/pageComponent/Category";

const LandingPage = () => {
  return (
    // Layout navbar dan footer
    <Layout >
      <HeroSection />
      <AboutUs />
      <BookList />
      <Category />
    </Layout>
  );
};

export default LandingPage;
