export default function Post(props) {
    return (
        <div className="card">
            <div className="card-header post-author">
                <img alt="" height="15px" width="15px" style={{marginRight:"5px" }}/>{props.postData.postedBy}
            </div>
            <div className="card-body">
                <p className="card-text post-content">{props.postData.postContent}</p>
            </div>
            <div className="card-footer">
                <a href="#" className="card-link">Like</a>
                <a href="#" className="card-link">Comment</a>
                <a href="#" className="card-link">Share</a>
            </div>
        </div>

    )
};