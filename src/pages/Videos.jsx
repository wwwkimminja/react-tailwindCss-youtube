import React from 'react'
import {useParams} from 'react-router-dom'
import {useQuery} from '@tanstack/react-query'
import VideoCard from '../components/VideoCard';

function Videos() {
  const {keyword}=useParams();
  const {isLoading,error,data:videos}=useQuery({
    queryKey:['videos',keyword],
    queryFn:()=>fetch(`/videos/${keyword?'search':'popular'}.json`)
    .then((res)=>res.json())
    .then((data)=>data.items)
  }

  )


  return (
    <div>
      <div>Videos:{keyword?keyword:"popular"}</div>
      {isLoading&& <p>Loading...</p>}
      {error && <p>Something is wrong</p>}
      {videos && <ul>
        {videos.map((video,i) =><VideoCard key={i} video={video}/>)}
        </ul>}
    </div>
  )
}

export default Videos