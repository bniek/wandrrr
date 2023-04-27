import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useContext } from 'react';
import { AuthContext } from '@galvanize-inc/jwtdown-for-react';
import { useNavigate } from 'react-router-dom';



function Modal({children}) {
    return (
        <div className="relative z-50">
            <div className="fixed inset-0 bg-black/10" aria-hidden="true"/>

            <div className="fixed inset-0 flex items-center justify-center p-4">
                <div className="flex min-h-full items-center justify-center">
                    {children}
                </div>
            </div>
        </div>
    );
}


function WandrrrDetail() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate();


  const { wandrrrs_id } = useParams();
  const { token } = useContext (AuthContext);
  const [wandrrr, setWandrrr] = useState([]);
  const [moods, setMoods] = useState("");
  const [ratings, setRatings] = useState("");
  const [companions, setCompanions] = useState("");
  const [weathers, setWeathers] = useState("");


  async function deleteWandrrr(wandrrrs_id) {
    const deleteUrl = `${process.env.REACT_APP_USER_SERVICE_API_HOST}/wandrrrs/${wandrrrs_id}`;
    const deleteResponse = await fetch(deleteUrl, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    setOpen(!open)

    if (deleteResponse.ok) {
      navigate('/wandrrrs');
    }
  }

   useEffect(() => {
    const fetchWandrrrDetails = async () => {
      const url = `${process.env.REACT_APP_USER_SERVICE_API_HOST}/wandrrrs/${wandrrrs_id}`;
      const response = await fetch(url, { credentials: "include" });

      if (response.ok) {
        const data = await response.json();
        setWandrrr(data);
        if (data.mood === "0") {
          setMoods("😶");
        }
        if (data.mood === "1") {
          setMoods("🙂");
        }
        if (data.mood === "2") {
          setMoods("🥰");
        }
        if (data.mood === "3") {
          setMoods("😇");
        }
        if (data.mood === "4") {
          setMoods("🤣");
        }
        if (data.mood === "5") {
          setMoods("🥳");
        }
        if (data.mood === "6") {
          setMoods("🤤");
        }
        if (data.mood === "7") {
          setMoods("🤒");
        }
        if (data.mood === "8") {
          setMoods("🥹");
        }
        if (data.mood === "9") {
          setMoods("😅");
        }
        if (data.mood === "10") {
          setMoods("😒");
        }
        if (data.mood === "11") {
          setMoods("😞");
        }
        if (data.mood === "12") {
          setMoods("😕");
        }
        if (data.mood === "13") {
          setMoods("😢");
        }
        if (data.mood === "14") {
          setMoods("😡");
        }
        if (data.mood === "15") {
          setMoods("🤯");
        }
        if (data.mood === "16") {
          setMoods("🤢");
        }
        if (data.mood === "17") {
          setMoods("😴");
        }
        if (data.mood === "18") {
          setMoods("🥱");
        }
        if (data.mood === "19") {
          setMoods("💀");
        }

        if (data.companion_dropdown === "dog1") {
          setCompanions("🐶");
        }
        if (data.companion_dropdown === "dog2") {
          setCompanions("🦮");
        }
        if (data.companion_dropdown === "dog3") {
          setCompanions("🐕‍🦺");
        }
        if (data.companion_dropdown === "dog4") {
          setCompanions("🐩");
        }
        if (data.companion_dropdown === "cat2") {
          setCompanions("🐱");
        }
        if (data.companion_dropdown === "cat2") {
          setCompanions("🐈");
        }
        if (data.companion_dropdown === "cat3") {
          setCompanions("🐈‍⬛");
        }
        if (data.companion_dropdown === "baby1") {
          setCompanions("👶");
        }
        if (data.companion_dropdown === "bestfriend1") {
          setCompanions("👯‍♂️");
        }
        if (data.companion_dropdown === "bestfriend2") {
          setCompanions("👯‍♂️");
        }
        if (data.companion_dropdown === "bestfriend3") {
          setCompanions("👫");
        }
        if (data.companion_dropdown === "bestfriend4") {
          setCompanions("👭");
        }
        if (data.companion_dropdown === "bestfriend5") {
          setCompanions("👬");
        }
        if (data.companion_dropdown === "family1") {
          setCompanions("👨‍👨‍👦");
        }
        if (data.companion_dropdown === "family2") {
          setCompanions("👩‍👩‍👦");
        }
        if (data.companion_dropdown === "family3") {
          setCompanions("👨‍👩‍👦‍👦");
        }
        if (data.companion_dropdown === "family4") {
          setCompanions("👪");
        }
        if (data.companion_dropdown === "family5") {
          setCompanions("👩‍👦");
        }
        if (data.companion_dropdown === "family6") {
          setCompanions("👨‍👦");
        }
        if (data.companion_dropdown === "couple1") {
          setCompanions("👩‍❤️‍👨");
        }
        if (data.companion_dropdown === "couple2") {
          setCompanions("👩‍❤️‍👩");
        }
        if (data.companion_dropdown === "couple3") {
          setCompanions("💑");
        }
        if (data.companion_dropdown === "couple4") {
          setCompanions("👨‍❤️‍👨");
        }
        if (data.weather === "rainy") {
          setWeathers("🌧️");
        }
        if (data.weather === "sunny") {
          setWeathers("🌞");
        }
        if (data.weather === "cloudy") {
          setWeathers("🌤️");
        }
        if (data.weather === "tornado") {
          setWeathers("🌪️");
        }
        if (data.weather === "stormy") {
          setWeathers("⛈️");
        }
        if (data.weather === "snowy") {
          setWeathers("⛄️");
        }
        if (data.weather === "windy") {
          setWeathers("🌬️");
        }
        if (data.weather === "foggy") {
          setWeathers("🌫️");
        }

        if (data.rating === "1") {
          setRatings("⭐️");
        }
        if (data.rating === "2") {
          setRatings("⭐️⭐️");
        }
        if (data.rating === "3") {
          setRatings("⭐️⭐️⭐️");
        }
        if (data.rating === "4") {
          setRatings("⭐️⭐️⭐️⭐️");
        }
        if (data.rating === "5") {
          setRatings("⭐️⭐️⭐️⭐️⭐️");
        }
      } else {
        window.location.href = "/error";
      }
    };
    fetchWandrrrDetails();
  }, [wandrrrs_id]);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", paddingLeft: "8px" }}>
        <div align="center" className="wandrrrPost">
          <h1 className=""
            style={{
              fontFamily: 'Instrument Serif',
              fontSize: 70,
              fontWeight: "lighter",
              letterSpacing: "0.1em",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textTransform: "uppercase",
            }}
          >
            {wandrrr.title}
          </h1>

          <h2 className="text-xs py-4">
            {new Date(wandrrr.start_date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
            {wandrrr.end_date &&
              ` - ${new Date(wandrrr.end_date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}`}
          </h2>

          <div align="center" className="carousel" style={{ width: "700px" }}>
            <div id="slide1" className="carousel-item relative w-full">
              <img
                  style={{
                    width: "auto",
                    height: 700,
                    display: "block",
                    margin: "0 auto",
                    borderRadius: '15px'
                  }}
                src={wandrrr.photos01}
                className="w-full"
                alt="photo1"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <div className="btn btn-circle"></div>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            {wandrrr.photos02 && (
              <div id="slide2" className="carousel-item relative w-full">
                <img
                  style={{
                    width: "auto",
                    height: 700,
                    display: "block",
                    margin: "0 auto",
                    borderRadius: '15px'
                  }}
                  src={wandrrr.photos02}
                  className="w-full"
                  alt="photo2"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            )}
            {wandrrr.photos03 && (
              <div id="slide3" className="carousel-item relative w-full">
                <img
                  style={{
                    width: "auto",
                    height: 700,
                    display: "block",
                    margin: "0 auto",
                    borderRadius: '15px'
                  }}
                  src={wandrrr.photos03}
                  className="w-full"
                  alt="photo3"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide4" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            )}
            {wandrrr.photos04 && (
              <div id="slide4" className="carousel-item relative w-full">
                <img
                  style={{
                    width: "auto",
                    height: 700,
                    display: "block",
                    margin: "0 auto",
                    borderRadius: '15px'
                  }}
                  src={wandrrr.photos04}
                  className="w-full"
                  alt="photo4"
                />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide5" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            )}
            {wandrrr.photos05 && (
              <div id="slide5" className="carousel-item relative w-full">
                <img
                  style={{
                    width: "auto",
                    height: 700,
                    display: "block",
                    margin: "0 auto",
                    borderRadius: '15px'
                  }}
                  src={wandrrr.photos05}
                  className="w-full"
                  alt="photo5"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            )}
          </div>
          <div class="flex justify-center flex-wrap gap-2 py-5">
            {wandrrr.location && (
              <span class="text-sm inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium text-[#FFFFFF] bg-[#AFDAFE]">
                {wandrrr.location}
              </span>
            )}
            {(companions || wandrrr.companion) && (
              <span class="text-sm inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium text-[#FFFFFF] bg-[#AFDAFE]">
                With {companions} {wandrrr.companion}
              </span>
            )}
            {moods && (
              <span class="text-sm inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium text-[#FFFFFF] bg-[#AFDAFE]">
                Mood: {moods}
              </span>
            )}
            {weathers && (
              <span class="text-sm inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium text-[#FFFFFF] bg-[#AFDAFE]">
                Weather: {weathers}
              </span>
            )}
            {ratings && (
              <span class="text-sm inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-[#AFDAFE]">
                {ratings}
              </span>
            )}
          </div>
          <div style={{ maxWidth: "500px", margin: "0 auto" }}>
            <div className="py-5" style={{ textAlign: "left", width: "100%", maxWidth: "650px", paddingLeft: "8px" }}>
              <h2 className="text-sm">{wandrrr.description}</h2>
            </div>
          </div>
          <div className="relative">
            <div className="flex flex-col items-center my-24">
                <button onClick={() => setOpen(!open)} className="bg-neutral-400 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Delete</button>
            </div>
            {open ? <Modal>
                <div className="flex flex-col gap-2 bg-white px-6 pb-6 py-2 rounded-lg">
                    <h1 className="text-lg text-black mt-2 pr-48">Delete Wandrrr</h1>
                    <hr/>
                    <div className="flex flex-col gap-2">
                        <p className="py-6">Are you sure you want to delete this forever?</p>
                    </div>
                    <hr/>
                    <div className="flex flex-row gap-2 ">
                        <button onClick={() => setOpen(!open)} className="flex-1 bg-[#AFDAFE] text-white active:bg-neutral-400 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Cancel</button>
                        <button onClick={() => deleteWandrrr(wandrrrs_id)} className="flex-1 bg-neutral-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Delete</button>
                    </div>
                </div>
            </Modal> : null}
          </div>

        </div>
      </div>
    </>
  );
}
export default WandrrrDetail;
