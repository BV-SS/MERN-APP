import React from 'react'

export default function workoutDetails({workout, fetchData}) {
  const handleClick = async () => {
    const response = await fetch(`http://localhost:4000/api/workouts/${workout._id}`,{
      method:"DELETE"
    });
    console.log("response - ",response)
    const json = await response.json();
    console.log("json - ",json)

    if(response.ok){
      fetchData()
    }
  }
  return (
    <div className="workout_details">
        <h4>{workout.title}</h4>
        <p><strong >Reps : </strong>{workout.reps}</p>
        <p><strong >Load : </strong>{workout.load}</p>
        <p> {workout.createdAt}</p>
        <span onClick={handleClick}>delete</span>
    </div>
  )
}
