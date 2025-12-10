import styles from "./page.module.css";
import HeroSection from "./components/HeroSection";
import PotentialsCarousel from "./components/PotentialsCarousel";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Hero Section */}
        <HeroSection />

        {/* Potentials Carousel Section */}
        <PotentialsCarousel />

        {/* Services Section */}
        <ServicesSection />
      </div>
    </div>
  );
}
