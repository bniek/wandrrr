import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "@galvanize-inc/jwtdown-for-react";

const BASE_URL = "https://wandrrr-fast-api.dec-pt-1.mod3projects.com"; // replace with backend API base URL

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
  const fetchData = async () => {
    const url = "http://localhost:8000/token";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setOwnerId(data.id);
    }
  };

  const navigate = useNavigate();

  const { state } = useLocation();

  const [formValues, setFormValues] = useState({});

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
    await updatePost(formValues.wandrrrs_id, formValues, token); // send the updated post data to the server
    // redirect here to whichever page you want
    navigate(`/wandrrrs/${formValues.wandrrrs_id}`);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const fetchWandrrrDetails = async () => {
      const url = `${process.env.REACT_APP_USER_SERVICE_API_HOST}/wandrrrs/${state.id}`;
      const response = await fetch(url, { credentials: "include" });

      if (response.ok) {
        const data = await response.json();

        setFormValues(data);
      } else {
        window.location.href = "/error";
      }
    };

    if (state.id) fetchWandrrrDetails();
  }, [state]);

  return (
    <div className="m-auto py-20">
      <form
        className="bg-[#AFDAFE] rounded-lg shadow-lg max-w-xl m-auto py-10 mt-10 px-12 border"
        onSubmit={handleSubmit}
        id="update-wandrrr-form"
      >
        <div className="form-floating mb-3 py-20">
          <h1
            className="text-6xl text-[#FFFFFF] text-center"
            style={{ fontFamily: "Instrument Serif" }}
          >
            Make changes!
          </h1>
        </div>
        <div>
          <label className="py-2 text-[#FFFFFF]" htmlFor="title">
            Title*
          </label>
          <input
            value={formValues.title}
            onChange={handleChange}
            required
            type="text"
            name="title"
            id="title"
            className="bg-[#FFFFFF] border-solid border-[#FFFFFF] border py-2 px-4 w-full rounded text-gray-700"
          />
        </div>

        <div className="form-floating mb-3">
          <label className="py-2 text-[#FFFFFF]" htmlFor="start_date">
            Start date*
          </label>
          <input
            value={formValues.start_date}
            onChange={handleChange}
            required
            type="date"
            name="start_date"
            id="start_date"
            className="bg-[#FFFFFF] border-solid border-[#FFFFFF] border py-2 px-4 w-full rounded text-gray-700"
          />
        </div>
        <div className="form-floating mb-3">
          <label className="py-2 text-[#FFFFFF]" htmlFor="end_date">
            End date*
          </label>
          <input
            value={formValues.end_date}
            onChange={handleChange}
            type="date"
            name="end_date"
            id="end_date"
            className="bg-[#FFFFFF] border-solid border-[#FFFFFF] border py-2 px-4 w-full rounded text-gray-700"
          />
        </div>
        <div className="form-floating mb-3">
          <label className="py-2 text-[#FFFFFF]" htmlFor="location">
            Location*
          </label>
          <input
            value={formValues.location}
            onChange={handleChange}
            required
            type="text"
            name="location"
            id="location"
            className="bg-[#FFFFFF] border-solid border-[#FFFFFF] border py-2 px-4 w-full rounded text-gray-700"
          />
        </div>
        <div className="mb-3">
          <label className="py-2 text-[#FFFFFF]" htmlFor="Description">
            Description*
          </label>
          <textarea
            value={formValues.description}
            onChange={handleChange}
            required
            className="bg-[#FFFFFF] border-solid border-[#FFFFFF] border py-2 px-4 w-full rounded text-gray-700"
            id="description"
            rows="6"
            name="description"
          ></textarea>
        </div>
        <div className="form-floating mb-3">
          <label className="py-2 text-[#FFFFFF]" htmlFor="mood">
            Mood
          </label>
          <select
            value={formValues.mood}
            onChange={handleChange}
            id="mood"
            name="mood"
            className="bg-[#FFFFFF] border-solid border-[#FFFFFF] border py-2 px-4 w-full rounded text-gray-700"
          >
            <option value="0"></option>
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
          <label className="py-2 text-[#FFFFFF]" htmlFor="companion">
            Companions
          </label>
          <input
            value={formValues.companion}
            onChange={handleChange}
            type="text"
            name="companion"
            id="companion"
            className="bg-[#FFFFFF] border-solid border-[#FFFFFF] border py-2 px-4 w-full rounded text-gray-700"
          />
        </div>
        <div className="form-floating mb-3">
          <select
            value={formValues.companion_dropdown}
            onChange={handleChange}
            id="companion_dropdown"
            name="companion_dropdown"
            className="bg-[#FFFFFF] border-solid border-[#FFFFFF] border py-2 px-4 w-full rounded text-gray-700"
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
          <label className="py-2 text-[#FFFFFF]" htmlFor="weather">
            Weather
          </label>
          <select
            value={formValues.weather}
            onChange={handleChange}
            id="weather"
            name="weather"
            className="bg-[#FFFFFF] border-solid border-[#FFFFFF] border py-2 px-4 w-full rounded text-gray-700"
          >
            <option value=""></option>
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
          <label className="py-2 text-[#FFFFFF]" htmlFor="rating">
            Rating
          </label>
          <select
            value={formValues.rating}
            onChange={handleChange}
            id="rating"
            name="rating"
            className="bg-[#FFFFFF] border-solid border-[#FFFFFF] border py-2 px-4 w-full rounded text-gray-700"
          >
            <option value=""></option>
            <option value="1">⭐️</option>
            <option value="2">⭐️⭐️</option>
            <option value="3">⭐️⭐️⭐️</option>
            <option value="4">⭐️⭐️⭐️⭐️</option>
            <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
          </select>
        </div>

        <div className="form-floating mb-3">
          <label className="py-2 text-[#FFFFFF]" htmlFor="photos01">
            Cover photo
          </label>
          <input
            value={formValues.photos01}
            onChange={handleChange}
            placeholder="URL"
            required
            type="text"
            name="photos01"
            id="photos01"
            className="bg-[#FFFFFF] border-solid border-[#FFFFFF] border py-2 px-4 w-full rounded text-gray-700"
          />
        </div>
        <div className="form-floating mb-3">
          <label className="py-2 text-[#FFFFFF]" htmlFor="photos02">
            Another photo
          </label>
          <input
            value={formValues.photos02}
            onChange={handleChange}
            placeholder="URL"
            type="text"
            name="photos02"
            id="photos02"
            className="bg-[#FFFFFF] border-solid border-[#FFFFFF] border py-2 px-4 w-full rounded text-gray-700"
          />
        </div>
        <div className="form-floating mb-3">
          <label className="py-2 text-[#FFFFFF]" htmlFor="photos03">
            Another photo
          </label>
          <input
            value={formValues.photos03}
            onChange={handleChange}
            placeholder="URL"
            type="text"
            name="photos03"
            id="photos03"
            className="bg-[#FFFFFF] border-solid border-[#FFFFFF] border py-2 px-4 w-full rounded text-gray-700"
          />
        </div>
        <div className="form-floating mb-3">
          <label className="py-2 text-[#FFFFFF]" htmlFor="photos04">
            Another photo
          </label>
          <input
            value={formValues.photos04}
            onChange={handleChange}
            placeholder="URL"
            type="text"
            name="photos04"
            id="photos04"
            className="bg-[#FFFFFF] border-solid border-[#FFFFFF] border py-2 px-4 w-full rounded text-gray-700"
          />
        </div>
        <div className="form-floating mb-3">
          <label className="py-2 text-[#FFFFFF]" htmlFor="photos05">
            Another photo
          </label>
          <input
            value={formValues.photos05}
            onChange={handleChange}
            placeholder="URL"
            type="text"
            name="photos05"
            id="photos05"
            className="bg-[#FFFFFF] border-solid border-[#FFFFFF] border py-2 px-4 w-full rounded text-gray-700"
          />
        </div>
        <button
          className="mt-4 w-full bg-[#AFDAFE] hover:text-[#AFDAFE] hover:bg-[#FFFFFF] text-[#FFFFFF] rounded-lg border-2 border-[#FFFFFF] py-3 px-6 font-semibold text-md rounded"
          type="submit"
        >
          Save changes!
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
