import React, { useEffect, useState } from 'react'
import ax from 'axios'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
const Home = () => {
    const [workouts,setworkoutes]=useState([])
    const [show,setShow]=useState(false)
useEffect(()=>{
    const getdata=async()=>{
let response =await ax.get("https://workout2-rirx.onrender.com/api/workouts")
console.log(response.data) 
setworkoutes(response.data)
}
getdata()
},[show])

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map((work) =>(
        <WorkoutDetails workout ={work} show={show} setShow={setShow} key={work._id}/>))}
      </div>
      <WorkoutForm setShow={setShow} show={show}/>
    </div>
  )
}

export default Home