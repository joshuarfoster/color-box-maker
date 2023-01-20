import React, { useState } from "react";

function NewBoxForm ({addBox}) {

    const [formData, setFormData] = useState({
        width: 100,
        height: 100,
        color: '#ffffff'
    })

    const handleChange = (e) => {
        setFormData(data => ({
            ...data,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox(formData.width, formData.height, formData.color)
        setFormData({
            width: 100,
            height: 100,
            color: '#ffffff'
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor='width'>Width : {formData.width}</label>
            <input type="range" id="width" name="width" min="0"  max="200" value={formData.width} onChange={handleChange}/>
            <label htmlFor='height'>Height : {formData.height}</label>
            <input type="range" id="height" name="height" min="0"  max="200" value={formData.height} onChange={handleChange}/>
            <label htmlFor='color'>Color : </label>
            <input type="color" id="color" name="color" value={formData.color} onChange={handleChange}/>
            <input type="submit"/>
        </form>
    )
}

export default NewBoxForm