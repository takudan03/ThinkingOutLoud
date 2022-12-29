import { useEffect, useState } from 'react';

export default function Post(props) {
    const [likes, setLikes] = useState(0);
    const [postLikedByUser, setPostLikedByUser] = useState(false);
    const onClickLikeButton = (() => {
        if (postLikedByUser) {
            setLikes(likes=> likes-1);
        }
        else {
            setLikes(likes=> likes + 1);
        }
        setPostLikedByUser(postLikedByUser=> !postLikedByUser);
    });

    
    return (
        <div className="card">
            <div className="card-header post-author">
                <img alt="" height="15px" width="15px" style={{marginRight:"5px" }}/>{props.postData['postedBy']}
            </div>
            <div className="card-body">
                <p className="card-text post-content">{props.postData['postContent']}</p>
            </div>
            <div className="card-footer">
                <i className={postLikedByUser ? "bi bi-heart-fill" : "bi bi-heart"} onClick={onClickLikeButton}><span id='likeCount'>{likes}</span></i>
                <a href="#" className="card-link">Comment</a>
                <a href="#" className="card-link">Share</a>
            </div>
        </div>

    );
};