import { useEffect, useState } from 'react';


export default function NewThought() {
    const [textLength, setTextLength] = useState(0);
    const [text,setInputText] =  useState("");

    const onTextChange = (event)=>{
        setInputText(event.target.value.trim());
        console.log("Updated text: ", text);
    }
    return (
        <div className="card">
            <div className="card-body">
                <textarea rows="3" width="100%" className="newThoughtInput" onChange={onTextChange} id="newThoughtTextArea" placeholder="What is on your mind?"/>
            </div>
            <div className="card-footer text-muted">
                <a href="#" className="btn btn-primary">Post</a>
                <a href="#" className="btn btn-primary">Cancel</a>
            </div>
        </div>

    )
};