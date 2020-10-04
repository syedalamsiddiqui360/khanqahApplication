import React from 'react';
import OurAgent from '../ourAgent/ourAgent';
import RecentBlog from '../recentBlog/recentBlog';
import WhyChooseUs from '../whyChooseUs';
import List from '../list/list';
import BookSection from '../bookSection/bookSection'

function Home(props) {

  return (
    <div>

      <div>
        <OurAgent />
      </div>
      <div>
        <BookSection />
      </div>

      <div>
        <WhyChooseUs />
      </div>
      <div>
        <RecentBlog />
      </div>


    </div>


  );
}

export default Home;
