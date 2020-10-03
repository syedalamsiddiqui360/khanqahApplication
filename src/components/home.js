import React from 'react';
import OurAgent from './ourAgent';
import RecentBlog from './recentBlog/recentBlog';
import WhyChooseUs from './whyChooseUs';
import List from './list/list';

function Home() {
  return (
    <div>

      <div>
        <List />
      </div>

      <div>
        <WhyChooseUs />
      </div>

      <div>
        <RecentBlog />
      </div>


      <div>
        <OurAgent />
      </div>
    </div>


  );
}

export default Home;
