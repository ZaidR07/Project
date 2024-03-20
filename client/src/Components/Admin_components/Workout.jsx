import React, { useEffect, useState } from "react";
import styled from 'styled-components';

import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import axios from "axios";
import { useRef } from "react";


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

    }

    const handlecross = () => {
        const overlayElement = overlayref.current;
        const crossElement = crossref.current;
        if (overlayElement.style.display === "block") {
            overlayElement.style.display = "none";
            crossElement.style.display = "none";
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('video', video);
        formData.append('name', name);
        formData.append('reps', reps);


        try {
            const response = await axios.post("http://localhost:4000/Workoutadd", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.status) {
                notify()
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const handleLoad = async () => {
            try {
                const response = await axios.get("http://localhost:4000/Workoutget", {

                });
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
    const currentItems = Array.isArray(workout) ? workout.slice(indexOfFirstItem, indexOfLastItem) : [];



    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };
    return (
        <StyledWorkout>
            <div className="workoutbox">
                <button onClick={handleAddWorkout} >Add Workout</button><br /><br />
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
                                        <source src={"http://localhost:4000/Workoutvideos/" + item.video} type="video/mp4" />
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
                <div><br /><br />
                    <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
                    <button onClick={handleNextPage} disabled={indexOfLastItem >= workout.length}>Next</button>
                </div>
            </div>
            <div className="overlaybox" ref={overlayref}>
                <button className='crossicon'>
                    <FontAwesomeIcon icon={faXmark} ref={crossref} onClick={handlecross} />
                </button>
                <h3 style={{ textAlign: "center" }}>Add Workout</h3><br />
                <form>
                    <input type="text" className="workout-inputs" name="workout_name" placeholder="Enter Product Name" onChange={(e) => (setName(e.target.value))}
                        required /><br /><br />

                    <input type="text" className="workout-inputs" name="workout_reps" placeholder="Enter Reps" onChange={(e) => (setReps(e.target.value))}
                        required /><br /><br />

                    <input type="file" className="workout-inputs" name="workout_video" onChange={(e) => (setVideoFile(e.target.files[0]))}
                        required /><br /><br />

                    <input type="submit" value="Add" className="submitbtn" onClick={handleSubmit} />


                </form>
            </div>
        </StyledWorkout>
    )
}
const StyledWorkout = styled.div`
    width: 100%;
    min-height: 100vh;
    display: grid;
    place-items: center;



    .workoutbox{
        width: 80%;
    
        
    }

    .overlaybox{
        width: 40%;
        height: 60vh;
        position: absolute;
        z-index: 1;
        margin-top: 5vh;
        background-color: gray;
        
    }
    .workout_table_video{
        width: 100%;
        height: auto;
        aspect-ratio: 4/3;
        object-fit: contain;
    }

    


`
export default Workout;