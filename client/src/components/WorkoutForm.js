import {useState} from 'react'

export default function WorkoutForm({fetchData}) {
    const [title , setTitle] = useState('');
    const [reps , setReps] = useState('');
    const [load , setLoad] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const workout = { title, reps, load};

        const response = await fetch("http://localhost:4000/api/workouts/",{
            method : "POST",
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
              }
        });
        const json = await response.json()

        if(!response.ok){
            setError(json.error);
        }
        if(response.ok){
            setTitle('');
            setReps('');
            setLoad('');
            setError(null);

            console.log("added workout", json);
            fetchData();
        }

    }

  return (
    <div >
    <form className='create_workout' onSubmit={handleSubmit}>
        <h3>Create New Workout</h3>

        <label >Exercise Title</label>
        <input 
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            value = {title}
            required
        />

        <label >Exercise Load</label>
        <input 
            type='number'
            onChange={(e) => setLoad(e.target.value)}
            value = {load}
            required
        />

        <label >Exercise Reps</label>
        <input 
            type='number'
            onChange={(e) => setReps(e.target.value)}
            value = {reps}
            
        />
        
        <button>Add Workout</button>
        {error && <div className="error">
            {error}
        </div>}
    </form>
    </div>
  )
}
