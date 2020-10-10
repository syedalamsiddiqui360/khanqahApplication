import React from 'react';
import OurAgent from './ourAgent/ourAgent';
import RecentPost from '../recentPost/recentPost';
import DemoSection from './demoSection/demo';
import List from '../list/list';
import BookSection from './bookSection/bookSection'

function Home(props) {

  return (
    <div>

      <div>
        <OurAgent />
      </div>
      <div>
        <DemoSection />
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
