import React from 'react'

export default function workoutDetails({workout}) {
  console.log(workout)
  return (
    <div className="details_card">
        <p><span >Title : </span>{workout.title}</p>
        <p><span >Reps :</span>{workout.reps}</p>
        <p><span >Load : </span>{workout.load}</p>
        <p>Created at : {workout.createdAt}</p>
    </div>
  )
}
