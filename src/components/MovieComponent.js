import React from 'react'
import styled from 'styled-components'

const MovieContainer=styled.div`
display:flex;
flex-direction:column;
padding:30px;
width:250px;
box-shadow:0 3px 10px 0 #aaa;
cursor:pointer;
`;
const CoverImage=styled.img`
object-fit:cover;
height:362px;
`;
const MovieName=styled.span`
font-size:30px;
margin:15px;

`;
const InfoColumn=styled.span`
display:flex;
flex-direction:row;
justify-content:space-between;

`;

const MovieComponent = ({movie,onMovieSelect}) => {
  return (
    <MovieContainer onClick={()=>onMovieSelect(movie)}>
    
         <CoverImage img src={movie.Poster}/>

        <MovieName>
                {movie.Tile}
         </MovieName>
         <InfoColumn>
<div>Year:{movie.Year}</div>
<div>Type:{movie.Type}</div>
         </InfoColumn>
        
        </MovieContainer>
        
  )
}

export default MovieComponent