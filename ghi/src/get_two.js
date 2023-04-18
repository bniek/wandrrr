import React, { useState } from 'react';

function GetOne() {
    const [wandrrrPost, setWandrrrPost] = useState([]);
    const wandrrrs_id = 1
    const fetchData = async () => {

        const url = `http://localhost:8000/wandrrrs/${wandrrrs_id}`
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setWandrrrPost([data]);

        }
    };


    return (
        <div className="posts">
            {wandrrrPost.filter(post => {
                return (post.wandrrrs_id)
            }).map(post => {
                return (
                    <div className="post">{post.title}</div>

                );


            })}

        </div>

    );
}

export default GetOne;


<div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={wandrrr.photos01} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={wandrrr.photos02} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>







<button className="btn btn-secondary">Button</button>
            <div className='wandrrrPost'>
                <h1>text</h1>
<button className="btn btn-accent">Button</button>
                <h1>{wandrrr.title}</h1>
                <h2>{wandrrr.timestamp}</h2>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={wandrrr.photos01} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={wandrrr.photos02} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={wandrrr.photos01} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src={wandrrr.photos02} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>

            </div>




onError={(e) => { e.target.onerror = null; e.target.src = wandrrr.photos01; }}
