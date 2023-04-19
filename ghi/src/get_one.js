import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function WandrrrDetail() {
    const [wandrrr, setWandrrr] = useState([]);
    const { wandrrrs_id } = useParams();
    const [moods, setMoods] = useState("");
    const [ratings, setRatings] = useState("");
    const [companions, setCompanions] = useState("");
    const [weathers, setWeathers] = useState("");

    useEffect(() => {
        const fetchWandrrrDetails = async () => {

                const url = `${process.env.REACT_APP_USER_SERVICE_API_HOST}/wandrrrs/${wandrrrs_id}`;
                const response = await fetch(url, {credentials: "include"});

                if (response.ok) {
                    const data = await response.json();
                    setWandrrr(data);
                    if (data.mood === "0"){
                        setMoods("😶");
                    }
                    if (data.mood === "1"){
                        setMoods("🙂");
                    } if (data.mood === "2"){
                        setMoods("🥰");
                    } if (data.mood === "3"){
                        setMoods("😇");
                    } if (data.mood === "4"){
                        setMoods("🤣");
                    } if (data.mood === "5"){
                        setMoods("🥳");
                    } if (data.mood === "6"){
                        setMoods("🤤");
                    } if (data.mood === "7"){
                        setMoods("🤒");
                    } if (data.mood === "8"){
                        setMoods("🥹");
                    } if (data.mood === "9"){
                        setMoods("😅");
                    } if (data.mood === "10"){
                        setMoods("😒");
                    } if (data.mood === "11"){
                        setMoods("😞");
                    } if (data.mood === "12"){
                        setMoods("😕");
                    } if (data.mood === "13"){
                        setMoods("😢");
                    } if (data.mood === "14"){
                        setMoods("😡");
                    } if (data.mood === "15"){
                        setMoods("🤯");
                    } if (data.mood === "16"){
                        setMoods("🤢");
                    } if (data.mood === "17"){
                        setMoods("😴");
                    } if (data.mood === "18"){
                        setMoods("🥱");
                    } if (data.mood === "19"){
                        setMoods("💀");
                    }

                    if (data.companion_dropdown === "dog1"){
                        setCompanions("🐶");
                    } if (data.companion_dropdown === "dog2"){
                        setCompanions("🦮");
                    } if (data.companion_dropdown === "dog3"){
                        setCompanions("🐕‍🦺");
                    } if (data.companion_dropdown === "dog4"){
                        setCompanions("🐩");
                    } if (data.companion_dropdown === "cat2"){
                        setCompanions("🐱");
                    } if (data.companion_dropdown === "cat2"){
                        setCompanions("🐈");
                    } if (data.companion_dropdown === "cat3"){
                        setCompanions("🐈‍⬛");
                    } if (data.companion_dropdown === "baby1"){
                        setCompanions("👶");
                    } if (data.companion_dropdown === "bestfriend1"){
                        setCompanions("👯‍♂️");
                    } if (data.companion_dropdown === "bestfriend2"){
                        setCompanions("👯‍♂️");
                    } if (data.companion_dropdown === "bestfriend3"){
                        setCompanions("👫");
                    } if (data.companion_dropdown === "bestfriend4"){
                        setCompanions("👭");
                    } if (data.companion_dropdown === "bestfriend5"){
                        setCompanions("👬");
                    } if (data.companion_dropdown === "family1"){
                        setCompanions("👨‍👨‍👦");
                    } if (data.companion_dropdown === "family2"){
                        setCompanions("👩‍👩‍👦");
                    } if (data.companion_dropdown === "family3"){
                        setCompanions("👨‍👩‍👦‍👦");
                    } if (data.companion_dropdown === "family4"){
                        setCompanions("👪");
                    } if (data.companion_dropdown === "family5"){
                        setCompanions("👩‍👦");
                    } if (data.companion_dropdown === "family6"){
                        setCompanions("👨‍👦");
                    } if (data.companion_dropdown === "couple1"){
                        setCompanions("👩‍❤️‍👨");
                    } if (data.companion_dropdown === "couple2"){
                        setCompanions("👩‍❤️‍👩");
                    } if (data.companion_dropdown === "couple3"){
                        setCompanions("💑");
                    } if (data.companion_dropdown === "couple4"){
                        setCompanions("👨‍❤️‍👨");
                    }
                    if (data.weather==="rainy") { setWeathers("🌧️");
                    } if (data.weather==="sunny") { setWeathers("🌞");
                    } if (data.weather==="cloudy") { setWeathers("🌤️");
                    } if (data.weather==="tornado") { setWeathers("🌪️");
                    } if (data.weather==="stormy") { setWeathers("⛈️");
                    } if (data.weather==="snowy") { setWeathers("⛄️");
                    } if (data.weather==="windy") { setWeathers("🌬️");
                    } if (data.weather==="foggy") { setWeathers("🌫️");}


                    if (data.rating === "1" ){
                        setRatings("⭐️");
                    }
                    if (data.rating === "2" ){
                        setRatings("⭐️⭐️");
                    }
                    if (data.rating === "3" ){
                        setRatings("⭐️⭐️⭐️");
                    }
                    if (data.rating === "4" ){
                        setRatings("⭐️⭐️⭐️⭐️");
                    }
                    if (data.rating === "5" ){
                        setRatings("⭐️⭐️⭐️⭐️⭐️");
                    }

                }else{
                    window.location.href = "/error";
                }

            }
        fetchWandrrrDetails();

    }, [wandrrrs_id]);




        return         (
            <>
            <div>
                <div align="center" className='wandrrrPost'>

                    <h1 style={{fontSize:60, fontWeight: "lighter", letterSpacing:"0.1em", display: "flex", flexDirection: "column", justifyContent: "center", textTransform: "uppercase"}}>{wandrrr.title}</h1>

                    <h2>{new Date(wandrrr.start_date).toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric' })}{wandrrr.end_date && (` - ${new Date(wandrrr.end_date).toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric' })}`)}</h2>


                    <h2>{moods}   {ratings}   {weathers}</h2>




                    <h2>{wandrrr.location}</h2>
                    <div align="center" className="carousel w-full rounded-box">
                    <div id="slide1" className="carousel-item relative w-full" >
                        <img style={{ width: "auto", height: 600, display: "block", margin: "0 auto" }} src={wandrrr.photos01} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a className="btn btn-circle"></a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    {wandrrr.photos02 && (
                    <div id="slide2" className="carousel-item relative w-full">
                        <img style={{ width: "auto", height: 600, display: "block", margin: "0 auto" }} src={wandrrr.photos02} className="w-full"  />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>)}
                    {wandrrr.photos03 && (
                    <div id="slide3" className="carousel-item relative w-full" >
                        <img style={{ width: "auto", height: 600, display: "block", margin: "0 auto" }} src={wandrrr.photos03} className="w-full"  />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2" >
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    )}
                    {wandrrr.photos04 && (
                    <div id="slide4" className="carousel-item relative w-full">
                        <img
                            style={{ width: "auto", height: 600, display: "block", margin: "0 auto" }}
                            src={wandrrr.photos04}
                            className="w-full" />


                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                        </div>


                        </div>)}
                        {wandrrr.photos05 && (
                        <div id="slide5" className="carousel-item relative w-full">
                        <img style={{ width: "auto", height: 600, display: "block", margin: "0 auto" }} src={wandrrr.photos05} className="w-full"  />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>)}

                    </div>

                    <div>
                        <h2>{wandrrr.description}</h2>
                        <h2>{companions}  {wandrrr.companion}</h2>


                    </div>
                </div>
            </div>



            </>
        );
}
export default WandrrrDetail;
