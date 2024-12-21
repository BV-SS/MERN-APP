import React from 'react'

export default function workoutDetails({workout}) {
  return (
    <div className="workout_details">
        <h4>{workout.title}</h4>
        <p><strong >Reps : </strong>{workout.reps}</p>
        <p><strong >Load : </strong>{workout.load}</p>
        <p> {workout.createdAt}</p>
    </div>
  )
}
