import React from 'react';
import Welcome from '../components/Welcome';
import MostRecentSection from '../components/MostRecentSection';

function Home(props) {
    return (
        <main>
            <div className="welcome-wrapper">
                <Welcome username={props.username} isAdmin={props.isAdmin} />
                <MostRecentSection adventures={props.adventures} isAdmin={props.isAdmin}/>
            </div>
        </main>
    )
}

export default Home;
