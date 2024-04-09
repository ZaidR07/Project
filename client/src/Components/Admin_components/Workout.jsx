import React, { useEffect, useState } from "react";
import styled from "styled-components";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import axios from "axios";


const Workout = () => {
  const crossref = React.createRef();
  const overlayref = React.createRef();

  const [video, setVideoFile] = useState();
  const [name, setName] = useState("");
  const [reps, setReps] = useState("");
  const [workout, setWorkout] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);

  const notify = () => toast("Workout Added Successfully");

  const handleAddWorkout = () => {
    const overlayElement = overlayref.current;
    const crossElement = crossref.current;
    if (overlayElement.style.display !== "block") {
      overlayElement.style.display = "block";
      crossElement.style.display = "block";
    }
  };

  const handlecross = () => {
    const overlayElement = overlayref.current;
    const crossElement = crossref.current;
    if (overlayElement.style.display === "block") {
      overlayElement.style.display = "none";
      crossElement.style.display = "none";
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("video", video);
    formData.append("name", name);
    formData.append("reps", reps);

    try {
      const response = await axios.post(
        "https://fitness365-1iww.onrender.com/Workoutadd",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status) {
        notify();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const handleLoad = async () => {
      try {
        const response = await axios.get(
          "https://fitness365-1iww.onrender.com/Workoutget",
          {}
        );
        setWorkout(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    handleLoad();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Array.isArray(workout)
    ? workout.slice(indexOfFirstItem, indexOfLastItem)
    : [];

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
  return (
    <StyledWorkout>
      <div className="workoutbox">
        <button className="btn" onClick={handleAddWorkout}>
          Add Workout
        </button>
        <br />
        <br />
        <table>
          <thead>
            <tr>
              <th>Video</th>
              <th>ID</th>
              <th>Workout Name</th>
              <th>Reps / Duration</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index}>
                <td>
                  <video className="workout_table_video" autoPlay loop muted>
                    <source
                      src={item.video}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </td>
                <td>{item.name}</td>
                <td>{item.workout_id}</td>
                <td>{item.reps}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <br />
          <div className="button">
            <button
              className="previous"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              className="next"
              onClick={handleNextPage}
              disabled={indexOfLastItem >= workout.length}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <div className="overlaybox" ref={overlayref}>
        <button className="crossicon">
          <FontAwesomeIcon
            icon={faXmark}
            ref={crossref}
            onClick={handlecross}
          />
        </button>
        <div className="form_container">
          <h3 style={{ textAlign: "center" }}>Add Workout</h3>
          <br />
          <form>
            <input
              type="text"
              className="workout-inputs"
              name="workout_name"
              placeholder="Enter Product Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <br />
            <br />

            <input
              type="text"
              className="workout-inputs"
              name="workout_reps"
              placeholder="Enter Reps"
              onChange={(e) => setReps(e.target.value)}
              required
            />
            <br />
            <br />

            <input
              type="file"
              className="workout-inputs"
              name="workout_video"
              onChange={(e) => setVideoFile(e.target.files[0])}
              required
            />
            <br />
            <br />

            <input
              type="submit"
              value="Add"
              className="submitbtn"
              onClick={handleSubmit}
            />
          </form>
        </div>
      </div>
    </StyledWorkout>
  );
};
const StyledWorkout = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  place-items: center;

  .workoutbox {
    width: 80%;
  }
  h3 {
    margin-top: 3%;
  }
  .overlaybox {
    width: 40%;
    height: 60vh;
    position: absolute;
    z-index: 1;
    margin-top: 5vh;
    background-color: gray;
    background-color: #081938;
  }
  .workout_table_video {
    width: 100%;
    max-height: 17vh;
    aspect-ratio: 4/3;
    object-fit: contain;
  }
  .btn {
    background-color: #d04e17;
    color: #fff;
    border: none;
    margin-top: 3%;
    padding: 8px 16px;
    border-radius: 5px;
    cursor: pointer;
  }
  .form_container {
    border: 1px solid gray;
    background-color: #263043;
    height: 45vh;
  }
  .crossicon {
    position: absolute;
    top: 20px;
    right: 30px;
    background: none;
    font-size: 28px;
    border: none;
    cursor: pointer;
  }
  .workout-inputs {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    margin-left: -5%;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }
  .button{
    margin-top: 16px;
  display:flex;
  justify-content: space-between;
  }
  .previous {
    background-color: #d04e17;
    color: #fff;
    border: none;
    padding: 8px 16px;
    border-radius: 5px;
    cursor: pointer;
  }
  .next {
    background-color: #d04e17;
    color: #fff;
    border: none;
    padding: 8px 16px;
    border-radius: 5px;
    cursor: pointer;
  }

 
`;
export default Workout;
