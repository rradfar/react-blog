import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'John', id: 1 },
    { title: 'Welcome!', body: 'lorem ipsum...', author: 'Patrick', id: 2 },
    { title: 'Web dev tips', body: 'lorem ipsum...', author: 'John', id: 3 },
  ]);

  return (
    <div className='home'>
      <BlogList blogs={blogs} />
    </div>
  );
};

export default Home;
