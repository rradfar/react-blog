import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: 'My new website',
      body: 'lorem ipsum...',
      author: 'Michael',
      id: 1,
    },
    {
      title: 'Welcome!',
      body: 'lorem ipsum...',
      author: 'Patrick',
      id: 2,
    },
    {
      title: 'Web dev tips',
      body: 'lorem ipsum...',
      author: 'John',
      id: 3,
    },
  ]);

  const handleDelete = id => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className='home'>
      <BlogList
        blogs={blogs}
        title='Featured Blogs'
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Home;
