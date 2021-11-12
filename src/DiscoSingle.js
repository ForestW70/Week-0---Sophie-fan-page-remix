import { useEffect, useState } from 'react';
import Image from 'next/image'
import { officialDiscography } from '../src/sophieObject';

const DisplayOneItem = ({ album }) => {
    const [albumView, changeAlbumView] = useState([])

    useEffect(() => {
        const curr = officialDiscography.find(albums => albums.alt === album)
        changeAlbumView(curr)
    },[])

    // const currAlbum = albumView[0]
    console.log(albumView)

    return (
        <article>
            {/* <p>{currAlbum.year}</p>
            <h2>{currAlbum.title}</h2>
            <h6>{currAlbum.labels}</h6>
            <Image 
                width={currAlbum.imgXY[0]}
                height={currAlbum.imgXY[1]}
                src={currAlbum.img}
                alt={currAlbum.alt + " Album art"}
            />
            
            <ul>
                {currAlbum.trackList.map(song => (
                    <li>
                        <span>{song.songNum}</span>
                        <a href={song.link}>
                            {song.songName}
                        </a>
                    </li>
                ))}
            </ul> */}


        </article>
    )
}

export default DisplayOneItem;