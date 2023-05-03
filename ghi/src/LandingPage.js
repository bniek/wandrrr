import { Link } from "react-router-dom"
import landing1 from "./images/landing1.jpg"
import landing2 from "./images/landing2.jpg"
import landing3 from "./images/landing3.jpg"
import landing4 from "./images/landing4.jpg"
import landing5 from "./images/landing5.jpg"
import landing6 from "./images/landing6.jpg"
import body1 from "./images/body1.jpg"
import body2 from "./images/body2.jpg"
import benniekim from "./images/benniekim.jpeg"
import charlenexu from "./images/charlenexu.png"
import elainekwok from "./images/elainekwok.png"
import sinlinyeo from "./images/sinlinyeo.jpeg"
import leftquote from "./images/leftquote.png"
import rightquote from "./images/rightquote.png"
import { useEffect, useState } from "react"


function LandingPage() {
    const backgroundImages = [
        landing1,
        landing2,
        landing3,
        landing4,
        landing5,
        landing6,
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentImageIndex((currentImageIndex + 1) % backgroundImages.length);
        }, 5000); // change image every 30 seconds

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
        {/* About Wandrrr */}
        <section className="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-neutral-700">Your Ultimate Travel Journal</h2>
                    <p className="mb-4">Wandrrr is a travel journal website that allows people to document their journeys in a beautiful and organized way. Whether you're an avid traveler or just enjoy the occasional getaway, Wandrrr makes it easy to create and share your travel experiences with others.</p>
                    <p>Wandrrr is the perfect platform for capturing your adventures and preserving your memories for years to come. Start exploring and sharing your travels with Wandrrr today!</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <img className="w-full rounded-lg" src={body1} alt="travel 2"/>
                    <img className="mt-4 w-full lg:mt-10 rounded-lg" src={body2} alt="travel 3"/>
                </div>
            </div>
        </section>
        {/* Testimonials */}
        <section className="my-8 bg-[#FAFDF3] justify-center items-center ">
            <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
                <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-700 pt-10 text-center">What our customers are saying about us</h1>
            </div>
            <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10 pb-20">
                <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg bg-white">
                    <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12">
                        <p className="relative px-6 py-1 text-lg italic text-center">
                            <img alt="" className="w-8 h-8" src={leftquote} />
                            I have used several travel journal apps in the past, but this one is by far the best. It's simple yet very effective. I can't recommend it enough!
                            <img alt="" className="w-8 h-8 absolute right-0" src={rightquote} />
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#cbdae1]">
                        <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full " />
                        <p className="text-xl font-semibold leading-tight"> Maria Hernandez</p>
                        <p className="text-sm uppercase">Mexico City, Mexico</p>
                    </div>
                </div>
                <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg bg-white">
                    <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12">
                        <p className="relative px-6 py-1 text-lg italic text-center">
                            <img alt="" className="w-8 h-8" src={leftquote} />
                            The user interface is very user-friendly, and I love the feature that lets me add photos to my journal entries. Highly recommended!
                            <img alt="" className="w-8 h-8 absolute right-0" src={rightquote} />
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#cbdae1]">
                        <img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full " />
                        <p className="text-xl font-semibold leading-tight">Daniel Rodriguez</p>
                        <p className="text-sm uppercase">Barcelona, Spain</p>
                    </div>
                </div>
                <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg bg-white">
                    <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12">
                        <p className="relative px-6 py-1 text-lg italic text-center">
                            <img alt="" className="w-8 h-8" src={leftquote} />
                            This app is a lifesaver! I used to struggle with remembering all the details of my trips, but now I can easily document everything.
                            <img alt="" className="w-8 h-8 absolute right-0" src={rightquote} />
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#cbdae1]">
                        <img src="https://source.unsplash.com/50x50/?portrait?3" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full " />
                        <p className="text-xl font-semibold leading-tight">David Lee</p>
                        <p className="text-sm uppercase">Toronto</p>
                    </div>
                </div>
                {/* <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg bg-white">
                    <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12">
                        <p className="relative px-6 py-1 text-lg italic text-center">
                            <img alt="" className="w-8 h-8" src={leftquote} />
                            I absolutely love this travel journal app! It has made my trip to Italy so much more memorable. Thank you, Traveler's Companion!
                            <img alt="" className="w-8 h-8 absolute right-0" src={rightquote} />
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#cbdae1]">
                        <img src="https://source.unsplash.com/50x50/?portrait?4" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full " />
                        <p className="text-xl font-semibold leading-tight">Sarah Johnson</p>
                        <p className="text-sm uppercase">New York, USA</p>
                    </div>
                </div>
                <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg bg-white">
                    <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
                        <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                            <img alt="" className="w-8 h-8" src={leftquote} />
                            I absolutely love this travel journal app! It has made my trip to Italy so much more memorable. Thank you, Traveler's Companion!
                            <img alt="" className="w-8 h-8 absolute right-0" src={rightquote} />
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900 bg-[#cbdae1]">
                        <img src="https://source.unsplash.com/50x50/?portrait?4" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700" />
                        <p className="text-xl font-semibold leading-tight">Sarah Johnson</p>
                        <p className="text-sm uppercase">New York, USA</p>
                    </div>
                </div>
                <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg bg-white">
                    <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
                        <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                            <img alt="" className="w-8 h-8" src={leftquote} />
                            I absolutely love this travel journal app! It has made my trip to Italy so much more memorable. Thank you, Traveler's Companion!
                            <img alt="" className="w-8 h-8 absolute right-0" src={rightquote} />
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900 bg-[#cbdae1]">
                        <img src="https://source.unsplash.com/50x50/?portrait?4" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700" />
                        <p className="text-xl font-semibold leading-tight">Sarah Johnson</p>
                        <p className="text-sm uppercase">New York, USA</p>
                    </div>
                </div> */}
            </div>
        </section>
        {/* Gallery */}
        <section className="py-6 dark:bg-gray-800">
            <div className="container flex flex-col justify-center p-4 mx-auto pb-12">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                    <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://images.pexels.com/photos/16047136/pexels-photo-16047136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                    <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://images.pexels.com/photos/3889986/pexels-photo-3889986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                    <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://images.pexels.com/photos/4171211/pexels-photo-4171211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                    <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://images.pexels.com/photos/2422259/pexels-photo-2422259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                </div>
            </div>
        </section>
        {/* Meet the team */}
        <section className="py-6 bg-[#FAFAFA] dark:bg-gray-800 dark:text-gray-100 ">
            <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">Development team</p>
                <h2 className="text-4xl font-bold leading-none text-center sm:text-4xl mb-6 text-neutral-700 pb-8">The talented people behind the scenes</h2>
                <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
                    {/* Bennie */}
                    <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src={benniekim} />
                        <div className="flex-1 my-4">
                            <p className="text-xl font-semibold leading-snug">Bennie Kim</p>
                            <p className="text-[#808080]">Fullstack Developer</p>
                        </div>
                        <div className="flex items-center justify-center p-3 space-x-3 border-t-2 border-[#9CC0E7]">
                            <a rel="noopener noreferrer" href="https://www.linkedin.com/in/benniekim/" title="LinkedIn" className="dark:text-gray-900 hover:dark:text-violet-400">
                                <img alt="" className="h-5 w-5 fill-cutrrent" src="https://img.icons8.com/?size=512&id=8808&format=png"/>
                            </a>
                            <a rel="noopener noreferrer" href="https://gitlab.com/benniekim" title="GitLab" className="dark:text-gray-900 hover:dark:text-violet-400">
                                <img alt="" className="h-5 w-5 fill-cutrrent" src="https://img.icons8.com/?size=512&id=r2716alIKiO5&format=png"/>
                            </a>
                        </div>
                    </div>
                    {/* Charlene */}
                    <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src={charlenexu} />
                        <div className="flex-1 my-4">
                            <p className="text-xl font-semibold leading-snug">Charlene Xu</p>
                            <p className="text-[#808080]">Fullstack Developer</p>
                        </div>
                        <div className="flex items-center justify-center p-3 space-x-3 border-t-2 border-[#9CC0E7]">
                            <a rel="noopener noreferrer" href="https://www.linkedin.com/in/charlene-xu-sl/" title="LinkedIn" className="dark:text-gray-900 hover:dark:text-violet-400">
                                <img alt="" className="h-5 w-5 fill-cutrrent" src="https://img.icons8.com/?size=512&id=8808&format=png"/>
                            </a>
                            <a rel="noopener noreferrer" href="https://gitlab.com/charlene.xu92" title="GitLab" className="dark:text-gray-900 hover:dark:text-violet-400">
                                <img alt="" className="h-5 w-5 fill-cutrrent" src="https://img.icons8.com/?size=512&id=r2716alIKiO5&format=png"/>
                            </a>
                        </div>
                    </div>
                    {/* Elaine */}
                    <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src={elainekwok} />
                        <div className="flex-1 my-4">
                            <p className="text-xl font-semibold leading-snug">Elaine Kwoh</p>
                            <p className="text-[#808080]">Fullstack Developer</p>
                        </div>
                        <div className="flex items-center justify-center p-3 space-x-3 border-t-2 border-[#9CC0E7]">
                            <a rel="noopener noreferrer" href="https://www.linkedin.com/in/elainekwoh/" title="LinkedIn" className="dark:text-gray-900 hover:dark:text-violet-400">
                                <img alt="" className="h-5 w-5 fill-cutrrent" src="https://img.icons8.com/?size=512&id=8808&format=png"/>
                            </a>
                            <a rel="noopener noreferrer" href="https://gitlab.com/elainah" title="Gitlab" className="dark:text-gray-900 hover:dark:text-violet-400">
                                <img alt="" className="h-5 w-5 fill-cutrrent" src="https://img.icons8.com/?size=512&id=r2716alIKiO5&format=png"/>
                            </a>
                        </div>
                    </div>
                    {/* Sinlin */}
                    <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src={sinlinyeo} />
                        <div className="flex-1 my-4">
                            <p className="text-xl font-semibold leading-snug">Sinlin Yeo</p>
                            <p className="text-[#808080]">Fullstack Developer</p>
                        </div>
                        <div className="flex items-center justify-center p-3 space-x-3 border-t-2 border-[#9CC0E7]">
                            <a rel="noopener noreferrer" href="https://www.linkedin.com/in/sinlinyeo/" title="LinkedIn" className="dark:text-gray-900 hover:dark:text-violet-400">
                                <img alt="" className="h-5 w-5 fill-cutrrent" src="https://img.icons8.com/?size=512&id=8808&format=png"/>
                            </a>
                            <a rel="noopener noreferrer" href="https://gitlab.com/itsinz" title="GitLab" className="dark:text-gray-900 hover:dark:text-violet-400">
                                <img alt="" className="h-5 w-5 fill-cutrrent" src="https://img.icons8.com/?size=512&id=r2716alIKiO5&format=png"/>
                            </a>
                        </div>
                    </div>
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
