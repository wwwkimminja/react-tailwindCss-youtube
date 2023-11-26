import { createContext, useContext} from 'react';
import YoutubeApi from '../api/youtube';
import YoutubeClient from '../api/youtubeClient';

export const YoutubeApiContext = createContext();

const client = new YoutubeClient()

const youtube = new YoutubeApi(client)

export function YoutubeApiProvider({children}){
  return <YoutubeApiContext.Provider value={{youtube}}>
    {children};
  </YoutubeApiContext.Provider>

}

export function useYoutubeApi(){
  return useContext(YoutubeApiContext)

}