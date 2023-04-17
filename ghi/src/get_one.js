import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function WandrrrDetail() {
    const [wandrrr, setWandrrr] = useState([]);
    const { wandrrrs_id } = useParams();
    const [moods, setMoods] = useState("");
    const [ratings, setRatings] = useState("");

    useEffect(() => {
        const fetchWandrrrDetails = async () => {
            const url = `${process.env.REACT_APP_WANDRRR_API_HOST}/wandrrrs/${wandrrrs_id}`;
            // const fetchConfig = {
            //     method: "get",
            //     // headers: {
            //     //     Authorization: `Bearer ${token}`,
            //     // },
            // }
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
                    setRatings("⭐️")
                }
                if (data.rating === 2 ){
                    setRatings("⭐️⭐️")
                }
                if (data.rating === 3){
                    setRatings("⭐️⭐️⭐️")
                }
                if (data.rating === 4 ){
                    setRatings("⭐️⭐️⭐️⭐️")
                }
                if (data.rating === 5 ){
                    setRatings("⭐️⭐️⭐️⭐️⭐️")
                }
                if (data.photos03 === null) {
                    return document.getElementById('slide1');
                }else{

                }
            }
        }
        fetchWandrrrDetails();

    }, [wandrrrs_id]);



    function skip03() {

        return document.getElementById('#slide1');

    }




        return         (
            <>
            <div>
                <div className='wandrrrPost'>

                    <h1>{wandrrr.title}</h1>
                    <h2>{wandrrr.timestamp}</h2>
                    <h2>{moods}</h2>
                    <h2>{ratings}</h2>
                    <div className="carousel w-full rounded-box">
                    <div id="slide1" className="carousel-item relative w-full" >
                        <img style={{ width: "auto", height: 600, display: "block", margin: "0 auto" }} src={wandrrr.photos01} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide5" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img style={{ width: "auto", height: 600, display: "block", margin: "0 auto" }} src={wandrrr.photos02} className="w-full" onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = wandrrr.photos01;
                        }} />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full" >
                        <img style={{ width: "auto", height: 600, display: "block", margin: "0 auto" }} src={wandrrr.photos03} className="w-full" onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = "none";
                        }}  />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2" >
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img
                            style={{ width: "auto", height: 600, display: "block", margin: "0 auto" }}
                            src={wandrrr.photos04}
                            className="w-full" onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = wandrrr.photos01;}}/>


                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                        </div>


                        </div>
                        <div id="slide5" className="carousel-item relative w-full">
                        <img style={{ width: "auto", height: 600, display: "block", margin: "0 auto" }} src={wandrrr.photos05} className="w-full" onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = wandrrr.photos01;
                        }} />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    </div>

                </div>
            </div>



            </>
        );
}
export default WandrrrDetail;
