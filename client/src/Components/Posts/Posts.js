import React, {useState, useEffect} from 'react';
import api from '../../services/api'
import './styles.css';


const Posts = () => {

    const [posts, setPosts] = useState([]);


    useEffect(() => {

        updatePosts();

    }, [])

    async function updatePosts() {
      

        const response = await api.get('/api/posts');
        console.log(response)
        setPosts(...posts, response.data.posts)

    }

    return (

        <>
        <div className="container-posts">

            <header className="post-header">
                <nav className="nav-header">
                    <a href="#" className="nav-header-item">Home</a>

                </nav>
            </header>
            <section className="post-content">

                <ul className="post-list">
                    {
                        posts.map(post => (

              
                                <li key={post.id} className="post-list-item">
                                <span className="post-title">{post.title}</span>
                                <p className="post-body">{post.body}</p>
                                
                                <span className="post-author">{post.user_id}</span>
                              
                               </li>
                            

                        ))
                    }
               
                </ul>

 
            </section>
        </div>
     
    </>

    )

}

export default Posts