import { StateData } from './types';

export const APP_NAME = "LD Vacation";
export const CONTACT_PHONE = "+91-8825503141";

export interface TravelPackage {
  id: string;
  title: string;
  duration: string;
  price: string;
  image: string;
  features: string[]; // Highlight features for the card
  description: string; // Detailed overview
  itinerary: { day: string; title: string; activities: string[] }[];
  inclusions: string[];
  exclusions: string[];
}

export const COIMBATORE_PACKAGES: TravelPackage[] = [
  {
    id: 'ooty-pkg',
    title: 'Ooty - Queen of Hills Special',
    duration: '2 Days / 1 Night',
    price: '₹8,500 per couple',
    image: '/images/destinations/ooty.jpg',
    features: ['Private Cab from Coimbatore', 'Resort Stay with Breakfast', 'Botanical Garden & Lake', 'Doddabetta Peak Visit'],
    description: "Escape to the cool blue hills of the Nilgiris with our exclusive Ooty couple's package. Starting from Coimbatore, this 2-day trip covers the most scenic spots of Ooty. Enjoy a comfortable stay, private transportation, and the romantic misty weather of the Queen of Hill Stations.",
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Sightseeing",
        activities: [
          "Pick up from Coimbatore (Airport/Railway Station/Home).",
          "Scenic drive to Ooty via Mettupalayam.",
          "Check-in at the resort and freshen up.",
          "Visit Ooty Botanical Gardens and Rose Garden.",
          "Evening boat ride at Ooty Lake.",
          "Overnight stay at Ooty."
        ]
      },
      {
        day: "Day 2",
        title: "Peaks & Departure",
        activities: [
          "Breakfast at the resort.",
          "Visit Doddabetta Peak for panoramic views.",
          "Explore the Tea Factory and Chocolate Museum.",
          "Stop at Coonoor (Sim's Park & Dolphin's Nose) on the way back.",
          "Drop off at Coimbatore."
        ]
      }
    ],
    inclusions: ["Private Sedan Cab (Coimbatore to Coimbatore)", "1 Night Accommodation for Couple", "Breakfast", "Driver Bata, Tolls, and Parking"],
    exclusions: ["Lunch and Dinner", "Entry tickets to monuments/parks", "Personal expenses"]
  },
  {
    id: 'valparai-pkg',
    title: 'Valparai & Athirapally Escape',
    duration: '2 Days / 1 Night',
    price: '₹9,500 per couple',
    image: '/images/destinations/munnar.jpg', // Using Munnar as generic tea garden image
    features: ['Scenic Drive via Pollachi', 'Sholayar Dam', 'Athirapally Waterfalls', 'Tea Estate Stay'],
    description: "Experience the untouched beauty of Valparai and the majestic Athirapally waterfalls (often called the Niagara of India). This package offers a drive through the Anamalai Tiger Reserve, 40 hairpin bends, and lush green tea estates.",
    itinerary: [
      {
        day: "Day 1",
        title: "Into the Wild",
        activities: [
          "Pick up from Coimbatore.",
          "Drive via Pollachi and Aliyar Dam.",
          "Experience the thrill of 40 Hairpin Bends.",
          "Visit Loam's View Point and Carver Marsh Statue.",
          "Check-in at Valparai Tea Estate Bungalow/Resort.",
          "Evening visit to Koolangal River."
        ]
      },
      {
        day: "Day 2",
        title: "Dams & Waterfalls",
        activities: [
          "Morning drive to Sholayar Dam (Asia's second deepest dam).",
          "Proceed to Athirapally Waterfalls in Kerala.",
          "Enjoy the spectacular view of the falls.",
          "Return drive to Coimbatore."
        ]
      }
    ],
    inclusions: ["Private Cab for 2 days", "Accommodation in Valparai", "Breakfast", "Sightseeing as per itinerary"],
    exclusions: ["Entry fees", "Meals not mentioned", "Forest entry charges if applicable"]
  },
  {
    id: 'isha-pkg',
    title: 'Coimbatore Spiritual Day Trip',
    duration: '1 Day',
    price: '₹3,500 (Sedan Cab)',
    image: '/images/destinations/shiva.jpg', 
    features: ['Pick up & Drop', 'Adiyogi (Isha Yoga)', 'Marudhamalai Temple', 'Perur Temple'],
    description: "A customized spiritual journey covering the most powerful temples in and around Coimbatore. Visit the magnificent 112-ft Adiyogi Shiva statue and the ancient Marudhamalai Murugan temple on this hassle-free day trip.",
    itinerary: [
      {
        day: "Day 1",
        title: "Temple Tour",
        activities: [
          "8:00 AM: Pick up from residence/hotel in Coimbatore.",
          "Visit Perur Pateeswarar Temple (Ancient Shiva temple).",
          "Drive to Marudhamalai Murugan Temple (Hill temple).",
          "Lunch break (Vegetarian restaurant recommendations provided).",
          "Afternoon drive to Isha Yoga Center.",
          "Visit Dhyanalinga, Linga Bhairavi, and Adiyogi Statue.",
          "Witness the Adiyogi Divya Darshanam (Laser show) if timing permits.",
          "Drop back at Coimbatore location."
        ]
      }
    ],
    inclusions: ["AC Sedan Cab Rent", "Driver Allowance", "Parking Fees", "Fuel"],
    exclusions: ["Food and Beverages", "Special Darshan tickets"]
  },
  {
    id: 'kodai-pkg',
    title: 'Kodaikanal Misty Retreat',
    duration: '3 Days / 2 Nights',
    price: '₹12,500 per couple',
    image: '/images/destinations/kodaikanal.jpg',
    features: ['Lake View Room', 'Coakers Walk & Guna Caves', 'Pillar Rocks', 'Campfire & Dinner'],
    description: "Relax in the Princess of Hill Stations. Our 3-day Kodaikanal package allows you to explore the misty cliffs, lakes, and forests at a leisurely pace. Perfect for honeymooners and families looking to unwind.",
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Kodai",
        activities: [
          "Pick up from Coimbatore.",
          "Drive to Kodaikanal via Palani route.",
          "Visit Silver Cascade Falls en route.",
          "Check-in at hotel near the lake.",
          "Evening walk at Coaker's Walk and Bryant Park."
        ]
      },
      {
        day: "Day 2",
        title: "Sightseeing",
        activities: [
          "Visit Moir Point, Guna Caves (Devil's Kitchen).",
          "View the majestic Pillar Rocks.",
          "Pine Forest photo stop.",
          "Shopping for homemade chocolates and eucalyptus oil."
        ]
      },
      {
        day: "Day 3",
        title: "Leisure & Return",
        activities: [
          "Morning boating at Kodaikanal Lake.",
          "Visit Kurinji Andavar Temple.",
          "Depart for Coimbatore.",
          "Drop off at Airport/Station."
        ]
      }
    ],
    inclusions: ["Transportation by AC Cab", "2 Nights Stay", "Breakfasts", "Driver Charges"],
    exclusions: ["Boating charges", "Entry fees", "Lunch & Dinner"]
  },
  {
    id: 'munnar-pkg',
    title: 'Munnar Tea Garden Tour',
    duration: '3 Days / 2 Nights',
    price: '₹13,500 per couple',
    image: '/images/destinations/munnar.jpg',
    features: ['AC Cab from Coimbatore', 'Tea Museum & Mattupetty Dam', 'Eravikulam Park', 'Flower Garden'],
    description: "Immerse yourself in the rolling green hills of Munnar. This package takes you from Coimbatore to Kerala's most loved hill station. Experience the aroma of fresh tea, misty mountains, and serene lakes.",
    itinerary: [
      {
        day: "Day 1",
        title: "Drive to Munnar",
        activities: [
          "Pick up from Coimbatore.",
          "Scenic drive through Chinnar Wildlife Sanctuary.",
          "Visit Lakkam Waterfalls.",
          "Check-in at Munnar resort.",
          "Leisure time."
        ]
      },
      {
        day: "Day 2",
        title: "Munnar Exploration",
        activities: [
          "Visit Eravikulam National Park (Rajamalai).",
          "Tea Museum visit.",
          "Mattupetty Dam and Echo Point.",
          "Rose Garden & Photo Point.",
          "Overnight stay."
        ]
      },
      {
        day: "Day 3",
        title: "Return Journey",
        activities: [
          "Breakfast at hotel.",
          "Optional spice garden visit.",
          "Drive back to Coimbatore via Udumalpet.",
          "Drop at your location."
        ]
      }
    ],
    inclusions: ["Private Cab", "Accommodation", "Breakfast", "Inter-state permit taxes"],
    exclusions: ["Park entry fees", "Safari charges", "Meals"]
  },
  {
    id: 'wayanad-pkg',
    title: 'Wayanad Nature Exploration',
    duration: '3 Days / 2 Nights',
    price: '₹14,500 per couple',
    image: '/images/destinations/wayanad.jpg', 
    features: ['Edakkal Caves', 'Banasura Sagar Dam', 'Wildlife Safari', 'Soochipara Waterfalls'],
    description: "Discover the green paradise of Wayanad. Trek to prehistoric caves, visit India's largest earth dam, and enjoy the wildlife. A perfect blend of adventure and nature starting from Coimbatore.",
    itinerary: [
      {
        day: "Day 1",
        title: "Journey to Wayanad",
        activities: [
          "Start from Coimbatore early morning.",
          "Drive via Gudallur.",
          "Visit Edakkal Caves (trekking required).",
          "Check-in at Wayanad resort.",
        ]
      },
      {
        day: "Day 2",
        title: "Wayanad Wonders",
        activities: [
          "Visit Banasura Sagar Dam (Speed boating optional).",
          "Karlad Lake adventure activities.",
          "Pookode Lake.",
          "Lakkidi View Point."
        ]
      },
      {
        day: "Day 3",
        title: "Falls & Wildlife",
        activities: [
          "Visit Soochipara or Meenmutty Waterfalls.",
          "Drive through Muthanga Wildlife Sanctuary.",
          "Return to Coimbatore."
        ]
      }
    ],
    inclusions: ["Cab from Coimbatore", "Stay for 2 nights", "Breakfast", "Kerala Permit fees"],
    exclusions: ["Entry tickets", "Jeep safari cost", "All meals other than breakfast"]
  }
];

