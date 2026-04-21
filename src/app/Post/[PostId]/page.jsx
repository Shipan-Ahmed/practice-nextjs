import React from 'react';

const PostDetails = async ({ params }) => {
    const resId = await params; // may use differnt name . no problem but
    console.log("userid :", resId); // must be to do this to see id name 
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${resId.PostId}`);
    const Posts = await res.json();
    console.log("posts details: ", Posts);
    return (
        <div>
            <h1>This is post details</h1>
            <h1>{Posts.title} </h1>
            <h2>{Posts.body} </h2>
        </div>
    );
};

export default PostDetails;