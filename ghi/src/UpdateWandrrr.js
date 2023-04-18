import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BASE_URL = 'http://localhost:8000'; // replace with backend API base URL

const getPost = async (id) => {
  const response = await fetch(`${BASE_URL}/wandrrrs/${id}`);
  const data = await response.json();
  return data;
};

const updatePost = async (id, post) => {
  const response = await fetch(`${BASE_URL}/wandrrrs/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
  const data = await response.json();
  return data;
};


function UpdateWandrrr() {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const [formValues, setFormValues] = useState({});

    useEffect(() => {
      async function fetchPost() {
        const response = await getPost(id); // fetch the post data from the server
        setPost(response.data); // set the post state with the fetched data
        setFormValues(response.data); // set the form values with the fetched data
        }
        fetchPost();
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
      }


    const handleSubmit = async (event) => {
        event.preventDefault();
        await updatePost(id, formValues); // send the updated post data to the server
      };


    return (
        <div className="m-auto py-20">
              <form className="max-w-xl m-auto py-10 mt-10 px-12 border" onSubmit={handleSubmit} id="create-wandrrr-form">
                <div>
                  <label className="py-2" htmlFor="title">Title</label>
                  <input value={formValues.title} onChange={handleChange} placeholder="The best day of my life" required type="text" name="title" id="title" className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700" />
                </div>

                <div className="form-floating mb-3">
                  <label className="py-2" htmlFor="start_date">Start date</label>
                  <input value={formValues.stateDate} onChange={handleChange} placeholder="Your Wandrrr's start date" required type="date" name="start_date" id="start_date" className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700" />
                </div>
                <div className="form-floating mb-3">
                  <label htmlFor="end_date">End date </label>
                  <input value={formValues.endDate} onChange={handleChange} placeholder="Your Wandrrr's end date" type="date" name="end_date" id="end_date" className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700" />

                </div>
                <div className="form-floating mb-3">
                  <label htmlFor="location">Location</label>
                  <input value={formValues.location} onChange={handleChange} placeholder="Tokyo, Japan" required type="text" name="location" id="location" className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700" />

                </div>
                <div className="mb-3">
                  <label htmlFor="Description">Description</label>
                  <textarea value={formValues.description} onChange={handleChange} required className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700" id="description" rows="6" name="description" ></textarea>
                </div>
                <div className="form-floating mb-3">
                  <label htmlFor="mood">Mood</label>
                  <input value={formValues.mood} onChange={handleChange} placeholder="🥳"  type="text" name="mood" id="mood" className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700" />

                </div>
                <div className="form-floating mb-3">
                  <label htmlFor="companion">Companions</label>
                  <input value={formValues.companion} onChange={handleChange} placeholder="Bennie, Charlene, Elaine, and Sinlin"  type="text" name="companion" id="companion" className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700" />

                </div>
                <div className="form-floating mb-3">
                  <label htmlFor="companion_dropdown">Companions</label>
                  <input value={formValues.companionDropdown} onChange={handleChange} placeholder="👯‍♀️👯‍♀️"  type="text" name="companion_dropdown" id="companion_dropdown" className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700" />

                </div>
                <div className="form-floating mb-3">
                  <label htmlFor="weather">Weather</label>
                  <input value={formValues.weather} onChange={handleChange} placeholder="🌧️"  type="text" name="weather" id="weather" className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700" />
                </div>
                <div className="form-floating mb-3">
                  <label htmlFor="rating">Rating</label>
                  <select value={formValues.rating} onChange={handleChange} id="rating" name="rating" className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700">
                    <option value="">How would you rate this Wandrrr?</option>
                    <option value="1">💔</option>
                    <option value="2">😞</option>
                    <option value="3">😐</option>
                    <option value="4">🙂</option>
                    <option value="5">🥰</option>
                  </select>
                </div>
                <div className="form-floating mb-3">
                  <label htmlFor="photos01">Cover photo         </label>
                  <input value={formValues.photos01} onChange={handleChange} required type="file" name="photos01" id="photos01" className="file-input file-input-bordered file-input-accent w-full max-w-xs" />

                </div>
                <div className="form-floating mb-3">
                  <label htmlFor="photos02">Another picture</label>
                  <input value={formValues.photos02} onChange={handleChange}  type="file" name="photos02" id="photos02" className="file-input file-input-bordered file-input-accent w-full max-w-xs" />

                </div>
                <div className="form-floating mb-3">
                  <label htmlFor="photos03">Another picture</label>
                  <input value={formValues.photos03} onChange={handleChange}  type="file" name="photos03" id="photos03" className="file-input file-input-bordered file-input-accent w-full max-w-xs" />

                </div>
                <div className="form-floating mb-3">
                  <label htmlFor="photos04">Another picture</label>
                  <input value={formValues.photos04} onChange={handleChange}  type="file" name="photos04" id="photos04" className="file-input file-input-bordered file-input-accent w-full max-w-xs" />

                </div>
                <div className="form-floating mb-3">
                  <label htmlFor="photos05">Another picture</label>
                  <input value={formValues.photos05} onChange={handleChange}  type="file" name="photos05" id="photos05" className="file-input file-input-bordered file-input-accent w-full max-w-xs" />
                </div>

                <button className="mt-4 w-full bg-gray-400 hover:bg-gray-600 text-white border py-3 px-6 font-semibold text-md rounded" type="submit">Create!</button>
              </form>
        </div>
      );
}
export default UpdateWandrrr;
