import images from "./images";
import {FaPaperPlane, FaEdit, FaRocket, FaShoppingCart, FaFileAlt, FaPhoneAlt, FaEnvelopeOpen, FaMapMarkerAlt} from "react-icons/fa";
import {BiDollarCircle} from "react-icons/bi";
import {ImMagicWand} from "react-icons/im";
import {AiOutlineReload} from "react-icons/ai";

const gradient = "url(#blue-gradient)" ;

const services = [
    {
        id: 1,
        icon: <FaPaperPlane style = {{ fill: gradient }} />,
        title: "Digital Marketing",
        text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
    },
    {
        id: 2,
        icon: <BiDollarCircle style = {{ fill: gradient }} />,
        title: "Trade Shows",
        text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
    },
    {
        id: 3,
        icon: <FaRocket style = {{ fill: gradient }} />,
        title: "Branding",
        text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
    },
    {
        id: 4, 
        icon: <FaEdit style = {{ fill: gradient }} />,
        title: "Content Creation",
        text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
    },
    {
        id: 5,
        icon: <ImMagicWand style = {{ fill: gradient }} />,
        title: "Grpahic Design",
        text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
    },
    {
        id: 6,
        icon: <FaShoppingCart style = {{ fill: gradient }} />,
        title: "Media Buying",
        text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
    }
];

const about = [
    {
        id: 7,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus leo et diam fermentum ullamcorper. Nulla venenatis nibh sollicitudin tincidunt gravida. Nam convallis justo et ligula luctus suscipit. Etiam eu nisi turpis. Donec sollicitudin accumsan quam, rhoncus sagittis metus semper quis. Praesent convallis mauris sed ipsum lobortis facilisis. Nulla cursus sem non nunc sagittis, a volutpat mauris lobortis. Nulla ut feugiat tellus. Nam dictum nisi nec scelerisque auctor"
    }
]

const qualities = [
    {
        id: 8,
        icon: <FaFileAlt style = {{ fill: gradient }} />,
        title: "Ideas & Plans",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod."
    },
    {
        id: 9,
        icon: <AiOutlineReload style = {{ fill: gradient }}  />,
        title: "Prompt Strategies",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod."
    }
];

const features = [
    {
        id: 10,
        title: "Digital Marketing",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc."
    },
    {
        id: 11,
        title: "Trade Shows",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc."
    },
    {
        id: 12,
        title: "Branding",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc."
    },
    {
        id: 13,
        title: "Content Creation",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc."
    }, 
    {
        id: 14,
        title: "Graphic Design",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc."
    },
    {
        id: 15,
        title: "Media Buying",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc."
    }
];

const portfolio = [
  {
    id: 16,
    title: "Pune, Maharashtra, India",
    text: "3rd, 4th & 5th Floor, G.K.Mall, above Pantaloons (GK Mall), near Kokane Chowk, Pimple Saudagar",
    image: images.spaces_pune_office,
  },
  {
    id: 17,
    title: "Bhubaneswar, Odisha, India",
    text: "Ginger Hotel, Opposite Nalco Headquarters, Jayadev Vihar, Nandankanan Rd, Nayapalli",
    image: images.spaces_bbsr_office,
  },
  {
    id: 18,
    title: "Bangalore, Karnataka, India",
    text: "Sabari Complex, 24, Field Marshal Cariappa Rd, Shanthala Nagar, Ashok Nagar",
    image: images.spaces_bangalore_office,
  },
];

const testimonials = [
  {
    id: 19,
    name: "Rupanshi Luthra",
    text: "Booking seats for events has never been easier! With this app, I can quickly find the perfect seats and complete my purchase in just a few clicks. It's convenient, user-friendly, and saves me so much time. Highly recommended!",
    image: images.customer_img_1,
    rating: 5,
  },
  {
    id: 20,
    name: "Smaran Kar",
    text: "I've been using this seat booking app for all my concert tickets, and it's been a game-changer. The interface is intuitive, the seat selection process is smooth, and I love how I can see real-time availability. Plus, the confirmation emails are a nice touch - I always feel reassured about my bookings.",
    image: images.customer_img_2,
    rating: 5,
  },
  {
    id: 21,
    name: "Sourav Kumar",
    text: "As a frequent traveler, I rely on this app to book my train seats, and it's been fantastic. Whether I'm planning ahead or booking last minute, I can always find seats that suit my preferences. The seamless payment process and instant confirmations make traveling stress-free!",
    image: images.customer_img_3,
    rating: 4,
  },
  {
    id: 22,
    name: "Om Shivaji Gavade",
    text: "I've tried several seat booking apps before, but this one stands out. The layout is clean, the search filters are handy, and I appreciate the attention to detail in displaying seat views. It's clear that the developers prioritize user experience, and it shows!",
    image: images.customer_img_4,
    rating: 4,
  },
  {
    id: 23,
    name: "Falguni Sharma",
    text: "I'm impressed by the reliability of this seat booking app. I've used it for various events, from movies to sports games, and it's consistently delivered. The ability to choose seats in advance and avoid long lines at the venue is a game-changer. I'm a loyal user now!",
    image: images.customer_img_5,
    rating: 5,
  },
  {
    id: 24,
    name: "Rupali Dash",
    text: "I've been using this seat booking app for all my movie nights, and I couldn't be happier. The app is so easy to navigate, and I love being able to see which seats are available in real-time. It takes the stress out of planning outings with friends, knowing we can all sit together hassle-free. Plus, the confirmation emails and reminders ensure we never miss a show. Thanks for making movie-going a breeze!",
    image: images.customer_img_6,
    rating: 4,
  },
];

const contact = [
    {
        id: 25,
        icon: <FaPhoneAlt style = {{ fill: gradient }} />,
        info: "+7008967056",
        text: "Call us now!"
    },
    {
        id: 26,
        icon: <FaEnvelopeOpen style = {{ fill: gradient }} />,
        info: "awfis@info.com",
        text: "Send us mail!"
    },
    {
        id: 27,
        icon: <FaMapMarkerAlt style = {{ fill: gradient }} />,
        info: "Pimple Saudagar, Pune",
        text: "Main office address"
    }
]

const sections = {services, about, qualities, features, portfolio, testimonials, contact};

export default sections;