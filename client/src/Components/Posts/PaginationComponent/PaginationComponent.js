import React from 'react';
import './style.css'


function PaginationComponent ({postsPerPage, currentPage, totalPosts, paginate, loading}) {


    const pageNumbers = [];
    console.log(currentPage)
    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }

    if(loading){
        return <></>;
    }

    return (
        <section className="post-pagination">
            {pageNumbers.map(number => (

                 <button 
                 onClick={() => paginate(number)} 
                 key={number} 
                 className={`pagination-btn ${currentPage === number ? 'btn-active' : '' }`}>
                     {number}
                </button>
            ))}
       

        </section>
    );


}


export default PaginationComponent;