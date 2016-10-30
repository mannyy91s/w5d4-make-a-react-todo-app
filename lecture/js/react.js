//Loading other libraries. Import is taking the 'react' and putting it into a variable called React. After loading in react and react dom we start with components. Posts i

import React from 'react'
import ReactDOM from 'react-dom'
import Posts from '../components/Posts'


//this function re renders the page everytime data is changed.
//this is rendering the data taken from the posts.js where we made our array with post objects and puts it into a posts element that we will be using the <Post data={data} />. We will typically only have 1 render for our application.
window.renderView = (data) => {
    ReactDOM.render(
        <Posts data={data} />, //everything in react is nested in this component. It follows the components/Posts from up above. Babel looks at this jsx code and converts it into jacascript code. You can only mount 1 thing at a time, so you can only have this and not have another div that is below this.
        // <div id={1}>Component Is Here</div>,  this div tag is special built in JSX even using 1 as the id cant be done in normal js.
        document.getElementById('posts')  // this has to be an getElementById
    )
}

renderView(posts)
