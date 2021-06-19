import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {  
  // const handleDelete = (id) =>{
  //   const newBLogs = blogs.filter(blog => blog.id !== id)
  //   setBlogs(newBLogs)
  // }

  const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

  return ( 
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title='All Blogs' />}
    </div>
  );
}

export default Home;

//Anonymous function 