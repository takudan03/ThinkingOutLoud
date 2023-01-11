import Post from "./Post";

export default function Profile(props) {

    var posts = [{ id: 1, postContent: "lorem ipsum", postedBy: "abc" },
    { id: 2, postContent: "lorem ipsum", postedBy: "abc" },
    { id: 6, postContent: "lorem ipsum", postedBy: "abc" },
    { id: 9, postContent: "lorem ipsum", postedBy: "abc" },

    //var posts=props.currentUser.thoughts;
    //var followersCount=props.currentUser.followersCount;
    ];
    // return (<h1>This is the profile page"</h1>);
    return (
        <div className="container justify-content-center">
            <div className="card">
                <div className="image d-flex flex-column justify-content-center align-items-center">
                    <button className="btn btn-secondary">
                        <img src="https://i.imgur.com/wvxPV9S.png" height="100" width="100" alt="" />
                    </button> <span className="name mt-3">Takudzwa Dangwa</span>
                    <span className="idd">@takudzwadangwa</span>

                    <div className="d-flex flex-row justify-content-center align-items-center mt-3">
                        <span className="number">1069<span className="follow"> Followers; </span></span>
                        <br></br> 
                        <span className="number">2203<span className="follow"> Following</span></span> 

                    </div> 
                        <div className=" d-flex mt-2">
                        <button className="btn1 btn-dark">Edit Profile</button>
                        <button className="btn1 btn-dark">Logout</button>

                    </div>
                    <div className="text mt-3">
                        <span>A creator of minimalistic x bold graphics and digital artwork.
                            <br /><br /> Artist/ Creative Director by Day #NFT minting@ with FND night. </span>
                    </div>
                    <div className=" px-2 rounded mt-4 date ">
                        <span className="join">Joined May,2021</span>
                    </div>
                </div>
            </div>

            <ul>
                {posts.map(post => (
                    <Post key={post.id} postData={post} />
                ))
                }
            </ul>
        </div>

    )
}