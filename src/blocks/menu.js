import React from "react";

export function Menu(props){
    return(
        <div className="Menu">
            <p>Brush Color</p>
            <input type="color"
                   onChange={(e)=>{
                        props.setColor(e.target.value);
                   }}
            />
            <p>Brush Width</p>
            <input type="range"
                   onChange={(e)=>{
                        props.setWidth(e.target.value);
                   }}
            />
            <button className="filter-blue" onClick={() => {
                props.setColor("white");
            }}>

            </button>
        </div>
    )
}