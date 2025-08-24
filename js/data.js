// Destinations Data
const destinations = [
  {
    id: 1,
    name: 'Paris, France',
    image: 'paristour.jpg',
    price: 899,
    duration: '7 days',
    rating: 4.8,
    reviews: 1245
  },
  {
    id: 2,
    name: 'Tokyo, Japan',
    image: 'tokyo.webp',
    price: 1299,
    duration: '10 days',
    rating: 4.9,
    reviews: 987
  },
  {
    id: 3,
    name: 'New York, USA',
    image: 'newyork.webp',
    price: 1099,
    duration: '5 days',
    rating: 4.7,
    reviews: 1567
  },
  {
    id: 4,
    name: 'Sydney, Australia',
    image: 'sydney.webp',
    price: 1599,
    duration: '12 days',
    rating: 4.9,
    reviews: 876
  },
  {
    id: 5,
    name: 'Istanbul, Turkey',
    image: 'turkeytour.jpg',
    price: 699,
    duration: '6 days',
    rating: 4.6,
    reviews: 765
  },
  {
    id: 6,
    name: 'London, UK',
    image: 'london.webp',
    price: 799,
    duration: '5 days',
    rating: 4.7,
    reviews: 1432
  }
];

// Airports (Asia-focused)
const airports = [
  { code: 'DXB', name: 'Dubai International Airport', city: 'Dubai', country: 'UAE', lat: 25.2532, lng: 55.3657 },
  { code: 'DOH', name: 'Hamad International Airport', city: 'Doha', country: 'Qatar', lat: 25.2736, lng: 51.6081 },
  { code: 'MCT', name: 'Muscat International Airport', city: 'Muscat', country: 'Oman', lat: 23.5933, lng: 58.2844 },
  { code: 'DEL', name: 'Indira Gandhi International', city: 'Delhi', country: 'India', lat: 28.5562, lng: 77.1000 },
  { code: 'BOM', name: 'Chhatrapati Shivaji Intl', city: 'Mumbai', country: 'India', lat: 19.0896, lng: 72.8656 },
  { code: 'MAA', name: 'Chennai International', city: 'Chennai', country: 'India', lat: 12.9941, lng: 80.1709 },
  { code: 'KHI', name: 'Jinnah International', city: 'Karachi', country: 'Pakistan', lat: 24.9065, lng: 67.1608 },
  { code: 'LHE', name: 'Allama Iqbal Intl', city: 'Lahore', country: 'Pakistan', lat: 31.5216, lng: 74.4036 },
  { code: 'ISB', name: 'Islamabad Intl', city: 'Islamabad', country: 'Pakistan', lat: 33.5607, lng: 72.8516 },
  { code: 'BKK', name: 'Suvarnabhumi Airport', city: 'Bangkok', country: 'Thailand', lat: 13.6900, lng: 100.7501 },
  { code: 'SIN', name: 'Changi Airport', city: 'Singapore', country: 'Singapore', lat: 1.3644, lng: 103.9915 },
  { code: 'KUL', name: 'Kuala Lumpur Intl', city: 'Kuala Lumpur', country: 'Malaysia', lat: 2.7456, lng: 101.7072 },
  { code: 'MNL', name: 'Ninoy Aquino Intl', city: 'Manila', country: 'Philippines', lat: 14.5086, lng: 121.0198 },
  { code: 'TPE', name: 'Taoyuan International', city: 'Taipei', country: 'Taiwan', lat: 25.0777, lng: 121.2328 },
  { code: 'HKG', name: 'Hong Kong International', city: 'Hong Kong', country: 'Hong Kong', lat: 22.3080, lng: 113.9185 },
  { code: 'PEK', name: 'Beijing Capital Intl', city: 'Beijing', country: 'China', lat: 40.0799, lng: 116.6031 },
  { code: 'ICN', name: 'Incheon International', city: 'Seoul', country: 'South Korea', lat: 37.4602, lng: 126.4407 },
  { code: 'NRT', name: 'Narita International', city: 'Tokyo', country: 'Japan', lat: 35.7730, lng: 140.3929 },
  { code: 'HND', name: 'Haneda Airport', city: 'Tokyo', country: 'Japan', lat: 35.5494, lng: 139.7798 },
  { code: 'JED', name: 'King Abdulaziz Intl', city: 'Jeddah', country: 'Saudi Arabia', lat: 21.6702, lng: 39.1528 },
  { code: 'RUH', name: 'King Khalid Intl', city: 'Riyadh', country: 'Saudi Arabia', lat: 24.9576, lng: 46.6988 }
];

