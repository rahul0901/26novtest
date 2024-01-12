import React, { useState } from 'react';


const DisplayGrid = () => {
    const grid = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <>
            <div>Display Grid View</div>
            <div className='parent-grid'>
                {grid.map((item, index) => (
                    <div key={index}>
                        <div>{item}</div>
                    </div>
                ))}
            </div>

            <a style={{color:"red"}}>find job</a><i class="fa-icon-search" style={{color:"red"}}></i>
            <p>find jobbb<i class="fa-solid fa-magnifying-glass"></i></p>
        </>
    )
}

export default DisplayGrid;