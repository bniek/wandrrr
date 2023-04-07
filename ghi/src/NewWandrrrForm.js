import React, { useEffect, useState } from 'react';

function NewWandrrrForm() {
    const [title, setTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [mood, setMood] = useState('');
    const [companion, setCompanion] = useState('');
    const [companionDropdown, setCompanionDropdown] = useState('');
    const [weather, setWeather] = useState('');
    const [photos01, setPhotos01] = useState('');
    const [photos02, setPhotos02] = useState('');
    const [photos03, setPhotos03] = useState('');
    const [photos04, setPhotos04] = useState('');
    const [photos05, setPhotos05] = useState('');
    const [rating, setRating] = useState('');
    // const [timestamp, setTimestamp] = useState('');



    const handleTitleChange = (event) => {
        const value = event.target.value;
        setTitle(value);
      }

    const handleStartDateChange = (event) => {
        const value = event.target.value;
        setStartDate(value);
      }

    const handleEndDateChange = (event) => {
        const value = event.target.value;
        setEndDate(value);
      }
    const handleLocationChange = (event) => {
        const value = event.target.value;
        setLocation(value);
      }
    const handleDescriptionChange = (event) => {
        const value = event.target.value;
        setDescription(value);
      }

    const handleMoodChange = (event) => {
        const value = event.target.value;
        setMood(value);
      }

    const handleCompanionChange = (event) => {
        const value = event.target.value;
        setCompanion(value);
      }

    const handleCompanionDropdownChange = (event) => {
        const value = event.target.value;
        setCompanionDropdown(value);
      }

    const handleWeatherChange = (event) => {
        const value = event.target.value;
        setWeather(value);
      }

    const handlePhotos01Change = (event) => {
        const value = event.target.value;
        setPhotos01(value);
      }

    const handlePhotos02Change = (event) => {
        const value = event.target.value;
        setPhotos02(value);
      }

    const handlePhotos03Change = (event) => {
        const value = event.target.value;
        setPhotos03(value);
      }

    const handlePhotos04Change = (event) => {
        const value = event.target.value;
        setPhotos04(value);
      }

    const handlePhotos05Change = (event) => {
        const value = event.target.value;
        setPhotos05(value);
      }

      const handleRatingChange = (event) => {
        const value = event.target.value;
        setRating(value);
      }

      // const handleTimestampChange = (event) => {
      //   const value = event.target.value;
      //   setTimestamp(value);
      // }



    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.title = title;
        data.start_date = startDate;
        data.end_date = endDate;
        data.location = location;
        data.description = description;
        data.mood = mood;
        data.companion = companion;
        data.companion_dropdown = companionDropdown;
        data.weather = weather;
        data.photos01 = photos01;
        data.photos02 = photos02;
        data.photos03 = photos03;
        data.photos04 = photos04;
        data.photos05 = photos05;
        data.rating = rating;


        const wandrrrUrl = `http://localhost:8000/wandrrrs`;
        const fetchConfig = {
          method: 'post',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const response = await fetch(wandrrrUrl, fetchConfig);
        if (response.ok) {
          const newWandrrr = await response.json();
          console.log(newWandrrr);

          setTitle('');
          setStartDate('');
          setEndDate('');
          setLocation('');
          setDescription('');
          setMood('');
          setCompanion('');
          setCompanionDropdown('');
          setWeather('');
          setPhotos01('');
          setPhotos02('');
          setPhotos03('');
          setPhotos04('');
          setPhotos05('');
          setRating('');

        }
      }





    // useEffect(() => {
    //   fetchData();
    // }, []);

    return (
        <div className="m-auto py-20">
              <form className="max-w-xl m-auto py-10 mt-10 px-12 border" onSubmit={handleSubmit} id="create-wandrrr-form">
                <div>
                  <label className="py-2" htmlFor="title">Title</label>
                  <input onChange={handleTitleChange} placeholder="The best day of my life" required type="text" name="title" id="title" className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700" />
                </div>

                <div className="form-floating mb-3">
                  <label className="py-2" htmlFor="start_date">Start date</label>
                  <input onChange={handleStartDateChange} placeholder="Your Wandrrr's start date" required type="date" name="start_date" id="start_date" className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700" />

                </div>
                <div className="form-floating mb-3">
                  <label htmlFor="end_date">End date </label>
                  <input onChange={handleEndDateChange} placeholder="Your Wandrrr's end date" type="date" name="end_date" id="end_date" className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700" />

                </div>
                <div className="form-floating mb-3">
                  <label htmlFor="location">Location</label>
                  <input onChange={handleLocationChange} placeholder="Tokyo, Japan" required type="text" name="location" id="location" className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700" />

                </div>
                <div className="mb-3">
                  <label htmlFor="Description">Description</label>
                  <textarea onChange={handleDescriptionChange} required className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700" id="description" rows="6" name="description" ></textarea>
                </div>
                <div className="form-floating mb-3">
                  <label htmlFor="mood">Mood</label>
                  <input onChange={handleMoodChange} placeholder="🥳"  type="text" name="mood" id="mood" className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700" />

                </div>
                <div className="form-floating mb-3">
                  <label htmlFor="companion">Companions</label>
                  <input onChange={handleCompanionChange} placeholder="Bennie, Charlene, Elaine, and Sinlin"  type="text" name="companion" id="companion" className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700" />

                </div>
                <div className="form-floating mb-3">
                  <label htmlFor="companion_dropdown">Companions</label>
                  <input onChange={handleCompanionDropdownChange} placeholder="👯‍♀️👯‍♀️"  type="text" name="companion_dropdown" id="companion_dropdown" className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700" />

                </div>
                <div className="form-floating mb-3">
                  <label htmlFor="weather">Weather</label>
                  <input onChange={handleWeatherChange} placeholder="🌧️"  type="text" name="weather" id="weather" className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700" />
                </div>
                <div className="form-floating mb-3">
                  <label htmlFor="rating">Rating</label>
                  <input onChange={handleRatingChange} placeholder="10"  type="text" name="rating" id="rating" className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700" />
                </div>
                <div className="form-floating mb-3">
                  <label htmlFor="photos01">Cover photo         </label>
                  <input onChange={handlePhotos01Change} required type="file" name="photos01" id="photos01" className="file-input file-input-bordered file-input-accent w-full max-w-xs" />

                </div>
                <div className="form-floating mb-3">
                  <label htmlFor="photos02">Another picture</label>
                  <input onChange={handlePhotos02Change}  type="file" name="photos02" id="photos02" className="file-input file-input-bordered file-input-accent w-full max-w-xs" />

                </div>
                <div className="form-floating mb-3">
                  <label htmlFor="photos03">Another picture</label>
                  <input onChange={handlePhotos03Change}  type="file" name="photos03" id="photos03" className="file-input file-input-bordered file-input-accent w-full max-w-xs" />

                </div>
                <div className="form-floating mb-3">
                  <label htmlFor="photos04">Another picture</label>
                  <input onChange={handlePhotos04Change}  type="file" name="photos04" id="photos04" className="file-input file-input-bordered file-input-accent w-full max-w-xs" />

                </div>
                <div className="form-floating mb-3">
                  <label htmlFor="photos05">Another picture</label>
                  <input onChange={handlePhotos05Change}  type="file" name="photos05" id="photos05" className="file-input file-input-bordered file-input-accent w-full max-w-xs" />
                </div>

                <button className="mt-4 w-full bg-gray-400 hover:bg-gray-600 text-white border py-3 px-6 font-semibold text-md rounded" type="submit">Create!</button>
              </form>
        </div>
      );
}
export default NewWandrrrForm;
