import {motion} from "framer-motion"

const Test = () => {
    return (
        <div className="course">
            <motion.div
                className="box"
                transition={{ duration: 2 }}
                initial={{ opacity: 0.5, scale: 0.5 }}
                whileInView={{opacity:1, scale:2}}
                
            ></motion.div>
        </div>
    )
}
export default Test