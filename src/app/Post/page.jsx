import Link from 'next/link';
import React from 'react';

const Postpage = async () => {

    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const Posts = await res.json();
    // console.log("posts: ", Posts);

    return (
        <div>
            <h1>this is post page</h1>
            <div>
                {
                    Posts.map((post, ind) => <div key={ind}>
                        <h2>{post.title} </h2>
                        <Link href={`/Post/${post.id}`}><button className='btn btn-primary'>Show details</button></Link>
                    </div> )
                }
            </div>
        </div>
    );
};

export default Postpage;