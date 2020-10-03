import React from 'react';
import {NavLink} from 'react-router-dom'

function Page2() {
    return (
        <div>
            <NavLink to="/">page 1</NavLink>
            <NavLink to="/3">page 3</NavLink>

            <h1>Syed Muhammad Faizan Haider Shams</h1>
            <p>Page2</p>
        </div >

    )
}

export default Page2;