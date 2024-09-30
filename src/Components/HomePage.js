import React, { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import MyImage from '../Assets/Images/Bitmoji.png';
import TopSideNav from '../Common/TopSideNav';
import Footer from '../Common/Footer';
import myData from '../MajorData';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
//import Shimmer from '../Common/Shimmer';
//import DropdownSearch from '../Common/DropdownSearch';
//import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function HomePage() {

    //const newArray = Array.from({ length: 3 });
    const skills = myData[0].skills;

    //const [myInfo, setMyInfo] = useState(null);

    useEffect(() => {
        //console.log(myData[0].skills);
    }, []);

    const { ref, inView } = useInView({
        triggerOnce: false,   // Animates only once when in view
        threshold: 0.1  // 10% of the component visible to trigger animation
    });

    return (
        <>
            <div className='m-0 p-0'>

                <TopSideNav />

                <main>

                    <div className="banner shadow-lg p-3 bg-body">

                        <div className="topmiddlecontent mt-5 p-2 mb-2">
                            <img
                                className="bg-white rounded-circle m-0 p-0 shadow"
                                src={MyImage} width="120" height="120" alt=""
                            />
                            <h3 className="mt-2">
                                <b className="text-white">Kalash Pachauri</b>
                            </h3>
                            <h5 className="mb-2">
                                <b className="text-white">Software Developer</b>
                            </h5>
                            <TypeAnimation
                                className='text-white d-flex justify-content-center'
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Experience in Full Stack',
                                    1000,
                                    'Experience in Javascript',
                                    1000,
                                    'Experience in Node JS',
                                    1000,
                                    'Experience in React JS',
                                    1000,
                                    'Experience in Express JS',
                                    1000,
                                    'Experience in SQL Server',
                                    1000,
                                    'Experience in MongoDB',
                                    1000,
                                    'Experience in HTML/CSS',
                                    1000
                                ]}
                                wrapper="span"
                                speed={40}
                                style={{ fontSize: 18, display: 'inline-block' }}
                                repeat={Infinity}
                            />
                        </div>
                    </div>

                    <div
                        className='d-flex justify-content-center mt-2'
                    >
                        <div
                            className='container p-2 m-1'
                        // style={{
                        //     background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(5,68,133,1) 80%)'
                        // }}
                        >
                            <h2 className='text-secondary opacity-50'><i><b>About Me</b></i></h2>
                            <div className='opacity-75' dangerouslySetInnerHTML={{ __html: myData[0].aboutme }} />

                        </div>
                    </div>

                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 50 }}  // Initial hidden position
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.6 }}   // Smooth duration of animation                        
                    >
                        <div className="p-2 container px-2">
                            <h2 className='text-secondary opacity-50'><i><b>Skills</b></i></h2>
                            <div className='row d-flex justify-content-center'>
                                {skills.map((item, index) => {
                                    return (

                                        <div
                                            className="card m-2"
                                            style={{ width: "18rem" }}
                                            key={index}
                                        >
                                            <img
                                                src={item.image}
                                                className="card-img-top object-fit-scale m-2" alt="..."
                                                width={100}
                                                height={100}
                                            />

                                            <div className="card-body">
                                                <h5 className="card-title opacity-100">{item.skillname}</h5>
                                                <p className="card-text opacity-75">
                                                    {item.description}
                                                </p>

                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>

                    </motion.div>

                </main>

                <Footer />

            </div>
        </>
    )
}