// Tour Packages Data
const packages = [
  {
    id: 101,
    title: 'Dubai City Escape',
    image: 'dubai.webp',
    days: '5 Days • 4 Nights',
    price: 799,
    currency: 'USD',
    description: 'Discover Dubai with city tours, desert safari, and luxury shopping experiences.',
    inclusions: ['Return Flights', '4N Hotel', 'Breakfast', 'Desert Safari', 'City Tour'],
    highlights: ['Burj Khalifa', 'Desert Safari', 'Dubai Mall', 'Dhow Cruise']
  },
  {
    id: 102,
    title: 'Colombia Adventure',
    image: 'columbia.jpg',
    days: '7 Days • 6 Nights',
    price: 1099,
    currency: 'USD',
    description: 'Explore Bogotá, Medellín, and Cartagena with guided tours and cultural experiences.',
    inclusions: ['Return Flights', '6N Hotel', 'Breakfast', 'City Tours'],
    highlights: ['Bogotá', 'Medellín', 'Cartagena', 'Beaches']
  },
  {
    id: 103,
    title: 'Baku & The Caspian',
    image: 'baku.webp',
    days: '4 Days • 3 Nights',
    price: 699,
    currency: 'USD',
    description: 'Experience Baku’s modern skyline and historic old city with seaside walks.',
    inclusions: ['Return Flights', '3N Hotel', 'Breakfast', 'Old City Tour'],
    highlights: ['Flame Towers', 'Old City', 'Caspian Boulevard']
  },
  {
    id: 104,
    title: 'Paris Highlights',
    image: 'paristour.jpg',
    days: '6 Days • 5 Nights',
    price: 999,
    currency: 'USD',
    description: 'Romantic city tours, Louvre visit, Seine cruise, and charming neighborhoods.',
    inclusions: ['Return Flights', '5N Hotel', 'Breakfast', 'City Pass'],
    highlights: ['Eiffel Tower', 'Louvre', 'Seine Cruise', 'Montmartre']
  },
  {
    id: 105,
    title: 'Tokyo Tech & Tradition',
    image: 'tokyo2.jpg',
    days: '7 Days • 6 Nights',
    price: 1399,
    currency: 'USD',
    description: 'From Akihabara to ancient temples, experience the best of Tokyo.',
    inclusions: ['Return Flights', '6N Hotel', 'Breakfast', 'Metro Card'],
    highlights: ['Senso-ji', 'Shibuya', 'Akihabara', 'Skytree']
  },
  {
    id: 106,
    title: 'Istanbul Two Continents',
    image: 'istanbul.webp',
    days: '5 Days • 4 Nights',
    price: 849,
    currency: 'USD',
    description: 'Historic mosques, bazaars, and a cruise along the Bosphorus.',
    inclusions: ['Return Flights', '4N Hotel', 'Breakfast', 'Bosphorus Cruise'],
    highlights: ['Hagia Sophia', 'Blue Mosque', 'Grand Bazaar']
  },
  {
    id: 107,
    title: 'Sydney Coastal Escape',
    image: 'sydney.webp',
    days: '8 Days • 7 Nights',
    price: 1599,
    currency: 'USD',
    description: 'Beaches, harbors, and iconic landmarks of sunny Sydney.',
    inclusions: ['Return Flights', '7N Hotel', 'Breakfast', 'Harbour Cruise'],
    highlights: ['Opera House', 'Harbour Bridge', 'Bondi Beach']
  },
  {
    id: 108,
    title: 'London Royal Tour',
    image: 'london.webp',
    days: '6 Days • 5 Nights',
    price: 1049,
    currency: 'USD',
    description: 'Palaces, parks, and vibrant neighborhoods across London.',
    inclusions: ['Return Flights', '5N Hotel', 'Breakfast', 'Oyster Card'],
    highlights: ['Buckingham Palace', 'Tower Bridge', 'Covent Garden']
  }
];

// Services Data
const services = [
  {
    id: 1,
    icon: 'fas fa-plane',
    title: 'Flight Booking',
    description: 'Book domestic and international flights with the best prices and flexible options.'
  },
  {
    id: 2,
    icon: 'fas fa-hotel',
    title: 'Hotel Reservation',
    description: 'Find and book the perfect hotel for your stay with our wide range of options.'
  },
  {
    id: 3,
    icon: 'fas fa-umbrella-beach',
    title: 'Tour Packages',
    description: 'Discover amazing tour packages to the most beautiful destinations around the world.'
  },
  // {
  //   id: 4,
  //   icon: 'fas fa-car',
  //   title: 'Car Rental',
  //   description: 'Rent a car for your travels and explore at your own pace with our reliable services.'
  // }
];

// Reviews Data
const reviews = [
  {
    id: 1,
    name: 'John Smith',
    location: 'New York, USA',
    image: 'londoneye.jpg',
    text: 'Amazing experience with SoulFly! The booking process was smooth and the customer service was exceptional.'
  },
  {
    id: 2,
    name: 'Emma Johnson',
    location: 'London, UK',
    image: 'paristour.jpg',
    text: 'Best travel agency I\'ve ever used. They took care of everything and made our vacation stress-free!'
  },
  // {
  //   id: 3,
  //   name: 'Carlos Rodriguez',
  //   location: 'Madrid, Spain',
  //   image: 'tokyo2.jpg',
  //   text: 'Professional service and great prices. Will definitely book with SoulFly again for my next trip.'
  // }
];

// Export the data
window.appData = {
  destinations,
  services,
  reviews,
  packages,
  airports
};
