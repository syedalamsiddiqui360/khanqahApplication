import React from 'react';
import OurAgent from './ourAgent/ourAgent';
import RecentPost from '../recentPost/recentPost';
import AudioSection from './demoSection/demo';
import BookSection from './bookSection/bookSection'

function Home(props) {

  return (
    <div>
      <div>
        <OurAgent />
      </div>
      <div>
        <AudioSection />
      </div>
      <div>
        <BookSection />
      </div>
      <div>
        <RecentPost />
      </div>
    </div>
  );
}

export default Home;
