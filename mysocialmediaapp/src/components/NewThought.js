export default function NewThought() {
    return (
        <div className="card">
            <div className="card-body">
                <textarea rows="3" width="100%" className="newThoughtInput" placeholder="What is on your mind?"/>
            </div>
            <div className="card-footer text-muted">
                <a href="#" className="btn btn-primary">Post</a>
                <a href="#" className="btn btn-primary">Cancel</a>
            </div>
        </div>

    )
};