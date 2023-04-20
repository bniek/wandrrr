import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import useToken, { AuthContext } from "@galvanize-inc/jwtdown-for-react";

const BASE_URL = "http://localhost:8000"; // replace with backend API base URL

const getPost = async (wandrrrs_id, token) => {
  const response = await fetch(`${BASE_URL}/wandrrrs/${wandrrrs_id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
};

const updatePost = async (wandrrrs_id, post, token) => {
  const response = await fetch(`${BASE_URL}/wandrrrs/${wandrrrs_id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  const data = await response.json();
  return data;
};

function UpdateWandrrr(props) {
  const { token } = useContext(AuthContext);
  const [ownerId, setOwnerId] = useState("");
  const { id } = useParams();
  const fetchData = async () => {
    const url = "http://localhost:8000/token";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setOwnerId(data.id);
      console.log(data);
    }
  };
  // console.log(useParams());

  // const { id } = useParams();
  const queryParams = new URLSearchParams(window.location.search);

  const [post, setPost] = useState({});
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    async function fetchPost() {
      const id = queryParams.get("id");
      console.log(id, token);
      if (!id || !token) throw new Error("ID undefined");
      const response = await getPost(id, token); // fetch the post data from the server with the token
      setPost(response); // set the post state with the fetched data
      setFormValues(response); // set the form values with the fetched data
    }
    fetchPost();
  }, [token]);

  const handleOwnerIdChange = (event) => {
    const value = event.target.value;
    setOwnerId(value);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const id = queryParams.get("id");
    await updatePost(id, formValues, token); // send the updated post data to the server
    // redirect here to whichever page you want
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="m-auto py-20">
      <form
        className="max-w-xl m-auto py-10 mt-10 px-12 border"
        onSubmit={handleSubmit}
        id="create-wandrrr-form"
      >
        <div>
          <label className="py-2" htmlFor="title">
            Title
          </label>
          <input
            value={formValues.title}
            onChange={handleChange}
            required
            type="text"
            name="title"
            id="title"
            className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          />
        </div>

        <div className="form-floating mb-3">
          <label className="py-2" htmlFor="start_date">
            Start date
          </label>
          <input
            value={formValues.stateDate}
            onChange={handleChange}
            required
            type="date"
            name="start_date"
            id="start_date"
            className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          />
        </div>
        <div className="form-floating mb-3">
          <label htmlFor="end_date">End date </label>
          <input
            value={formValues.endDate}
            onChange={handleChange}
            type="date"
            name="end_date"
            id="end_date"
            className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          />
        </div>
        <div className="form-floating mb-3">
          <label htmlFor="location">Location</label>
          <input
            value={formValues.location}
            onChange={handleChange}
            required
            type="text"
            name="location"
            id="location"
            className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Description">Description</label>
          <textarea
            value={formValues.description}
            onChange={handleChange}
            required
            className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
            id="description"
            rows="6"
            name="description"
          ></textarea>
        </div>
        <div className="form-floating mb-3">
          <label htmlFor="mood">Mood</label>
          <select
            value={formValues.mood}
            onChange={handleChange}
            id="mood"
            name="mood"
            className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          >
            <option value="0">😶</option>
            <option value="1">🙂</option>
            <option value="2">🥰</option>
            <option value="3">😇</option>
            <option value="4">🤣</option>
            <option value="5">🥳</option>
            <option value="6">🤤</option>
            <option value="7">🤒</option>
            <option value="8">🥹</option>
            <option value="9">😅</option>
            <option value="10">😒</option>
            <option value="11">😞</option>
            <option value="12">😕</option>
            <option value="13">😢</option>
            <option value="14">😡</option>
            <option value="15">🤯</option>
            <option value="16">🤢</option>
            <option value="17">😴</option>
            <option value="18">🥱</option>
            <option value="19">💀</option>
          </select>
        </div>
        <div className="form-floating mb-3">
          <label htmlFor="companion">Companions</label>
          <input
            value={formValues.companion}
            onChange={handleChange}
            type="text"
            name="companion"
            id="companion"
            className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          />
        </div>
        <div className="form-floating mb-3">
          <select
            value={formValues.companionDropdown}
            onChange={handleChange}
            id="companion_dropdown"
            name="companion_dropdown"
            className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          >
            <option value=""></option>
            <option value="dog1">🐶</option>
            <option value="dog2">🦮</option>
            <option value="dog3">🐕‍🦺</option>
            <option value="dog4">🐩</option>
            <option value="cat2">🐱</option>
            <option value="cat2">🐈</option>
            <option value="cat3">🐈‍⬛</option>
            <option value="baby1">👶</option>
            <option value="bestfriend1">👯‍♂️</option>
            <option value="bestfriend2">👯‍♂️</option>
            <option value="bestfriend3">👫</option>
            <option value="bestfriend4">👭</option>
            <option value="bestfriend5">👬</option>
            <option value="family1">👨‍👨‍👦</option>
            <option value="family2">👩‍👩‍👦</option>
            <option value="family3">👨‍👩‍👦‍👦</option>
            <option value="family4">👪</option>
            <option value="family5">👩‍👦</option>
            <option value="family6">👨‍👦</option>
            <option value="couple1">👩‍❤️‍👨</option>
            <option value="couple2">👩‍❤️‍👩</option>
            <option value="couple3">💑</option>
            <option value="couple4">👨‍❤️‍👨</option>
          </select>
        </div>
        <div className="form-floating mb-3">
          <label htmlFor="weather">Weather</label>
          <select
            value={formValues.weather}
            onChange={handleChange}
            id="weather"
            name="weather"
            className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          >
            <option value="">How was the weather?</option>
            <option value="rainy">🌧️</option>
            <option value="sunny">🌞</option>
            <option value="cloudy">🌤️</option>
            <option value="tornado">🌪️</option>
            <option value="stormy">⛈️</option>
            <option value="snowy">⛄️</option>
            <option value="windy">🌬️</option>
            <option value="foggy">🌫️</option>
          </select>
        </div>
        <div className="form-floating mb-3">
          <label htmlFor="rating">Rating</label>
          <select
            value={formValues.rating}
            onChange={handleChange}
            id="rating"
            name="rating"
            className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          >
            <option value="">How would you rate this Wandrrr?</option>
            <option value="1">⭐️</option>
            <option value="2">⭐️⭐️</option>
            <option value="3">⭐️⭐️⭐️</option>
            <option value="4">⭐️⭐️⭐️⭐️</option>
            <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
          </select>
        </div>

        <div className="form-floating mb-3">
          <label htmlFor="photos01">Cover photo</label>
          <input
            value={formValues.photos01}
            onChange={handleChange}
            placeholder="URL"
            required
            type="text"
            name="photos01"
            id="photos01"
            className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          />
        </div>
        <div className="form-floating mb-3">
          <label htmlFor="photos02">Another photo</label>
          <input
            value={formValues.photos02}
            onChange={handleChange}
            placeholder="URL"
            type="text"
            name="photos02"
            id="photos02"
            className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          />
        </div>
        <div className="form-floating mb-3">
          <label htmlFor="photos03">Another photo</label>
          <input
            value={formValues.photos03}
            onChange={handleChange}
            placeholder="URL"
            type="text"
            name="photos03"
            id="photos03"
            className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          />
        </div>
        <div className="form-floating mb-3">
          <label htmlFor="photos04">Another photo</label>
          <input
            value={formValues.photos04}
            onChange={handleChange}
            placeholder="URL"
            type="text"
            name="photos04"
            id="photos04"
            className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          />
        </div>
        <div className="form-floating mb-3">
          <label htmlFor="photos05">Another photo</label>
          <input
            value={formValues.photos05}
            onChange={handleChange}
            placeholder="URL"
            type="text"
            name="photos05"
            id="photos05"
            className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          />
        </div>
        <button
          className="mt-4 w-full bg-gray-400 hover:bg-gray-600 text-white border py-3 px-6 font-semibold text-md rounded"
          type="submit"
        >
          Update!
        </button>
        <input
          onChange={handleOwnerIdChange}
          value={ownerId}
          type="hidden"
          name="owner_id"
          id="owner_id"
        />
      </form>
    </div>
  );
}
export default UpdateWandrrr;
