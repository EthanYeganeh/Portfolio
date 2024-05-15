import { motion, animate } from "framer-motion";
import "./contact.scss"
import { useRef } from "react";
import emailjs from '@emailjs/browser'

const variants={
    initial:{
        y: 500,
        opacity: 0
    },
    animate:{
        y: 0,
        opacity: 1,
        transition:{
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
};
const Contact = () => {
    const formRef = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_1oh5jwn', 'template_v6fr03r', formRef.current, {publicKey: 'pY6uUQFT_RTHtZlob',})
        .then(() => {
                console.log('SUCCESS!');
            },(error) => {
                console.log('FAILED...', error.text);
            },
            );
        };

    return(
        <motion.div  id="contact" className="contact" variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>Let's Connect</motion.h1>
                <motion.div className="item" variants={variants}>
                    <h2>Mail</h2>
                    <span>yega0004@algonquinlive.com</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Address</h2>
                    <span>Ottawa, Ontario, Canada</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Phone</h2>
                    <span>+1 613 890 2963</span>
                </motion.div>
            </motion.div>
            <div className="formContainer">
                <motion.form ref={formRef} onSubmit={sendEmail} initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.5, duration:1}}>
                    <input type="text" required placeholder="Name" name="name"/>
                    <input type="email" required placeholder="Email" name="email"/>
                    <textarea rows={8} placeholder="Message" required name="message"/>
                    <button>Submit</button>
                </motion.form>
            </div>
            <div className="copyRight">
                <p>© 2024 Ethan Yeganeshenas. All rights reserved.</p>
            </div>
        </motion.div>
        
    )
}
export default Contact;