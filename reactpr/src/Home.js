import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
  
  const [blogs,setBlogs] = useState([
    {title:'MY LEE WEB1', body:'LPOA PLPOLQOOP', author:'LEE1', id:1},
    {title:'MY LEE WEB2', body:'LPOA PLPOLQOOP', author:'LEE2', id:2},
    {title:'MY LEE WEB3', body:'LPOA PLPOLQOOP', author:'LEE3', id:3}
  ])

  const handleDelete = (id) =>{
    const newBLogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBLogs)
  }

  return ( 
    <div className="home">
      <BlogList blogs={blogs} title='All Blogs' handleDelete={handleDelete}/>
    </div>
  );
}

export default Home;
