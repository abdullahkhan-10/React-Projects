import { albumsData, assets } from '../assets/assets'
import Navbar from './Navbar'
import {useParams} from "react-router-dom"

const DisplayAlbum = () => {

    const {id} = useParams()
    // console.log(id);

    const myAlbumData = albumsData[id]
    // console.log(myAlbumData);
    
    
  return (
    <>
      <Navbar/>

      <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
            <img src={myAlbumData.image} className='w-48 rounded'  />

            <div className='flex flex-col'>
                <p>Playlist</p>
                <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{myAlbumData.name}</h2>
                <h4>{myAlbumData.desc}</h4>

                <p className='mt-1'>
                    <img src={assets.spotify_logo} className='inline-block w-5' />
                    <b>Spotify</b>
                    . 1,326,876 likes
                    . <b>50 songs,</b>
                    about 2 hr 34 min
                </p>
            </div>
      </div>
    </>
  )
}

export default DisplayAlbum