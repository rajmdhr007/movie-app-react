import React, { useEffect } from 'react'
import { useState } from 'react';
import styled from 'styled-components'
const Container=styled.div`
display:flex;
flex-direction:row;
padding:20px 30px;
justify-content-center;
border-bottom:1px solid lightgray;


`
const CoverImage=styled.img`

height:362px;
width:500px;
`;
const MovieName=styled.span`
display:flex;
flex-direction:column;
font-size:30px;
margin:15px;

`;
const InfoColumn=styled.span`
display:flex;
flex-direction:row;
justify-content:space-between;
border-bottom:3px solid lightgray;


`;
const Movie=styled.div`
font-size:25px;
margin-top:10px

`;


const MovieInfoComponent = ({selectedMovie}) => {
const[m,setM]=useState()
console.log(selectedMovie.imdbID)
useEffect(()=>{
    const fetchData1=async()=>{
        const response=await fetch(`http://www.omdbapi.com/?i=${selectedMovie.imdbID}&apikey=1019ef7`)
        const reJson= await response.json()
        setM(reJson)
       
      }
      fetchData1();
},[selectedMovie])

console.log(m?.Released)
  return (
    <Container>
    
    <CoverImage img src={selectedMovie.Poster}></CoverImage>
<InfoColumn>
<MovieName>




    <div>{m?.Title}</div>
    <Movie>Year:{selectedMovie.Year}</Movie>
<Movie>Releashed Date:{m?.Released}</Movie>



    <Movie>Genre:{m?.Genre}</Movie>
    <Movie>Artists:{m?.Actors}</Movie>
    <Movie>Plot:{m?.Plot}</Movie>
    <Movie>Imdb:{m?.imdbRating}</Movie>
    <Movie>Runtime:{m?.Runtime}</Movie>

    </MovieName>



</InfoColumn>
    </Container>
  )
}

export default MovieInfoComponent