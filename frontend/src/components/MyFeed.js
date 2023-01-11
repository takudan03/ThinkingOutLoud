import Post from "./Post";
import NewThought from "./NewThought";

export default function MyFeed(props) {    
    return (
        <div className="container">
            <NewThought/>
            <hr></hr>
            <ul>
                {
                    Array.from(props.posts).map((post) =>               
                        <Post key={post['_id']} postData={post}/>
                    )
                }
            </ul>
        </div>
    );
}