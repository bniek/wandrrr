import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function WandrrrDetail() {
    const [wandrrr, setWandrrr] = useState([]);
    const { wandrrrs_id } = useParams();
    const [moods, setMoods] = useState("");
    const [ratings, setRatings] = useState("");

    useEffect(() => {
        const fetchWandrrrDetails = async () => {

                const url = `${process.env.REACT_APP_USER_SERVICE_API_HOST}/wandrrrs/${wandrrrs_id}`;
                const response = await fetch(url, {credentials: "include"});


                if (response.ok) {
                    const data = await response.json();
                    setWandrrr(data);
                    if (data.mood === "happy"){
                        setMoods("🙂");
                    } else if (data.mood === "sad"){
                        setMoods("😟");
                    }
                    if (data.rating === 1 ){
                        setRatings("⭐️");
                    }
                    if (data.rating === 2 ){
                        setRatings("⭐️⭐️");
                    }
                    if (data.rating === 3){
                        setRatings("⭐️⭐️⭐️");
                    }
                    if (data.rating === 4 ){
                        setRatings("⭐️⭐️⭐️⭐️");
                    }
                    if (data.rating === 5 ){
                        setRatings("⭐️⭐️⭐️⭐️⭐️");
                    }

                }else{
                    window.location.href = "/access-error";
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


                    <h2>{moods}   {ratings}</h2>




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
                        <h2>{wandrrr.companion}</h2>
                        <h2>{wandrrr.companion_dropdown}</h2>
                        <h2>{wandrrr.weather}</h2>
                    </div>
                </div>
            </div>



            </>
        );
}
export default WandrrrDetail;
