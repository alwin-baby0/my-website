'use client';

export default function StructuredData() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Alwin Baby",
    url: "https://alwinbaby.com",
    image: "https://alwinbaby.com/profile.png",
    jobTitle: "Full Stack Developer",
    description: "Full Stack Developer with 3+ years of experience building web and TV applications using React.js and LightningJS",
    sameAs: [
      "https://github.com/alwin-baby0",
      "https://linkedin.com/in/alwinbabyofficial",
      "https://twitter.com/alwin_baby",
    ],
    email: "alwin.baby.official@gmail.com",
    telephone: "+49 15510 942947",
    hasOccupation: [
      {
        "@type": "Occupation",
        name: "Full Stack Developer",
        occupationLocation: {
          "@type": "City",
          name: "Trivandrum",
        },
      },
    ],
    previousWork: [
      {
        "@type": "Organization",
        name: "Diagonal Technologies Private Limited",
        jobTitle: "Software Engineer",
        startDate: "2022-08",
        endDate: "2025-09",
        location: "Trivandrum, India",
      },
    ],
    knowsLanguage: ["en", "de"],
    knowsAbout: [
      "React.js",
      "Node.js",
      "Next.js",
      "TypeScript",
      "AWS",
      "LightningJS",
      "Tizen",
      "webOS",
      "Vidaa",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "17 Wedringerstraße",
      addressLocality: "Magdeburg",
      postalCode: "39124",
      addressCountry: "DE",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
