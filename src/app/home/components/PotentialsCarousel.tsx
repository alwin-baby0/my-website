'use client';

import { useState, useEffect } from 'react';
import styles from "./PotentialsCarousel.module.css";

const POTENTIALS = [
  {
    id: 1,
    icon: "🌐",
    title: "Web Development",
    description: "Use cutting-edge frameworks and technologies to create interactive, responsive web applications that offer seamless user experiences on all platforms."
  },
  {
    id: 2,
    icon: "📺",
    title: "TV Application Development",
    description: "Creating feature-rich apps for streaming services and smart TVs, as well as refining user interfaces for big screens and remote control interactions."
  },
  {
    id: 3,
    icon: "📈",
    title: "Trading & Investing",
    description: "In my spare time, I enjoy delving into the financial markets to invest in a fundamentally sound stock or to spot a quick move in a currency pair."
  }
];

export default function PotentialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % POTENTIALS.length);
    }, 7000); // Change every 7 seconds

    return () => clearInterval(interval);
  }, [autoPlay]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setAutoPlay(false);
    // Resume autoplay after 2 seconds
    setTimeout(() => setAutoPlay(true), 2000);
  };

  const handleNextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % POTENTIALS.length);
  };

  return (
    <section className={styles.potentialsSection}>
      <h2>This is what I do</h2>
      
      <div className={styles.carouselContainer}>
          <div className={styles.carouselCards}>
          {POTENTIALS.map((potential, index) => {
            // Calculate the position relative to current index
            let position = index - currentIndex;
            if (position < 0) {
              position += POTENTIALS.length;
            }

            return (
              <div
                key={potential.id}
                className={`${styles.potentialCard} ${
                  index === currentIndex ? styles.active : ''
                }`}
                style={{
                  opacity: index === currentIndex ? 1 : 0,
                  visibility: index === currentIndex ? 'visible' : 'hidden',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <div className={styles.cardIcon}>{potential.icon}</div>
                <h3>{potential.title}</h3>
                <p>{potential.description}</p>
              </div>
            );
          })}
        </div>

        {/* Indicators */}
        <div className={styles.indicatorsDots}>
          {POTENTIALS.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                index === currentIndex ? styles.activeDot : ''
              }`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to potential ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
