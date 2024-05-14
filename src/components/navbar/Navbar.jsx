import "./navbar.scss"
import Sidebar from "../sidebar/Sidebar"
import { motion } from "framer-motion"
const Navbar = () => {
    return (
        <div className="navbar">
            {/* Sidebar*/}
        <Sidebar/>
        <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >Ethan the dev</motion.span>
            <div className="social">
                <a href="https://github.com/EthanYeganeh"><img src="/github.png" alt="" /></a>
                <a href="https://www.youtube.com/channel/UCNx2NAWWEztme7zauu02ZzA"><img src="/youtube.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/ethan-yeganeh-65b371254/"><img src="/linkedin.png" alt="" /></a>
            </div>
        </div>
        </div>
    )
}

export default Navbar