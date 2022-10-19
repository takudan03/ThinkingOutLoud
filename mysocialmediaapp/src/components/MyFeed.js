import Post from "./Post";
import NewThought from "./NewThought";

export default function MyFeed(props) {

    console.log(props.posts)
    return (
        <div className="container">
            <NewThought/>
            <hr></hr>
            <ul>
                    {
                    Object.keys(props.posts).map(key =>(
                        <Post key={key} postData={props.posts[key]}/>
                    ))
                }
            </ul>
        </div>
    );


}