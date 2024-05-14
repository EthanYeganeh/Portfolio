import { animate } from "framer-motion";
import { motion } from "framer-motion";
import "./hero.scss"

const textVariants = { 
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:1.5,
            repeat:Infinity,
        },
    },
};
const sliderVariants = { 
    initial:{
        x:0,
    },
    animate:{
        x:"-220%",
        transition:{
            repeat:Infinity,
            duration:20,
            repeatType:"mirror",
        },
    },
};

const Hero = () => { 
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>ETHAN YEGANESHENAS</motion.h2>
                    <motion.h1 variants={textVariants}>Computer Programmer and Software Developer</motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        <a href="/public/EthanYeganeshenas_Resume.pdf">
                        <motion.button variants={textVariants}>See the resume</motion.button>
                        </a>
                        <a href="#contact">
                        <motion.button variants={textVariants}>Contact Me</motion.button>
                        </a>
                    </motion.div>
                    <motion.img variants={textVariants}  animate="scrollButton" src="/scroll.png" alt="" />
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                Programmer Analyst Content Creator
            </motion.div>
            <div className="imageContainer">
                <img src="/Ethan.png" alt="" />
            </div>
        </div>
    )
}
export default Hero