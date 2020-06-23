import React, {useState, useEffect} from 'react';
import api from '../../services/api'
import './styles.css';
import {Link} from 'react-router-dom';

import PostComponent from '../Posts/PostComponent/PostComponent';
import PaginationComponent from '../Posts/PaginationComponent/PaginationComponent'


const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
   

    useEffect(() => {
       
        updatePosts();

    }, [])




    async function updatePosts() {

        setLoading(true);
        const response = await api.get('/api/posts');
     
        setPosts(...posts, response.data.posts)
        setLoading(false);
    }

    async function fetchPosts() {

        setLoading(true);
        await api.get('/api/fetch/users')
        .then((response) => {

            setTimeout( async ()=> {
                const responseUsr = await api.get('/api/posts');
                console.log(responseUsr)
                setPosts(responseUsr.data.posts)
                setLoading(false);
            }, 2000);             

        }, (err) => {
            console.log(err)
        });
       
        
          
   
        

 
       
    }


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  


    function paginate(pageNumber ) {
        setCurrentPage(pageNumber)
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
                    <button onClick={() => fetchPosts()} className="reload-post-btn">Reload Posts</button>
              
            <PostComponent posts={currentPosts} loading={loading}/>
 


            <PaginationComponent loading={loading} postsPerPage={postsPerPage} currentPage={currentPage} totalPosts={posts.length} paginate={paginate}/>
            </section>


        </div>
     
    </>

    )

}

export default Posts