export const STATES_DATA: StateData[] = [
  {
    id: 'tn',
    name: 'Tamil Nadu',
    imageSeed: 'tamilnadu',
    destinations: [
      {
        id: 'chennai',
        name: 'Chennai',
        description: 'Discover Chennai — a blend of beaches, temples, colonial history, street food, and shopping.',
        imageSeed: 'chennai',
        details: {
          about: "Chennai, the bustling capital of Tamil Nadu, serves as the gateway to South India. A city where tradition meets modernity, Chennai is renowned for its deep-rooted cultural heritage, classical music, and dance forms like Bharatanatyam. From the golden sands of Marina Beach—the second longest urban beach in the world—to the magnificent Dravidian architecture of the Kapaleeshwarar Temple, every corner of the city tells a story.\n\nFormerly known as Madras, the city retains its colonial charm through landmarks like Fort St. George and the San Thome Basilica. Visitors can explore vibrant markets in T. Nagar, indulge in authentic South Indian filter coffee, and experience the warmth of its people. Whether you are a history buff, a spiritual seeker, or a beach lover, Chennai offers a diverse and enriching experience.",
          bestTime: "November to February is the best time to visit Chennai as the weather is pleasant and comfortable for sightseeing.",
          howToReach: "**By Air:** Chennai International Airport (MAA) connects to major global and domestic cities.\n**By Train:** Chennai Central (MAS) and Egmore (MS) are major railway hubs.\n**By Bus:** Excellent connectivity via the Mofussil Bus Terminus (CMBT)."
        },
        places: [
          { id: 'marina', name: 'Marina Beach', imageSeed: 'marina-beach' },
          { id: 'kapaleeshwarar', name: 'Kapaleeshwarar Temple', imageSeed: 'temple-tn' },
          { id: 'museum', name: 'Government Museum', imageSeed: 'museum' },
          { id: 'vgp', name: 'VGP Universal Kingdom', imageSeed: 'theme-park' },
          { id: 'santhome', name: 'San Thome Basilica', imageSeed: 'church-basilica' },
          { id: 'fort-st-george', name: 'Fort St. George', imageSeed: 'fort-colonial' },
          { id: 'guindy-park', name: 'Guindy National Park', imageSeed: 'forest-park' },
          { id: 'elliots-beach', name: "Elliot's Beach (Besant Nagar)", imageSeed: 'beach-calm' },
          { id: 'valluvar-kottam', name: 'Valluvar Kottam', imageSeed: 'monument-chariot' },
          { id: 'dakshinachitra', name: 'DakshinaChitra', imageSeed: 'cultural-village' },
          { id: 'vandalur-zoo', name: 'Arignar Anna Zoo', imageSeed: 'zoo-animals' },
          { id: 'birla-planetarium', name: 'Birla Planetarium', imageSeed: 'planetarium' },
          { id: 'queens-land', name: 'Queens Land', imageSeed: 'theme-park-rides' },
          { id: 'mgr-memorial', name: 'MGR Memorial', imageSeed: 'memorial-park' },
          { id: 'semmozhi-poonga', name: 'Semmozhi Poonga', imageSeed: 'botanical-garden' }
        ]
      },
      {
        id: 'mahabalipuram',
        name: 'Mahabalipuram',
        description: 'UNESCO heritage carved in stone. Perfect for history lovers and architecture fans.',
        imageSeed: 'mahabalipuram',
        details: {
          about: "Mahabalipuram (Mamallapuram) is a historic town on a strip of land between the Bay of Bengal and the Great Salt Lake. It is famous for its temples and rock-cut caves built by the Pallava dynasty in the 7th and 8th centuries. The town is a UNESCO World Heritage Site and is known for its exquisite stone carvings and monolithic structures.\n\nVisitors can marvel at the Shore Temple, standing resilient against the sea, and the Five Rathas, monolithic chariots carved from single rocks. The giant open-air rock relief, Arjuna's Penance, depicts scenes from the Mahabharata with incredible detail. Beyond history, it’s a great spot for surfers and those looking to relax by the beach.",
          bestTime: "October to March is ideal, avoiding the humid summer months.",
          howToReach: "**By Air:** Chennai Airport (60km away).\n**By Train:** Chengalpattu (29km) is the nearest station.\n**By Bus:** Regular buses available from Chennai and Pondicherry."
        },
        places: [
          { id: 'shore-temple', name: 'Shore Temple', imageSeed: 'shore-temple' },
          { id: 'arjuna', name: "Arjuna's Penance", imageSeed: 'stone-carving' },
          { id: 'five-rathas', name: 'Five Rathas', imageSeed: 'rathas' },
          { id: 'butterball', name: "Krishna's Butterball", imageSeed: 'boulder' },
          { id: 'tiger-cave', name: 'Tiger Cave', imageSeed: 'cave-rock' },
          { id: 'croc-bank', name: 'Crocodile Bank', imageSeed: 'crocodile' },
          { id: 'seashell-museum', name: 'India Seashell Museum', imageSeed: 'seashells' },
          { id: 'mahabs-beach', name: 'Mahabalipuram Beach', imageSeed: 'beach-waves' },
          { id: 'lighthouse', name: 'Mahabalipuram Lighthouse', imageSeed: 'lighthouse-view' },
          { id: 'thirukadalmallai', name: 'Thirukadalmallai Temple', imageSeed: 'temple-ancient' },
          { id: 'descent-ganges', name: 'Descent of the Ganges', imageSeed: 'rock-relief' }
        ]
      },
      {
        id: 'madurai',
        name: 'Madurai',
        description: 'The soul of Tamil Nadu, home to the magnificent Meenakshi Amman Temple.',
        imageSeed: 'madurai',
        details: {
          about: "Madurai, one of the oldest continuously inhabited cities in the world, is the cultural capital of Tamil Nadu. Dominating the skyline is the colossal Meenakshi Amman Temple, a masterpiece of Dravidian architecture with its towering gopurams covered in thousands of colorful statues. The city is also known as the 'City of Junctions', 'City of Jasmine', and 'City that never sleeps'.\n\nWalking through the bustling streets around the temple, you can smell the fragrance of fresh jasmine and taste the famous Jigarthanda drink. The Thirumalai Nayakkar Palace showcases a fusion of Dravidian and Islamic architectural styles. Madurai offers a deep dive into the history, art, and spirituality of South India.",
          bestTime: "October to March offers pleasant weather for temple visits.",
          howToReach: "**By Air:** Madurai International Airport connects to major cities.\n**By Train:** Madurai Junction is a major railway hub.\n**By Road:** Well connected by national highways."
        },
        places: [
          { id: 'meenakshi', name: 'Meenakshi Temple', imageSeed: 'meenakshi' },
          { id: 'palace', name: 'Thirumalai Nayakkar Palace', imageSeed: 'palace-madurai' },
          { id: 'gandhi', name: 'Gandhi Museum', imageSeed: 'museum-gandhi' },
          { id: 'alagar-koyil', name: 'Alagar Koyil', imageSeed: 'hill-temple' },
          { id: 'pazhamudhir', name: 'Pazhamudhir Solai', imageSeed: 'temple-murugan' },
          { id: 'teppakulam', name: 'Mariamman Teppakulam', imageSeed: 'temple-tank' },
          { id: 'samanar-hills', name: 'Samanar Hills', imageSeed: 'jain-caves' },
          { id: 'koodal-azhagar', name: 'Koodal Azhagar Temple', imageSeed: 'temple-vibrant' },
          { id: 'thiruparankundram', name: 'Thiruparankundram', imageSeed: 'rock-temple' },
          { id: 'athisayam', name: 'Athisayam Theme Park', imageSeed: 'water-park' },
          { id: 'vaigai-dam', name: 'Vaigai Dam', imageSeed: 'dam-scenic' }
        ]
      },
      {
        id: 'ooty',
        name: 'Ooty',
        description: 'Queen of Hill Stations - rolling tea gardens and cool misty weather.',
        imageSeed: 'ooty',
        details: {
            about: "Udhagamandalam, popularly known as Ooty, is the 'Queen of Hill Stations' nestled in the Nilgiri Hills. It is famous for its rolling tea gardens, colonial-era bungalows, and the heritage Nilgiri Mountain Railway. The cool climate and scenic beauty make it a top favorite for honeymooners and families alike.\n\nKey attractions include the Ooty Lake where you can enjoy boating, and the Botanical Gardens which host a vibrant flower show. A ride on the toy train offers breathtaking views of steep curves and dark tunnels. Don't miss trying the homemade chocolates and fresh tea that Ooty is famous for.",
            bestTime: "Year-round destination, but April to June and September to November are most popular.",
            howToReach: "**By Air:** Coimbatore Airport (88km).\n**By Train:** Mettupalayam station connects to the Toy Train.\n**By Road:** Scenic drive from Coimbatore or Bangalore."
        },
        places: [
          { id: 'ooty-lake', name: 'Ooty Lake', imageSeed: 'lake-boat' },
          { id: 'botanical', name: 'Botanical Garden', imageSeed: 'garden-flowers' },
          { id: 'doddabetta', name: 'Doddabetta Peak', imageSeed: 'mountain-peak' },
          { id: 'rose-garden', name: 'Rose Garden', imageSeed: 'rose-garden' },
          { id: 'pykara', name: 'Pykara Waterfalls', imageSeed: 'waterfall-lake' },
          { id: 'emerald-lake', name: 'Emerald Lake', imageSeed: 'emerald-lake' },
          { id: 'toy-train', name: 'Nilgiri Mountain Railway', imageSeed: 'toy-train' },
          { id: 'tea-factory', name: 'Tea Factory', imageSeed: 'tea-factory' },
          { id: 'avalanche', name: 'Avalanche Lake', imageSeed: 'forest-lake' },
          { id: 'wax-world', name: 'Wax World Museum', imageSeed: 'wax-museum' },
          { id: 'thread-garden', name: 'Thread Garden', imageSeed: 'art-garden' },
          { id: 'kamaraj-sagar', name: 'Kamaraj Sagar Dam', imageSeed: 'dam-picnic' },
          { id: 'elk-hill', name: 'Elk Hill Murugan Temple', imageSeed: 'temple-hilltop' }
        ]
      },
      {
        id: 'kodaikanal',
        name: 'Kodaikanal',
        description: 'Princess of Hill Stations - misty cliffs, star-shaped lake, and pine forests.',
        imageSeed: 'kodaikanal',
        details: {
            about: "Kodaikanal is a serene hill station in Tamil Nadu, often referred to as the 'Princess of Hill Stations'. Centered around the star-shaped man-made Kodaikanal Lake, the town is known for its granite cliffs, forested valleys, lakes, waterfalls, and grassy hills. It provides a perfect escape from the heat of the plains.\n\nVisitors can walk along Coaker's Walk for panoramic views, explore the Guna Caves, or relax at Bryant Park. The Pillar Rocks stand tall as guardians of the valley. The misty weather and pine forests create a magical atmosphere perfect for relaxation and nature walks.",
            bestTime: "October to March is refreshing; April to June is peak season.",
            howToReach: "**By Air:** Madurai Airport (120km).\n**By Train:** Kodai Road (80km) is the nearest station.\n**By Road:** Steep but scenic drive from Batlagundu."
        },
        places: [
          { id: 'kodai-lake', name: 'Kodaikanal Lake', imageSeed: 'lake-mist' },
          { id: 'pillar-rocks', name: 'Pillar Rocks', imageSeed: 'pillar-rocks' },
          { id: 'coakers-walk', name: "Coaker's Walk", imageSeed: 'mountain-path' },
          { id: 'bryant-park', name: 'Bryant Park', imageSeed: 'flowers-park' },
          { id: 'silver-cascade', name: 'Silver Cascade Falls', imageSeed: 'waterfall-high' },
          { id: 'bear-shola', name: 'Bear Shola Falls', imageSeed: 'forest-waterfall' },
          { id: 'green-valley', name: 'Green Valley View', imageSeed: 'valley-view' },
          { id: 'guna-caves', name: 'Guna Caves', imageSeed: 'caves-forest' },
          { id: 'berijam', name: 'Berijam Lake', imageSeed: 'lake-forest' },
          { id: 'kurinji', name: 'Kurinji Andavar Temple', imageSeed: 'temple-hills' },
          { id: 'dolphins-nose', name: "Dolphin's Nose", imageSeed: 'cliff-edge' },
          { id: 'solar-observatory', name: 'Solar Observatory', imageSeed: 'observatory' },
          { id: 'silent-valley', name: 'Silent Valley View', imageSeed: 'valley-green' }
        ]
      },
      {
        id: 'ramanathapuram',
        name: 'Ramanathapuram (Rameswaram)',
        description: 'A spiritual journey to the island of Rameswaram, Pamban Bridge and Dhanushkodi.',
        imageSeed: 'rameswaram',
        details: {
            about: "Rameswaram, located in the Ramanathapuram district, is one of the holiest places in India. It is situated on Pamban Island and separated from mainland India by the Pamban channel. The Ramanathaswamy Temple, with its magnificent long corridors and 22 holy wells, is a major pilgrimage site.\n\nThe town is also famous for the Pamban Bridge, an engineering marvel, and the ghost town of Dhanushkodi at the tip of the island. Rameswaram holds a significant place in the epic Ramayana. It is a place where spirituality meets the raw beauty of the ocean.",
            bestTime: "October to April is cool and ideal for temple visits.",
            howToReach: "**By Air:** Madurai Airport (170km).\n**By Train:** Rameswaram station is well connected.\n**By Road:** Accessible via the spectacular Pamban Bridge."
        },
        places: [
          { id: 'ramanathaswamy', name: 'Ramanathaswamy Temple', imageSeed: 'temple-corridor' },
          { id: 'dhanushkodi', name: 'Dhanushkodi Beach', imageSeed: 'ruins-beach' },
          { id: 'pamban', name: 'Pamban Bridge', imageSeed: 'sea-bridge' },
          { id: 'kalam', name: 'Kalam Memorial', imageSeed: 'memorial' },
          { id: 'agnitheertham', name: 'Agnitheertham', imageSeed: 'sea-worship' },
          { id: 'ariyaman', name: 'Ariyaman Beach', imageSeed: 'beach-sand' },
          { id: 'hanuman-temple', name: 'Five-Faced Hanuman', imageSeed: 'temple-idol' },
          { id: 'gandhamadhana', name: 'Gandhamadhana Parvatham', imageSeed: 'hill-viewpoint' },
          { id: 'kothandaramaswamy', name: 'Kothandaramaswamy Temple', imageSeed: 'temple-island' },
          { id: 'kalam-house', name: 'House of Kalam', imageSeed: 'house-museum' }
        ]
      },
      {
        id: 'kanyakumari',
        name: 'Kanyakumari',
        description: 'The southern tip of India where three oceans meet.',
        imageSeed: 'kanyakumari',
        details: {
            about: "Kanyakumari is the southernmost tip of peninsular India, where the Bay of Bengal, the Arabian Sea, and the Indian Ocean converge. It is famous for its spectacular sunrises and sunsets, which can be viewed from the same spot. The Vivekananda Rock Memorial, situated on a rocky island off the coast, is a major attraction accessible by ferry.\n\nThe town has a spiritual vibe with the Kumari Amman Temple. The Thiruvalluvar Statue stands tall next to the memorial. Kanyakumari is not just a tourist spot but a symbol of unity and the end of the landmass, offering breathtaking ocean views.",
            bestTime: "October to March for the best weather and clear sunrise views.",
            howToReach: "**By Air:** Trivandrum International Airport (90km).\n**By Train:** Kanyakumari Junction is the southern terminus.\n**By Road:** Excellent highway connectivity from all major southern cities."
        },
        places: [
          { id: 'vivekananda', name: 'Vivekananda Rock', imageSeed: 'sea-rock' },
          { id: 'thiruvalluvar', name: 'Thiruvalluvar Statue', imageSeed: 'statue-sea' },
          { id: 'sunset', name: 'Sunset Point', imageSeed: 'sunset-ocean' },
          { id: 'kumari-amman', name: 'Kumari Amman Temple', imageSeed: 'temple-goddess' },
          { id: 'padmanabhapuram', name: 'Padmanabhapuram Palace', imageSeed: 'wooden-palace' },
          { id: 'vattakottai', name: 'Vattakottai Fort', imageSeed: 'seaside-fort' },
          { id: 'mathur', name: 'Mathur Aqueduct', imageSeed: 'bridge-aqueduct' },
          { id: 'gandhi-mandapam', name: 'Gandhi Mandapam', imageSeed: 'memorial-white' },
          { id: 'tsunami-monument', name: 'Tsunami Monument', imageSeed: 'statue-memorial' },
          { id: 'wax-museum', name: 'Wax Museum', imageSeed: 'museum-interior' },
          { id: 'ransom-church', name: 'Our Lady of Ransom Church', imageSeed: 'church-white' }
        ]
      }
    ]
  },
  {
    id: 'kl',
    name: 'Kerala',
    imageSeed: 'kerala',
    destinations: [
      {
        id: 'munnar',
        name: 'Munnar',
        description: 'Endless tea plantations and misty hills.',
        imageSeed: 'munnar',
        details: {
            about: "Munnar is a breathtaking hill station in Kerala's Idukki district, famous for its endless expanse of tea plantations. Situated at the confluence of three mountain streams, it was once the summer resort of the British administration in South India. The rolling hills, misty landscapes, and exotic flora make it a paradise for nature lovers.\n\nVisitors can explore the Eravikulam National Park to spot the endangered Nilgiri Tahr, visit the Tea Museum to learn about tea processing, or simply trek to Anamudi, the highest peak in South India. The cool climate and scenic beauty provide a refreshing escape.",
            bestTime: "September to March for pleasant weather.",
            howToReach: "**By Air:** Cochin International Airport (110km).\n**By Train:** Aluva (110km) or Ernakulam are nearest stations.\n**By Road:** Scenic winding roads from Kochi."
        },
        places: [
          { id: 'tea-estate', name: 'Tea Estates', imageSeed: 'tea-garden' },
          { id: 'top-station', name: 'Top Station', imageSeed: 'misty-hills' },
          { id: 'mattupetty', name: 'Mattupetty Dam', imageSeed: 'dam-water' },
          { id: 'eravikulam', name: 'Eravikulam National Park', imageSeed: 'wildlife-hills' },
          { id: 'echo-point', name: 'Echo Point', imageSeed: 'lake-echo' },
          { id: 'kundala', name: 'Kundala Lake', imageSeed: 'lake-pedal' },
          { id: 'tea-museum', name: 'Tea Museum', imageSeed: 'factory-tea' },
          { id: 'attukad', name: 'Attukad Waterfalls', imageSeed: 'waterfall-rocks' },
          { id: 'pothamedu', name: 'Pothamedu View Point', imageSeed: 'green-valley' },
          { id: 'blossom-park', name: 'Blossom Park', imageSeed: 'park-flowers' },
          { id: 'photo-point', name: 'Photo Point', imageSeed: 'tea-slope' },
          { id: 'lockhart', name: 'Lockhart Gap', imageSeed: 'mountain-pass' }
        ]
      },
      {
        id: 'alleppey',
        name: 'Alleppey',
        description: 'Venice of the East - Houseboats and backwaters.',
        imageSeed: 'alleppey',
        details: {
            about: "Alappuzha, or Alleppey, is known as the 'Venice of the East' due to its intricate network of canals, backwaters, beaches, and lagoons. It is the hub of Kerala's backwater tourism. A houseboat cruise through the calm waters, witnessing the rustic life of the villages along the banks, is the highlight of any trip here.\n\nApart from houseboats, Alleppey has a beautiful coastline with the historic Alappuzha Beach and its old pier. The annual Nehru Trophy Boat Race held on the Punnamada Lake attracts thousands of spectators. It is a destination of tranquility and scenic beauty.",
            bestTime: "November to February is ideal for houseboat stays.",
            howToReach: "**By Air:** Cochin International Airport (75km).\n**By Train:** Alappuzha Railway Station is within the city.\n**By Road:** Well connected to Kochi and Trivandrum."
        },
        places: [
          { id: 'houseboat', name: 'Backwater Houseboat', imageSeed: 'houseboat' },
          { id: 'alappuzha-beach', name: 'Alappuzha Beach', imageSeed: 'beach-sand' },
          { id: 'marari', name: 'Marari Beach', imageSeed: 'beach-palms' },
          { id: 'lighthouse', name: 'Alleppey Lighthouse', imageSeed: 'lighthouse' },
          { id: 'krishnapuram', name: 'Krishnapuram Palace', imageSeed: 'kerala-palace' },
          { id: 'pathiramanal', name: 'Pathiramanal Island', imageSeed: 'island-birds' },
          { id: 'ambalapuzha', name: 'Ambalapuzha Temple', imageSeed: 'temple-kerala' },
          { id: 'st-marys', name: "St. Mary's Forane Church", imageSeed: 'church-old' },
          { id: 'revi-museum', name: 'Revi Karunakaran Museum', imageSeed: 'museum-art' }
        ]
      },
      {
        id: 'kochi',
        name: 'Kochi',
        description: 'A vibrant city with colonial history and modern charm.',
        imageSeed: 'kochi',
        details: {
            about: "Kochi (Cochin) is a major port city on the south-west coast of India, often called the 'Queen of the Arabian Sea'. It is famous for its rolling tea gardens, colonial-era bungalows, and the heritage Nilgiri Mountain Railway. The cool climate and scenic beauty make it a top favorite for honeymooners and families alike.\n\nThe city is a melting pot of cultures and a hub for art, notably hosting the Kochi-Muziris Biennale. Modern Kochi is bustling with cafes, art galleries, and shopping malls, offering a perfect blend of the old and the new.",
            bestTime: "October to March is the best time to explore.",
            howToReach: "**By Air:** Cochin International Airport (CIAL).\n**By Train:** Ernakulam Junction and Town stations.\n**By Road:** Well connected hub in Kerala."
        },
        places: [
          { id: 'fort-kochi', name: 'Fort Kochi', imageSeed: 'colonial-street' },
          { id: 'nets', name: 'Chinese Fishing Nets', imageSeed: 'fishing-nets' },
          { id: 'mattancherry', name: 'Mattancherry Palace', imageSeed: 'dutch-palace' },
          { id: 'synagogue', name: 'Paradesi Synagogue', imageSeed: 'synagogue' },
          { id: 'marine-drive', name: 'Marine Drive', imageSeed: 'city-waterfront' },
          { id: 'hill-palace', name: 'Hill Palace Museum', imageSeed: 'museum-kerala' },
          { id: 'cherai', name: 'Cherai Beach', imageSeed: 'beach-sunset' },
          { id: 'wonderla', name: 'Wonderla Kochi', imageSeed: 'amusement-park' },
          { id: 'santa-cruz', name: 'Santa Cruz Basilica', imageSeed: 'cathedral' },
          { id: 'folklore-museum', name: 'Kerala Folklore Museum', imageSeed: 'heritage-building' },
          { id: 'bolgatty', name: 'Bolgatty Palace', imageSeed: 'island-palace' }
        ]
      }
    ]
  },
  {
    id: 'ka',
    name: 'Karnataka',
    imageSeed: 'karnataka',
    destinations: [
      {
        id: 'bengaluru',
        name: 'Bengaluru',
        description: 'The Garden City, a hub of parks and modern lifestyle.',
        imageSeed: 'bengaluru',
        details: {
            about: "Bengaluru, the capital of Karnataka, is known as the 'Silicon Valley of India' and the 'Garden City'. It is a dynamic city known for its pleasant year-round climate, lush parks like Cubbon Park and Lalbagh, and a vibrant pub culture. It balances its tech-driven modernity with a rich heritage seen in the Bangalore Palace and Tipu Sultan's Summer Palace.\n\nThe city offers a great lifestyle with high-end malls, street shopping at Brigade Road, and a thriving food scene ranging from darshinis serving idli-dosa to fine dining. It is a cosmopolitan hub that welcomes everyone.",
            bestTime: "Year-round, but October to February is most pleasant.",
            howToReach: "**By Air:** Kempegowda International Airport (BLR).\n**By Train:** KSR Bengaluru, Cantonment, and Yesvantpur stations.\n**By Road:** Major hub for buses in South India."
        },
        places: [
          { id: 'cubbon', name: 'Cubbon Park', imageSeed: 'park-trees' },
          { id: 'palace-b', name: 'Bangalore Palace', imageSeed: 'castle' },
          { id: 'lalbagh', name: 'Lalbagh Botanical Garden', imageSeed: 'glass-house' },
          { id: 'bannerghatta', name: 'Bannerghatta Bio Park', imageSeed: 'safari' },
          { id: 'iskcon', name: 'ISKCON Temple', imageSeed: 'temple-modern' },
          { id: 'vidhana-soudha', name: 'Vidhana Soudha', imageSeed: 'legislative-building' },
          { id: 'tipu-palace', name: "Tipu Sultan's Summer Palace", imageSeed: 'wooden-pillar' },
          { id: 'nandi-hills', name: 'Nandi Hills', imageSeed: 'hill-sunrise' },
          { id: 'ulsoor', name: 'Ulsoor Lake', imageSeed: 'lake-city' },
          { id: 'commercial-st', name: 'Commercial Street', imageSeed: 'shopping-street' },
          { id: 'st-marys', name: "St. Mary's Basilica", imageSeed: 'church-gothic' },
          { id: 'planetarium', name: 'Jawaharlal Nehru Planetarium', imageSeed: 'space-science' }
        ]
      },
      {
        id: 'coorg',
        name: 'Coorg',
        description: 'Scotland of India - coffee, hills, and waterfalls.',
        imageSeed: 'coorg',
        details: {
            about: "Coorg (Kodagu) is an enchanting hill station in Karnataka, often called the 'Scotland of India'. It is renowned for its misty landscapes, and rich culture. The aroma of coffee fills the air as you travel through its winding roads.\n\nMust-visit spots include the majestic Abbey Falls, the panoramic viewpoint at Raja's Seat, and the Dubare Elephant Camp. It is also a great place for trekking and white water rafting. Coorg offers a perfect retreat into nature's lap.",
            bestTime: "October to March is ideal for sightseeing.",
            howToReach: "**By Air:** Kannur (90km) or Mangalore (140km) airports.\n**By Train:** Mysore (120km) is the nearest major station.\n**By Road:** Scenic drive from Mysore or Bangalore."
        },
        places: [
          { id: 'abbey', name: 'Abbey Falls', imageSeed: 'waterfall' },
          { id: 'rajas', name: "Raja's Seat", imageSeed: 'valley-view' },
          { id: 'dubare', name: 'Dubare Elephant Camp', imageSeed: 'elephants-river' },
          { id: 'talakaveri', name: 'Talakaveri', imageSeed: 'temple-hills' },
          { id: 'golden-temple', name: 'Namdroling Monastery', imageSeed: 'buddhist-temple' },
          { id: 'iruppu', name: 'Iruppu Falls', imageSeed: 'waterfall-nature' },
          { id: 'mandalpatti', name: 'Mandalpatti Peak', imageSeed: 'jeep-view' },
          { id: 'brahmagiri', name: 'Brahmagiri Peak', imageSeed: 'trekking' },
          { id: 'nisargadhama', name: 'Nisargadhama', imageSeed: 'bamboo-forest' },
          { id: 'madikeri-fort', name: 'Madikeri Fort', imageSeed: 'fort-stone' },
          { id: 'omkareshwara', name: 'Omkareshwara Temple', imageSeed: 'temple-pool' },
          { id: 'chelavara', name: 'Chelavara Falls', imageSeed: 'waterfall-high' }
        ]
      },
      {
        id: 'mysore',
        name: 'Mysore',
        description: 'City of Palaces, famous for its heritage and Dasara festival.',
        imageSeed: 'mysore',
        details: {
            about: "Mysore (Mysuru), the cultural capital of Karnataka, is famous for its royal heritage and magnificent palaces. The Amba Vilas Palace (Mysore Palace) is one of the most visited monuments in India, especially dazzling when illuminated on Sundays. The city is also known for its sandalwood, Mysore silk sarees, and the sweet Mysore Pak.\n\nVisitors can head to Chamundi Hill to visit the temple and get a bird's eye view of the city. The Brindavan Gardens with its musical fountain is a popular evening spot. Mysore is a clean, planned city that offers a deep dive into history and culture.",
            bestTime: "October to March. The Dasara festival (Sept/Oct) is spectacular.",
            howToReach: "**By Air:** Mysore Airport (connects to select cities) or Bangalore Airport (170km).\n**By Train:** Mysore Junction is a major railhead.\n**By Road:** Excellent expressway connectivity from Bangalore."
        },
        places: [
          { id: 'mysore-palace', name: 'Mysore Palace', imageSeed: 'mysore-palace' },
          { id: 'brindavan', name: 'Brindavan Gardens', imageSeed: 'garden-fountain' },
          { id: 'chamundi', name: 'Chamundi Hill', imageSeed: 'temple-hill' },
          { id: 'mysore-zoo', name: 'Mysore Zoo', imageSeed: 'zoo-wildlife' },
          { id: 'philomena', name: "St. Philomena's Church", imageSeed: 'church-gothic' },
          { id: 'jaganmohan', name: 'Jaganmohan Palace', imageSeed: 'art-gallery' },
          { id: 'karanji', name: 'Karanji Lake', imageSeed: 'lake-birds' },
          { id: 'railway-museum', name: 'Railway Museum', imageSeed: 'train-vintage' },
          { id: 'lalitha-mahal', name: 'Lalitha Mahal Palace', imageSeed: 'white-palace' },
          { id: 'ranganathittu', name: 'Ranganathittu Bird Sanctuary', imageSeed: 'birds-river' }
        ]
      }
    ]
  }
];