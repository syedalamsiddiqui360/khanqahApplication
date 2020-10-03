import {NavLink} from 'react-router-dom'
import React from 'react';

function Page1() {
    return (
        <div>
            <NavLink to="/3">page 3</NavLink>
            <NavLink to="/2">page 2</NavLink>

            <h1>Syed Muhammad Faizan Haider Shams</h1>
            <p>Page1</p>
        </div >

    )
}

export default Page1;