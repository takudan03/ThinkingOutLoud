import { useEffect, useState } from 'react';


export default function NewThought() {
    const [newThoughtText, setNewThoughtText] = useState("");

    const handleSubmit = (event) => {
        var newThoughtResponse = {"postContent":newThoughtText,"postedBy":"abc"}
        console.log(event);
        fetch('/testApi/newThought', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newThoughtResponse)
        })
            .then((result) => result.json())
            .then((info) => { console.log(info); });
        window.location.reload(false);
    }

    return (
        <div className="card">
            <form onSubmit={handleSubmit}>

                <div className="card-body">

                    <textarea rows="3" width="100%" className="newThoughtInput" onChange={event => setNewThoughtText(event.target.value)} id="newThoughtTextArea" placeholder="What is on your mind?" />
                </div>
                <div className="card-footer text-muted">
                    <button className="btn btn-primary" >Post</button>
                    <a href="#" className="btn btn-primary">Cancel</a>
                </div>
            </form>
        </div>

    )
};