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
                    <div className="post">{post.wandrrrs_id}</div>

                );


            })}

        </div>

    );
}

export default GetOne;




// import React, { useState, useEffect } from 'react';

// function GetOne() {
//     const [wandrrrPost, setWandrrrPost] = useState([]);
//     const fetchData = async () => {
//         const url = `http://localhost:8000/wandrrrs/`
//         const response = await fetch(url);
//         if (response.ok) {
//             const data = await response.json();
//             setWandrrrPost([data]);

//         }
//     };

//     useEffect(()=> {
//         fetchData();
//     }, []);

//     const getById = async (wandrrrs_id=id) => {
//         const idUrl = `http://localhost:8000/wandrrrs/${wandrrrs_id}`;
//         const response = await fetch(idUrl)
//     }





//     return (
//         <div className="posts">
//             {wandrrrPost.filter(post => {
//                 return (post.wandrrrs_id)
//             }).map(post => {
//                 return (
//                     <div className="post">{post.wandrrrs_id}</div>

//                 );


//             })}

//         </div>

//     );
// }

// export default GetOne;
