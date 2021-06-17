const Home = () => {
  const handleClcik = (e) =>{
    console.log('HELLO LEE',e);
  }
  const again = (name,e) =>{
    console.log('HELLO' + name ,e.target);
  }

  return ( 
    <div className="home">
      <h2>Home Page</h2>
      <button onClick={handleClcik}>Click ME</button>
      <button onClick={(e)=> again('KIM',e)}>Click ME</button>
    </div>
  );
}

export default Home;
