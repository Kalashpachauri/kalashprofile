import JavascriptPNG from '../src/Assets/Images/JavascriptPNG.png';
import ReactPNG from '../src/Assets/Images/ReactJS.png';
import NodeJSPNG from '../src/Assets/Images/NodeJS.png';
import ExpressPNG from '../src/Assets/Images/ExpressjsPNG.png';
import SQLServerPNG from '../src/Assets/Images/SQLServer.png';
import MongoDBPNG from '../src/Assets/Images/mongodb-icon.png';

export const myData = [
    {
        "name": "Kalash Pachauri",
        "designation": "Software Engineer",
        "aboutme": "<p>I am a dedicated and innovative Software Engineer with over three years of experience in web and software development. My primary expertise lies in the MERN (MongoDB, Express.js, React, Node.js) stack, complemented by a strong proficiency in SQL Server. Throughout my career, I have successfully designed, developed, and deployed numerous web applications and software solutions that are both scalable and efficient.<br/><br/>My passion for technology and problem-solving drives me to continually expand my skill set and stay abreast of the latest industry trends. I excel in creating seamless and user-friendly applications, ensuring optimal performance and functionality. Whether working independently or as part of a collaborative team, I am committed to delivering high-quality code and innovative solutions that meet and exceed client expectations.</p>",
        "experience": "3 Years of software Development Experience",
        "skills": [
            {
                "skillname": "Javascript",
                "description": "Experience of 3 years with developing and maintaining javascript applications. Worked on projects involving DOM manipulation, asynchronous programming (promises, async/await), and ES6+ features.",
                "image": JavascriptPNG
            },
            {
                "skillname": "React JS",
                "description": "I have extensive experience building and developing component-based web applications and efficiently managing UI states using React hooks with Redux for state management and optimized performance with lazy loading, code splitting, and React best practices to deliver fast, interactive user experiences.",
                "image": ReactPNG
            },
            {
                "skillname": "Node JS",
                "description": "I have developed scalable server-side applications using Node.js, focusing on asynchronous, event-driven architecture for efficient I/O handling. My work includes implementing RESTful APIs and real-time applications for high performance and scalability.",
                "image": NodeJSPNG
            },
            {
                "skillname": "Express JS",
                "description": "I have built RESTful APIs using Express.js with a focus on modular, maintainable code through middleware and routing. I optimized API performance by implementing error handling, request validation, and authentication, and contributed to complex backend architectures by managing HTTP requests and sessions efficiently.",
                "image": ExpressPNG
            },
            {
                "skillname": "SQL Server",
                "description": "I have worked with SQL Server to develop and optimize relational databases, writing efficient queries, stored procedures, and triggers. I have managed performance through indexing and query optimization, and handled data migrations, backups, and security measures.",
                "image": SQLServerPNG
            },
            {
                "skillname": "MongoDB",
                "description": "I have experience designing and managing MongoDB databases, optimizing queries, and using the aggregation framework and indexing to improve performance. I have also implemented security and backup strategies to ensure data integrity.",
                "image": MongoDBPNG
            }                    
        ]
    }
]

export default myData;