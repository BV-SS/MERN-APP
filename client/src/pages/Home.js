import {useEffect , useState} from 'react';

// components 
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';

// CORS orign error occurs if some unknown source tries to get response from port mentioned in backend to overcome this we can either install CORS library in the backed and allow the other cors origin requests to our backend or we can add a proxy field in package.json in frontend this property basically tells the react dev server to proxy any request that it does not recognise to the url mentioned in the proxy field.

export default function Home() {
    const [workouts, setWorkouts] = useState(null);
    const fetchData = async () => {
        const response = await fetch("http://localhost:4000/api/workouts/");
        const json = await response.json();
        if(response.ok){
            setWorkouts(json);
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

  return (
    <div className='home'>
        <div  className='workout_card'>
        {workouts && workouts.workouts.map((workout) => (
                <WorkoutDetails key={workout._id} workout={workout} fetchData={fetchData}/>
            ))
        }
        </div>
    <WorkoutForm fetchData={fetchData}/>
    </div>
  )
}
