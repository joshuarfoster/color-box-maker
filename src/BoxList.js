import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

function BoxList() {
    const [boxes, setBoxes] = useState([])
    const addBox = (width, height, color) => {
        setBoxes(boxes => [...boxes, {width,height,color}])
    }
    const deleteBox = (id) => {
        const newBoxes = boxes.filter((box, idx)=> idx !== id)
        setBoxes(newBoxes)
    }

    return (
        <div>
            <h3>Create New Box</h3>
            <NewBoxForm addBox={addBox} />
            <div>
                {boxes.map((box, idx) => <Box width={box.width} height={box.height} color={box.color} idx={idx} deleteBox={deleteBox}/>)}
            </div>
        </div>
    )
}

export default BoxList