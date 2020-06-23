import React from 'react';
import './styles.css'


function PostComponent({ posts, loading })  {

    if(loading){
        // return <h2 style={{textAlign: 'center '}} >Loading</h2>;
       return(
        <ul className="post-list">
            <li  className="post-list-item-loading">
                 <span className="post-title-loading"></span>
                 <p className="post-body-loading"></p>

                 <span className="post-author-loading"></span>
            </li>
            <li  className="post-list-item-loading">
                 <span className="post-title-loading"></span>
                 <p className="post-body-loading"></p>

                 <span className="post-author-loading"></span>
            </li>
            <li  className="post-list-item-loading">
                 <span className="post-title-loading"></span>
                 <p className="post-body-loading"></p>

                 <span className="post-author-loading"></span>
            </li>
            <li  className="post-list-item-loading">
                 <span className="post-title-loading"></span>
                 <p className="post-body-loading"></p>

                 <span className="post-author-loading"></span>
            </li>
   
   
        </ul>    
         )
    }

    return (

        posts.map(post => (

            <ul className="post-list">
            
                <li key={post.id} className="post-list-item">
                <span className="post-title">{post.title}</span>
                <p className="post-body">{post.body}</p>
              
                <span className="post-author">{post.user_name}</span>
          
           </li>
        
           </ul>
    ))


    );


}

export default PostComponent;