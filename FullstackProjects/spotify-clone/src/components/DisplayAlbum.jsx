import { albumsData, assets, songsData } from '../assets/assets'
import Navbar from './Navbar'
import {useParams} from "react-router-dom"

const DisplayAlbum = () => {

    // we get the id from (Albums.jsx) component througn useNavigation hook.
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
                    <b className='mx-2'>Spotify</b>
                      1,326,876 likes
                     <b className='mx-2'>50 songs,</b>
                    about 2 hr 34 min
                </p>
            </div>
      </div>

      <div className='mt-10 grid grid-cols-3 md:grid-cols-4 mb-4 pl-2 text-[#a7a7a7]'>
        <p><b className='mr-4'>Title</b></p>
        <p>Album</p>
        <p className='hidden md:block'>Date Added</p>
        <img src={assets.clock_icon} className='m-auto w-4' />
      </div>
      <hr />

      {
        songsData.map( (song, index) =>(
          <div key={index} className='grid grid-cols-3 md:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff26] cursor-pointer'>
            {/* title row */}
            <p className='text-white'>
              <b className='mr-4 text-[#a7a7a7]'>{index + 1}</b>
              <img src={song.image} className='w-10 inline mr-4' />
              {song.name}
            </p>

            {/* album row */}
            <p className='text-[15px]'>{myAlbumData.name}</p>

            {/* date added row  */}
            <p className='text-[15px] hidden md:block'>5 days ago</p>

            <p className='text-[15px] items-center pl-28'>{song.duration}</p>
          </div>
        ))
      }
    </>
  )
}

export default DisplayAlbum