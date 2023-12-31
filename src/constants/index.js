import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigPlant1, bigPlant2, bigPlant3, customer1, customer2, plant1, plant2, plant3, plant4 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const plants = [
    {
        thumbnail: bigPlant1,
        bigPlant: bigPlant1,
    },
    {
        thumbnail: bigPlant2,
        bigPlant: bigPlant2,
    },
    {
        thumbnail: bigPlant3,
        bigPlant: bigPlant3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '42+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const plants_products = [
    {
        imgURL: plant1,
        name: "String of Hearts",
        price: "$9.99",
    },
    {
        imgURL: plant2,
        name: "Spathiphyllum Cochlearispathum",
        price: "$4.00",
    },
    {
        imgURL: plant3,
        name: "Haworthopsis Iimifolia",
        price: "$6.90",
    },
    {
        imgURL: plant4,
        name: "String of Pearl",
        price: "$2.99",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Kevin L.',
        rating: 5.0,
        feedback: "The plants I received from this shop are thriving and have transformed my living space into a green haven!"
    },
    {
        imgURL: customer2,
        customerName: 'Ati L.',
        rating: 4.6,
        feedback: "Not only are their plants of exceptional quality, but the care tips and customer service are truly top-notch."
    }
];


export const footerLinks = [
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@plantsy.com", link: "mailto:customer@plantsy.com" },
            { name: "+0123456789", link: "tel:+0123456789" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];