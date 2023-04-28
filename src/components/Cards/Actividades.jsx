import React from "react";

const Actividades = (props) => {
    const { name,img,duration } = props.actividades
    return(
        <div>
            <h1>{name}</h1>
            {img.map((i) => {
                <img src={i} alt="image"></img>
            })}
            <p>Duración: {duration}</p>
        </div>
    )
}

export default Actividades