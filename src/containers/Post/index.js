import React from 'react';
import './style.css';   
import Card from '../../components/UI/Card';
import BlogPost from '../../components/BlogPost';
import SideBar from '../../components/SideBar';

const Post =(props)=> {

  

  console.log(props);
    return (
      <section className="container">
          <BlogPost {...props}/>
          <SideBar/>
 

        

      </section>
    )
}

export default Post;

