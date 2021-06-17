import { useState } from 'react';

const Home = () => {
  
  const [name,setName] = useState('LEEEE')
  const [age,setAge] = useState(20)

  const handleClcik = (e) =>{
    setName('KOM')
    setAge(30)
  }


  return ( 
    <div className="home">
      <h2>Home Page</h2>
      <p>{name} is {age}</p>
      <button onClick={handleClcik}>Click ME</button>
      
    </div>
  );
}

export default Home;
