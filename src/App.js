import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components'
import MovieComponent from './components/MovieComponent';
import MovieInfoComponent from './components/MovieInfoComponent';

const Container=styled.div`
display:flex;
flex-direction:column
`;
const Header=styled.div`
display:flex;
flex-direction:row;
background-color:black;
color:white;
padding:10px;
justify-content:space-between;

`;
const AppName=styled.div`
display:flex;
flex-direction:row;
align-items:center;
font-size:40px;
`;
const SearchBox=styled.div`
display:flex;
flex-direaction:row;
padding:10px 10px;
background-color:white;
margin-left:20px;
width:50%;

`;
const SearchInput=styled.input`
color:black;
font-size:16px;
width:100%;
font-weight:bold;
margin-left:5px;
border:none;


`;
const MovieListContainer=styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
padding:30px;
justify-content:space-evenly;



`


function App() {

  const[searchQuery,UpdateQuery]=useState("iron man");
  const[timeoutId,updateTimeoutId]=useState();
  const[movieList,setMovieList]=useState();
  const[selectedMovie,onMovieSelect]=useState();
const key="1019ef7"



 const onTextChange=(e)=>{
  clearTimeout(timeoutId)
  UpdateQuery(e.target.value)
  const timeout=setTimeout(()=>console.log("API CALL"), 500)
  updateTimeoutId(timeout)
}
useEffect(()=>{
  const fetchData=async()=>{
    const response=await fetch(`http://www.omdbapi.com/?s=${searchQuery}&apikey=${key}`)
    const reJson= await response.json()
    
    setMovieList(reJson.Search)
  }
  fetchData();

},[searchQuery])


  return (
    <>
    <Container>

   
    <Header><AppName>  Movie</AppName> 
<SearchBox >
  <SearchInput placeholder='Search Movie' onChange={onTextChange}/>
</SearchBox>
    </Header>
    {selectedMovie && <MovieInfoComponent selectedMovie={selectedMovie}/>}

    <MovieListContainer>
      {movieList? movieList.map(( movie,i)=>(
         <MovieComponent key={i} movie={movie} onMovieSelect={onMovieSelect} />

      )):
      "No Movie Search"



      }

     
      

    </MovieListContainer>

    
    </Container>
    </>
      
  );
}

export default App;
