import './App.css';
import {Menu} from "./blocks/menu";
import {useEffect, useState, useRef} from "react";


function App() {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);

    const [draw, setDraw] = useState(false);
    const [width, setWidth] = useState(5);
    const [color, setColor] = useState("black");

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        context.lineCap = "round";
        context.lineJoin = "round";
        context.lineWidth = width;
        context.strokeStyle = color;
        contextRef.current = context;
    }, [width, color])

    const startDraw = (e) => {
        contextRef.current.beginPath();
        contextRef.current.moveTo(
            e.nativeEvent.offsetX,
            e.nativeEvent.offsetY
        );
        setDraw(true);
    }

    const endDraw = () => {
        contextRef.current.closePath();
        setDraw(false);
    }

    const Draw = (e) => {
        if (!draw) {
            return
        }
        contextRef.current.lineTo(
            e.nativeEvent.offsetX,
            e.nativeEvent.offsetY
        );
        contextRef.current.stroke();
    }

    return (
        <div className="container">
            <h1>Painting App</h1>
            <Menu setColor={setColor} setWidth={setWidth}/>
            <div className="draw-area">
                <canvas
                    onMouseDown={startDraw}
                    onMouseUp={endDraw}
                    onMouseMove={Draw}
                    ref={canvasRef}
                    width={`1280px`}
                    height={`720px`}
                />
            </div>
        </div>
    );
}

export default App;
