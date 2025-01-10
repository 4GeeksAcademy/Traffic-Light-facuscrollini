import React, { useEffect, useState } from "react";
import '../../styles/index.css'

const TrafficLight = () => {

const [greenOn, setGreenOn] = useState(false)
const [redOn, setRedOn] = useState(false)
const [yellowOn, setYellowOn] = useState(false)
const [color, setColor] = useState("")
const [purpleOn, setPurpleOn] = useState(false)
const [intervalId, setIntervalId] = useState(null)



const handleTurnGreen = () => {
   setColor("green")
}

const handleTurnYellow = () => {
    setColor("yellow")
}


const handleTurnRed = () => {  
        setColor("red")
}


const handleChangeLights = () => {
setColor((prevColor)=> {
    if(prevColor === "red") return "yellow"
    if(prevColor === "yellow") return "green"
    if(prevColor === "green"){
        if(purpleOn){
            return "purple"
        } else { return "red"}
    } return "red"
})
}

const handleTurnPurple = () => {
setColor("purple")
}

const handleAddPurple = () => {
setPurpleOn(true)
}

const handleOffPurple = () => {
    setPurpleOn(false)
}

const handleLightsTime = () => {
if(!intervalId){
    const id = setInterval(handleChangeLights, 1000)
    setIntervalId(id)
}
}

useEffect(()=> { 
    return () =>{ if(intervalId) {
    clearInterval(intervalId)
}
}
}, [intervalId])


useEffect(()=>{
    if(intervalId){
    if(purpleOn){
      const id =  setInterval(handleChangeLights, 1000)
      setIntervalId(id)
    }
}
}, [purpleOn])

console.log(color)

const handleStopLightsTime = () => {
setIntervalId(null)
}

const handleEraseLights = () => {
    setColor("")
}

    return (<>
        <div className="col-2 ">
           <div className={`rounded-2 bg-black d-flex flex-column justify-content-around align-items-center ${purpleOn? "rectangle-with-purple" : "rectangle"}`}>
            <div onClick={handleTurnRed} className={`rounded-circle square ${color === "red" ? "red-light" : "red-dark"}`}></div>
            <div onClick={handleTurnYellow} className={`rounded-circle square ${color === "yellow" ? "yellow-light" : "yellow-dark"}`} ></div>
            <div onClick={handleTurnGreen} className={`rounded-circle square ${color ==="green" ? "green-light" : "green-dark"}`}></div>
            {purpleOn? <div onClick={handleTurnPurple} className={`rounded-circle square ${color === "purple"? "purple-light" : "purple-dark"}`}></div> : ""}
            </div>
            <button type="button" className="btn btn-success mt-4 d-flex justify-content-center" onClick={handleChangeLights} >Cambiar de luces</button>
            <button type="button" className="btn mt-4 d-flex justify-content-center purple" onClick={handleAddPurple} >Agregar luz púrpura</button>
            <button type="button"  className="btn btn-dark mt-4 d-flex justify-content-center" onClick={handleOffPurple}> Quitar luz púrpura</button>
            <button type="button" className="btn btn-warning mt-4 d-flex align-items-center" onClick={handleLightsTime}>Cambiar de luces cada 5 segundos</button>
            <button type="button" className="btn btn-danger mt-4 d-flex align-items-center" onClick={handleStopLightsTime}>Detener cambio de luces</button>
            <button type="button" className="btn btn-secondary mt-4 d-flex align-items-center" onClick={handleEraseLights}>Apagar luz</button>
        </div>
    </>);
}

export default TrafficLight
