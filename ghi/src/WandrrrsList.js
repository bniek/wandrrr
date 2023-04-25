import React, { useState, useEffect } from "react";
import calendar_clock from "./images/calendar_clock.png";
import location from "./images/location.png"
import { Link } from "react-router-dom"


function WandrrrsList() {
    const [wandrrrs, setWandrrrs] = useState([]);

    useEffect(() => {
        const fetchAllWandrrrs = async () => {
            const url = `${process.env.REACT_APP_USER_SERVICE_API_HOST}/wandrrrs`
            const fetchConfig = {
                method: "get",
                credentials: "include"
            }
            const response = await fetch(url, fetchConfig);
            if (response.ok) {
                const data = await response.json();
                setWandrrrs(data);
            }
        }

        fetchAllWandrrrs();

    }, []);

    return (
        <div
        className="w-full py-16 px-4"
        style={{
            margin: "auto",
            width: "95vw",
            alignItems: "center",
            justifyContent: "center",
            display: "flex"
            }}
        >
            {wandrrrs.length === 0 ? (
                <div className="flex flex-col space-y-20 place-items-center">
                    <div>
                        <p>Seems like you do not have a post</p>
                    </div>
                    <div className="content-center">
                        <a href="/wandrrr/new">
                            <button className="btn btn-primary gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                Create your first post
                            </button>
                        </a>
                    </div>
                </div>
            ) : (
                <div className="have-post max-w-[1240px]">
                    {React.Children.toArray(
                        wandrrrs.map((wandrrr) => {
                            const options = {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                            };
                            return (
                                <Link to={`/wandrrrs/${wandrrr.wandrrrs_id}`} className="card-link">
                                    <div
                                    className="card card-side bg-base-100 shadow-xl glass mx-auto grid md:grid-cols-3 hover:bg-neutral"
                                    style={{
                                        margin: "30px",
                                        alignItems: "center",
                                        }}
                                    >
                                        <div className="card-image">
                                            <img
                                            className="w-[500px] mx-auto my-4"
                                            style={{
                                                height: "300px",
                                                maxWidth: "100%",
                                                width: "300px",
                                                borderRadius: "25px",
                                                margin: "20px",
                                                objectFit: "cover",
                                            }}
                                            src={wandrrr.photos01}
                                            alt="cover"
                                            />
                                        </div>
                                        <div className="card-body col-span-2">
                                            <h1
                                            style={{
                                                fontSize: 60,
                                                fontWeight: "lighter",
                                                letterSpacing: "0.1em",
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                textTransform: "uppercase"
                                                }}
                                            >
                                                {wandrrr.location}
                                            </h1>
                                            <div
                                            className="card-title"
                                            style={{
                                                fontSize: 35,
                                                fontWeight: 400,
                                                letterSpacing: "0.05em"
                                                }}
                                            >
                                                <span>
                                                    <img
                                                    src={location}
                                                    alt={location}
                                                    style={{
                                                        width: "1em",
                                                        height: "1em",
                                                        display: "inline-block",
                                                        marginRight: "0.1em"
                                                    }}
                                                    />
                                                </span>
                                                <span className="title">
                                                {wandrrr.title}
                                                </span>
                                            </div>
                                            <div className="card-date" style={{marginTop: "1em"}}>
                                                <span>
                                                    <img
                                                    src={calendar_clock}
                                                    alt={calendar_clock}
                                                    style={{
                                                        width: "1em",
                                                        height: "1em",
                                                        display: "inline-block",
                                                        marginRight: "0.5em",
                                                        marginLeft: "0.5em",
                                                        marginBottom: "4px",
                                                    }}
                                                    />
                                                </span>
                                                <span className="start-date">{new Date(wandrrr.start_date).toLocaleDateString("en-US", options)}</span>
                                                <span className="dash"> - </span>
                                                <span className="start-date">{new Date(wandrrr.end_date).toLocaleDateString("en-US", options)}</span>
                                            </div>
                                            <div className="flex-auto">
                                                <div>{wandrrr.description}</div>
                                            </div>
                                            <div className="card-actions justify-end">
                                                <p style={{textAlign: "right", fontSize: "10px"}}>
                                                    <span>{wandrrr.datestamp}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })
                    )}
                </div>
            )}
        </div>
    );
}

export default WandrrrsList;
