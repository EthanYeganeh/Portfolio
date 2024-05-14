import { useRef } from "react";
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform} from "framer-motion";

const items = [
    {
        id:1,
        title:"Flexy Gig",
        img:"/public/FlexyGig.jpg",
        desc:"Links Gig contractors and employers via a range of intuitive features facilitating job matching for individuals and finding the right personnel for employers.",
    },
    {
        id:2,
        title:"Book Collection Using PyMongo",
        img:"/public/pymongo.webp",
        desc:"A book collection aimed at highlighting the essential skills for Python development and advancing backend proficiency with MongoDB..",
    },
    {
        id:3,
        title:"Weather Android App",
        img:"/public/Android.jpg",
        desc:"An Android weather application that utilizes geolocation data to display precise weather conditions for specific locations, providing users with accurate and up-to-date weather information.",
    },
    {
        id:4,
        title:"Java Server face App",
        img:"/public/Java.webp",
        desc:"a java project that utilizes the functionality of the JSF using bootstrap to showcase the ability of coding in OOP programming languages such as java.",
    },
];

const Single = ({item}) => {
    const ref = useRef(); 
    const {scrollYProgress} = useScroll({target: ref,
        // offset:["end end", "start start"],
    });
    const y = useTransform(scrollYProgress, [0,1], [-180, 180]);
    return <section >
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer" ref={ref}>
                <img src={item.img} alt="" />
                </div>
                <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>See the Project</button>
                </motion.div>
            </div>
        </div>
    </section>;
};

const Portfolio = () => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({target: ref, offset:["end end", "start start"], });
    const scaleX = useSpring(scrollYProgress,{
        stiffness: 100,
        damping: 30,
    });
    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div className="progressBar" style={{scaleX}}></motion.div>
            </div>
            {items.map(item =>(
                <Single item={item} key={item.id}/>
            ))}
        </div>
    );
};
export default Portfolio;