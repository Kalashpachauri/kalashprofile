import { TypeAnimation } from 'react-type-animation';
import MyImage from '../Assets/Images/Bitmoji.png';

export default function Carousels() {
    // const [index, setIndex] = useState(0);

    // const handleSelect = (selectedIndex) => {
    //     setIndex(selectedIndex);
    // };

    return (
        <>
            <div className="maincontain">

                <div className="middlecontent">
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
                            'Have Experience in Full Stack Web Application',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Have Experience in React/Javascript',
                            1000,
                            'Have Experience in Database: SQL Server/MongoDB',
                            1000,
                            'Have Experience in Node JS/Express.js',
                            1000,
                            'Have Experience in .NET Core',
                            1000,
                            'Have Experience in HTML/CSS',
                            1000
                        ]}
                        wrapper="span"
                        speed={40}
                        style={{ fontSize: 18, display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </div>
            </div>


            <div>

            </div>
        </>
    );
}