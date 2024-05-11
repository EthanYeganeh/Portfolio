import {motion, spring} from "framer-motion"

const Test = () => {

    const variants = {
        visible: { opacity: 1 },
        hidden: {opacity:0},
        
    }
    return (
        <div className="course">
            <motion.div
                className="box"
                transition={{ duration: 2}}
                initial={{ opacity: 0.5, scale: 0.5 }}
                whileInView={{opacity:1, scale:2}}
                
            ></motion.div>
        </div>
    )
}
export default Test