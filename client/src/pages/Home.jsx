import React from 'react';
import { Link } from 'react-router-dom';

function Home() {

    return(
    <div className='home'>
       <div className="banner">
            <div className="banner-image"></div>
       </div>

        <div className="our-text row text-center justify-content-center text-white">
            <div className="col-md-3">
                <h1><strong>OUR MISSION</strong></h1>
                <p>To bring all peoples to the kingdom of the living God regardless of race, status, belief and religious affiliations through the saving, healing, delivering, and transforming power of the Lord Jesus Christ.</p>
            </div>
            <div className="col-md-3">
                <h1><strong>OUR VISION</strong></h1>
                <p>A glorious church evangelizing and discipling Filipinos and all the peoples of the world through teaching, preaching and living-out the full-Gospel of the Lord Jesus Christ.</p>
            </div>
            <div className="col-md-3">
                <h1><strong>OUR CORE VALUES</strong></h1>
                <p>Passionate Love for God Love and Compassion for Others Integrity Faithfulness Excellence</p>
            </div>
        </div>

        <div className="parallax w-100">
            <div className="parallax-hero">
                <div className="home-content fs-5 text-white">
                    <h2><strong>THE MAN, HIS MESSAGE AND THE MINISTRY</strong></h2>
                    <p>From a communist-atheist to one of the most powerful preachers of God’s Word in the world today… From a radical activist to the founder-pastor of one of the largest Christ-centered, Bible-based, full-gospel churches in the world… From a battle-scarred street parliamentarian to one of the most respected Christian leaders in the Philippines whose spiritual counsel is sought after by high-ranking officials and distinguished leaders of the nation… From a persecuted “small, country preacher’ to a world-renown radio-TV evangelist, prophet and apostle whose vision and mission is to see the nations of the world evangelized and transformed by the same Gospel that changed his life.
                    This in a capsule captures the exciting life story of Eddie Villanueva,
                    fondly called Bro. Eddie or Bishop Eddie.</p>
                    <Link to="/broeddie" className="btn rounded border border-white text-white">Learn More</Link>
                </div>
            </div>
        </div>
        
        <h1 className="text-center"><strong>EXAMPLE CONTENT</strong></h1>
        <div className="home-content1">
            
            <h3><strong>THE MAN, HIS MESSAGE AND THE MINISTRY</strong></h3>
            <p>From a communist-atheist to one of the most powerful preachers of God’s Word in the world today… From a radical activist to the founder-pastor of one of the largest Christ-centered, Bible-based, full-gospel churches in the world… From a battle-scarred street parliamentarian to one of the most respected Christian leaders in the Philippines whose spiritual counsel is sought after by high-ranking officials and distinguished leaders of the nation… From a persecuted “small, country preacher’ to a world-renown radio-TV evangelist, prophet and apostle whose vision and mission is to see the nations of the world evangelized and transformed by the same Gospel that changed his life.

            This in a capsule captures the exciting life story of Eddie Villanueva,

            fondly called Bro. Eddie or Bishop Eddie.</p>
        </div>
        <div className="parallax w-100 vh-100"></div>
    </div>
        
    )
}

export default Home;