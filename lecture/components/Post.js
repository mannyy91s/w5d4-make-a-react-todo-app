import React, { Component } from 'react' //we use this for each component we make and we dont have another line below this because this doesnt have any children.

const Post = (props) => (
    <div className="post"> {/* in ES6 ()=> 1 means function and return 1, we also have to rename class to className */}
        <img src={props.post.image} alt={props.post.title} />
        <h3>{props.post.title}</h3>
        <p className="lead">
        Published on {props.post.date} at {props.post.time}
        </p>
        <p>{props.post.body}</p>
        <span className="small">Author: {props.post.author}</span>
    </div>
)


export default Post
