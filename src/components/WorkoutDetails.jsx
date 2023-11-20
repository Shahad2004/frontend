import React from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import ax from 'axios'

const WorkoutDetails = ({workout,show,setShow}) => {

  const handleClick=async()=>{
    await ax.delete('https://workout2-rirx.onrender.com/api/workouts/'+workout._id)
    setShow(!show)
  }

  return (

        <div className='workout-details'>
            <h4>{workout.title} </h4>
            <p> <strong>load (kg): </strong>{workout.load}</p>
            <p> <strong>number of reps: </strong>{workout.reps}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt),{addSuffix:true})} </p>
            <span className='material-symbols-outlined' onClick={handleClick} >delete</span>
        </div> 
        
  )   
}

export default WorkoutDetails