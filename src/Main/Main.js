import React from 'react';
import './Main.scss'
import pfp from './Images/image-victor.jpg';

const Main = () => {
    return (
        <main>
            <img src={pfp} alt=''/>
            <h1>Victor Crest <span>26</span></h1>
            <p className='location'>London</p>
            <div className='line'/>
            <div className='stats'>
                <p>
                    80K <span><br />Followers</span>
                </p>
                <p>
                    803K <span><br />Likes</span>
                </p>
                <p>
                    1.4K <span><br />Photos</span>
                </p>
            </div>
        </main>
    );
}
 
export default Main;