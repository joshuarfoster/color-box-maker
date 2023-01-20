import React from "react";

function Box ({width, height, color, deleteBox, idx}) {

    const handleSubmit = (e) => {
        e.preventDefault();
        deleteBox(idx)
        }

    return (
        <div>
            <div style={{
                width: `${width}px`,
                height: `${height}px`,
                backgroundColor: `${color}`
            }}>
            </div>
            <form onSubmit={handleSubmit}>
                <input type="submit" value='X'/>
            </form>
        </div>
    )
}

export default Box