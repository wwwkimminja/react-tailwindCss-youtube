import React from 'react'
import {useParams} from 'react-router-dom'
import {useQuery} from '@tanstack/react-query'
import VideoCard from '../components/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';

function Videos() {
  const {keyword}=useParams();
  const {youtube}=useYoutubeApi();
  const {isLoading,error,data:videos}=useQuery({
    queryKey:['videos',keyword],
    queryFn:()=>{
      return youtube.search(keyword)
    }
  }
  )

  return (
    <div>
      <div>Videos:{keyword?keyword:"popular"}</div>
      {isLoading&& <p>Loading...</p>}
      {error && <p>Something is wrong</p>}
      {videos && <ul>
        {videos.map((video) =><VideoCard key={video.id} video={video}/>)}
        </ul>}
    </div>
  )
}

export default Videos