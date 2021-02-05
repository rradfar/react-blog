import { useState, useEffect } from 'react';
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

  const [name, setName] = useState('John');

  const handleDelete = id => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log('useEffect just ran!');
  }, [name]);

  return (
    <div className='home'>
      <BlogList
        blogs={blogs}
        title='Featured Blogs'
        handleDelete={handleDelete}
      />
      <button onClick={() => setName('Jane')}>Change name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
