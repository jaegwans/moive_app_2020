import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component{

  state ={
    isLoading: true,
    movies :[] ,//setState로 state를 추가해도 됨 
  }  

  getMovies= async ()=>{
    const {data:{data:{movies}}} = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
    this.setState({movies : movies,isLoading:false});
  }

  componentDidMount(){ //componentDidMount 생명주기 (Loading 전 )
   this.getMovies();//this는 이 클래스를 뜻
  }

 render(){
   let {isLoading,movies} = this.state;//구조분해할당 후 중괄호 때고 사용 가능
   return( <section className="container">{isLoading ? <div className="loader"><span className="loader__text"> 'Loading...'</span></div>: (
<div className="movies">
   {movies.map((movie)=>{
     console.log(movie);
  return( <Movie 
  key={movie.id}
  id={movie.id} 
  year={movie.year} 
  title={movie.title}
  summary={movie.summary}
  poster={movie.medium_cover_image}
  genres={movie.genres}/>)
  })}
  </div>
  )}</section>
  


   )};
 }

export default Home;
