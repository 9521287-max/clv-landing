// i18n.js — даём ДВА экспорта: named и default, чтобы любой импорт работал
export const translations = {
  en: {
    intro: {
      title: "Como Lake View Residents",
      text:
        "Como Lake View Residents is an exclusive residential concept nestled above the serene waters of Lake Como in Argegno. Designed for those who value privacy, contemporary architecture, and a close connection with nature, CLV offers a rare opportunity to live surrounded by beauty — every residence with panoramic lake views and generous private terraces."
    },
    hero: {
      title: "Contemporary private residences above Lake Como",
      subtitle:
        "Five boutique apartments and one detached villa, each with a private terrace and breathtaking panoramic views of the water. A life of calm elegance, where nature and architecture exist in perfect harmony."
    },
    highlights: {
      title: "Highlights",
      list: [
        "Panoramic lake views from every residence",
        "Spacious private terraces",
        "Contemporary architectural design",
        "Covered parking with direct access",
        "Landscaped gardens",
        "Outdoor pool with sunbathing area and loungers",
        "Absolute privacy and exclusivity"
      ]
    },
    residences: {
      title: "Residences",
      text:
        "Each residence is designed to frame the beauty of Lake Como. Floor-to-ceiling glass fills the interiors with light, while seamless transitions between inside and outside extend your living space onto expansive private terraces."
    },
    floorplans: {
      title: "Levels & Floor Plans",
      levels: [
        {
          name: "Level 0 — Parking",
          description: "Covered parking for 4 cars."
        },
        {
          name: "Level 1 — Apartment A1 + Parking",
          description:
            "Covered parking for 10 cars. Apartment A1: 66.57 m². Layout: kitchen-living area, 2 bedrooms, 2 bathrooms. Private terrace: 27 m². Oriented toward panoramic lake views."
        },
        {
          name: "Level 2 — Apartment A2 + Utility Rooms",
          description:
            "Utility rooms provided for all residences. Apartment A2: 91.69 m². Layout: kitchen-living area, 2 bedrooms, 2 bathrooms. Private terrace: 110 m². Panoramic views over Lake Como."
        },
        {
          name: "Level 3 — Apartment A3",
          description:
            "Apartment A3: 97.61 m². Layout: kitchen-living area, 3 bedrooms, 2 bathrooms. Private terrace: 125 m². Expansive views of the lake and surrounding landscape."
        },
        {
          name: "Level 4 — Apartment A4",
          description:
            "Apartment A4: 70.34 m². Layout: kitchen-living area, 2 bedrooms, 2 bathrooms. Private terrace: 68 m². Elevated position with breathtaking panoramic views."
        },
        {
          name: "Detached Villa — Two Residences (V1 & V2)",
          description:
            "V1 (Level 1): 77.50 m² — kitchen-living area, 2 bedrooms, 2 bathrooms, private terrace 53 m². V2 (Level 2): 77.32 m² — kitchen-living area, 2 bedrooms, 2 bathrooms, private terrace 38 m². Stand-alone villa with two residences, both offering unobstructed lake views and generous outdoor spaces."
        }
      ]
    },
    architecture: {
      title: "Architecture & Landscape",
      text:
        "The building’s terraced composition follows the natural slope of the land, ensuring every residence enjoys unobstructed views. Minimalist forms, panoramic glazing, and landscaped gardens merge to create a refined dialogue between architecture and nature."
    },
    amenities: {
      title: "Outdoor Spaces",
      text:
        "The residents’ outdoor amenities include a landscaped garden and a serene pool area with sun loungers — a perfect place to swim, sunbathe, and enjoy the breathtaking views of Lake Como in complete privacy."
    },
    location: {
      title: "Location",
      text:
        "Located on the western shore of Lake Como in Argegno, CLV Residents is moments away from the historic town center and the Swiss border. Stroll along the lakeside promenade, enjoy local cafés, or embark on a ferry — all just steps from your home."
    },
    progress: {
      title: "Project Progress",
      text:
        "CLV Residents is currently under development. Renderings shown are for illustrative purposes only and may be subject to subtle refinements during construction, without altering the essence of the project."
    },
    faq: {
      title: "FAQ",
      questions: [
        {
          q: "What does the development include?",
          a: "Covered parking, landscaped gardens, outdoor pool with sun loungers."
        },
        {
          q: "Will every residence have lake views?",
          a: "Yes — all homes are oriented to maximize panoramic views."
        },
        {
          q: "Where is it located?",
          a: "Argegno, western shore of Lake Como."
        },
        {
          q: "Is this a sales site?",
          a: "No — this is an informational presentation of the project’s concept and key features."
        }
      ]
    },
    contacts: {
      title: "Contacts",
      text:
        "For partnership, press, or institutional inquiries: (Contact form placeholder — will be activated in the next release.)"
    }
  },
  it: {} // итальянский добавим позже
};

// Два экспорта — чтобы точно совпасть с импортом в App.jsx
export default translations;
