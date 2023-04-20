import { Link } from "react-router-dom"
import landing1 from "./images/landing1.jpg"
import landing2 from "./images/landing2.jpg"
import landing3 from "./images/landing3.jpg"
import landing4 from "./images/landing4.jpg"
import landing5 from "./images/landing5.jpg"
import landing6 from "./images/landing6.jpg"
import body1 from "./images/body1.jpg"
import body2 from "./images/body2.jpg"
import { useEffect, useState } from "react"


function LandingPage() {
    const backgroundImages = [
        landing1,
        landing2,
        landing3,
        landing4,
        landing5,
        landing6
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentImageIndex((currentImageIndex + 1) % backgroundImages.length);
        }, 5000); // change image every 1 minute

        return () => {
            clearInterval(intervalId);
        };

    }, [backgroundImages.length, currentImageIndex]);

    const currentImage = backgroundImages[currentImageIndex];

    const style = {
        backgroundImage: `url(${currentImage})`,
        backgroundSize: "cover",
        transition: "opacity 1s ease-in-out",
        opacity: 1,
        marginTop: "-15px"
    };

    return (
        <>
        <section className="opening">
            <div className="hero min-h-screen" style={style} onLoad={() => {style.opacity = 1}} >
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <p className="mb-5 font-semibold">Welcome to</p>
                        <h1 className="mb-5 text-5xl font-bold">WANDRRR</h1>
                        <p className="mb-5 font-semibold">Explore. Escape. Enjoy</p>
                        <div className="container mt-3">
                            <Link
                            to="login"
                            className="btn btn-primary"
                            style={{width: 200}}
                            >
                            Log In
                            </Link>
                        </div>
                        <div className="container mt-3">
                            <Link
                            to="signup"
                            className="btn btn-primary"
                            style={{width: 200}}
                            >
                            Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Your Ultimate Travel Journal</h2>
                    <p className="mb-4">Wandrrr is a travel journal website that allows people to document their journeys in a beautiful and organized way. Whether you're an avid traveler or just enjoy the occasional getaway, Wandrrr makes it easy to create and share your travel experiences with others.</p>
                    <p>Wandrrr is the perfect platform for capturing your adventures and preserving your memories for years to come. Start exploring and sharing your travels with Wandrrr today!</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <img className="w-full rounded-lg" src={body1} alt="travel 2"/>
                    <img className="mt-4 w-full lg:mt-10 rounded-lg" src={body2} alt="travel 3"/>
                </div>
            </div>
        </section>
        <section className="footer">
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>Copyright © 2023 - All right reserved by Wandrrr</p>
                </div>
            </footer>
        </section>
        </>
    );
}

export default LandingPage;
