import React, { Component } from 'react'  //every component has to import react. We only use reactDOM 1 time in our app.
import Post from './Post'  //we import post which we made earlier

const Posts = (props) => {  //we are creating a constant variable which is immutable. It will never go back and modify it, but instead it will remake a new one. This is the master container that goes around the rest of the application. Posts in blue is a function. Since we are using babel we can use all the advanced features from ES6. This const is also called stateless components which react team recommends for simpler applications.
    console.log(props) // props is the object that is coming in from react.js data function.
    const PostItems = props.data.map((post, i) => { //we are taking each data and using map to transform each object, we are passing data
        return <Post post={post} key={i} />   //key={1} optimizes react to tell it where to place data. It also helps it run faster
    })
    console.log(PostItems)
    // it can only return 1 thing. JSX is smart and does forEach loop for you so you dont have to do it.
    //in order to comment in JSX use {/* text here */}
    //if you want to put <div> below return use () to wrap around ur div
    return <div>
        {/* <h1>Blog Posts</h1> */}
        {PostItems}
    </div>
}


export default Posts
