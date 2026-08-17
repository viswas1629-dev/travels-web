
// ======================================================
// CLIENT SETTINGS — EDIT THESE DETAILS
// ======================================================
const SITE_CONFIG = {
  businessName: "Madurai Travelss",
  whatsappNumber: "916381793062", // Replace with client's WhatsApp number, country code + number, no +
  phone: "+91 99999 99999",
  email: "hello@maduraitravelss.com",
  location: "Madurai, Tamil Nadu, India",
  heroImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=85"
};

// ======================================================
// PACKAGE DATA — REPLACE WITH CLIENT'S REAL DETAILS
// ======================================================
const PACKAGES = [
  {
    id: "Trivandrum",
    name: "Madurai to Trivandrum",
    duration: "5 Days / 4 Nights",
    price: "Contact for Price",
    image: "https://media.istockphoto.com/id/113553219/photo/trivandrum-temple-kerala-india.jpg?s=612x612&w=0&k=20&c=aki61RESJLLOV-hqkk1jYg5_mLWIZim7GvtIudkYIrA=",
    short: "Explore Trivandrum’s rich culture, historic landmarks, beautiful beaches, and peaceful charm.",
    description: "Discover Trivandrum, Kerala’s charming capital, known for its beautiful beaches, historic landmarks, rich culture, and serene surroundings.",
    itinerary: [
      ["Day 01", "Madurai"],
      ["Day 02", "Rameswaram"],
      ["Day 03", "Kanyakumari"],
      ["Day 04", "Trivandrum"],
      ["Day 05", " Trivandrum Drop"]
    ],
    pickup: "Madurai",
    destination: "Trivandrum",
    vehicle: "Based on group size",
    inclusions: ["Travel assistance", "Sightseeing", "Accommodation"],
    exclusions: ["Personal expenses", "Additional activities", "Anything not mentioned"],
    notes: ["Final itinerary may be adjusted based on weather, road conditions and customer requirements."]
  },
  {
    id: "kodaikanal",
    name: "Kodaikanal Tour Package",
    duration: "2 Days / 1 Night",
    price: "Contact for Price",
    image: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=1000&q=85",
    short: "Enjoy the cool climate, scenic viewpoints, lake and natural beauty of Kodaikanal.",
    description: "A compact getaway to Kodaikanal for families, couples and small groups looking for a refreshing hill-station experience.",
    itinerary: [
      ["Day 01", "Arrival and local sightseeing around Kodaikanal."],
      ["Day 02", "Morning sightseeing, checkout and return journey."]
    ],
    pickup: "Madurai",
    destination: "Kodaikanal",
    vehicle: "Based on group size",
    inclusions: ["Travel assistance", "Sightseeing", "Accommodation"],
    exclusions: ["Personal expenses", "Additional activities", "Anything not mentioned"],
    notes: ["Final itinerary may be adjusted according to weather and road conditions."]
  },
  {
    id: "munnar",
    name: "Munnar Tour Package",
    duration: "3 Days / 2 Nights",
    price: "Contact for Price",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=85",
    short: "Discover tea estates, misty mountains and peaceful viewpoints in Munnar.",
    description: "A scenic Munnar trip designed around nature, comfortable travel and popular sightseeing experiences.",
    itinerary: [
      ["Day 01", "Journey to Munnar and arrival."],
      ["Day 02", "Full-day local sightseeing."],
      ["Day 03", "Final sightseeing, checkout and return journey."]
    ],
    pickup: "Madurai",
    destination: "Munnar",
    vehicle: "Based on group size",
    inclusions: ["Travel assistance", "Sightseeing", "Accommodation"],
    exclusions: ["Personal expenses", "Additional activities", "Anything not mentioned"],
    notes: ["Exact sightseeing order can be modified based on conditions and customer preferences."]
  },
  {
    id: "madurai",
    name: "Madurai Local Package",
    duration: "1 Day",
    price: "Contact for Price",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=85",
    short: "Explore Madurai's cultural highlights and local attractions with comfortable travel.",
    description: "A simple local sightseeing option for visitors who want to explore important places in and around Madurai.",
    itinerary: [
      ["Day 01", "Pickup, local sightseeing and drop-off."]
    ],
    pickup: "Madurai",
    destination: "Madurai",
    vehicle: "Based on group size",
    inclusions: ["Travel assistance", "Local sightseeing"],
    exclusions: ["Personal expenses", "Entry tickets", "Anything not mentioned"],
    notes: ["Temple and attraction entry rules should be confirmed before travel."]
  }
];

// ======================================================
// HOTEL DATA — DEFAULT PLACEHOLDERS FOR CLIENT EDIT
// ======================================================
const HOTELS = [
  {
    id: "hotel-1",
    name: "Madurai Comfort Stay",
    location: "Madurai, Tamil Nadu",
    room: "Standard & Family Rooms",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=85",
    facilities: ["Wi-Fi", "Air Conditioning", "Family-friendly rooms"],
    description: "Default placeholder hotel listing. Replace this information with the client's actual partner hotel details."
  },
  {
    id: "hotel-2",
    name: "Madurai City Hotel",
    location: "Madurai, Tamil Nadu",
    room: "Deluxe & Family Rooms",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1000&q=85",
    facilities: ["Wi-Fi", "Air Conditioning", "Convenient location"],
    description: "Default placeholder hotel listing. Replace this information with the client's actual partner hotel details."
  }
];

// ======================================================
// TAXI DATA — DEFAULT PLACEHOLDER
// ======================================================
const TAXI_SERVICES = [
  { title: "Local Taxi", text: "Comfortable local travel within Madurai and nearby areas." },
  { title: "Outstation Taxi", text: "One-way and round-trip travel for outstation destinations." },
  { title: "Airport Transfer", text: "Pickup and drop services for airport travel." },
  { title: "Group Travel", text: "Vehicle options can be arranged based on group size." }
];
