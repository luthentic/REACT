import { useState } from 'react';

const Home = () => {
  
  const [blog,setBlog] = useState([
    {title:'MY LEE WEB1', body:'LPOA PLPOLQOOP', author:'LEE1', id:1},
    {title:'MY LEE WEB2', body:'LPOA PLPOLQOOP', author:'LEE2', id:2},
    {title:'MY LEE WEB3', body:'LPOA PLPOLQOOP', author:'LEE3', id:3}
  ])
  return ( 
    <div className="home">
      <h2>Home Page</h2>
      <p>{name} is {age}</p>
      <button onClick={handleClcik}>Click ME</button>
      
    </div>
  );
}

export default Home;
