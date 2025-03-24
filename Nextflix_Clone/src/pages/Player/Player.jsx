import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at : "",
    type: ""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTU4MGM0MzgxZDJhYzc3YTVkOGZkZTU3MmM2ZTQzYSIsIm5iZiI6MTc0MjgyNDEwNS44MTIsInN1YiI6IjY3ZTE2MmE5ODQ0Zjg1NzUyZGM3MDRlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gAehpjKDBAkT8WacyA_tpdEh0DmnRlNOvNF3j4vo_vI'
    }
  };
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(error => console.error(error));
  }, [])

  return <div className="player">
    <img src={back_arrow_icon} alt="" onClick={() => {navigate(-2)}}/>
    <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title="trailer" frameBorder="0" allowFullScreen></iframe>
    <div className="player-info">
      <p>{apiData.published_at.slice(0, 10)}</p>
      <p>{apiData.name}</p>
      <p>{apiData.type}</p>
    </div>
  </div>;
};

export default Player;
