import Post from "./Post";
import NewThought from "./NewThought";

export default function MyFeed(props) {
    var thoughts=props['posts']['thoughts'];
    console.log(thoughts);

    return (
        <div className="container">
            <NewThought/>
            <hr></hr>
            <ul>
                {/* {
                    thoughts.map((key) =>{
                        <Post key={key} postData={props.posts[key]}/>
                    })
                } */}
            </ul>
        </div>
    );
}