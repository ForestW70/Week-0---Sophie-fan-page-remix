import { useEffect, useState } from 'react';
import Image from 'next/image'
import { officialDiscography } from '../src/sophieObject';

const DisplayOneItem = ({ album }) => {
    const [albumView, changeAlbumView] = useState({officialDiscography})


    const alb = officialDiscography.album
    console.log(albumView)

    return (
        <article>
            <h2>{album}</h2>
            <h6>Transgressive Records, Future Classic</h6>
            <Image 
                width="600" 
                height="442"
                src="/ooepura-art.jpg"
                alt="oil"
            />
            
            <ol>
                <li><a href="" target="_blank">1</a></li>
                <li><a href="" target="_blank">1</a></li>
                <li><a href="" target="_blank">1</a></li>
                <li><a href="" target="_blank">1</a></li>
                <li><a href="" target="_blank">1</a></li>
                <li><a href="" target="_blank">1</a></li>
                <li><a href="" target="_blank">1</a></li>
                <li><a href="" target="_blank">1</a></li>
                <li><a href="" target="_blank">1</a></li>
                <li><a href="" target="_blank">1</a></li>
                <li><a href="" target="_blank">1</a></li>
                <li><a href="" target="_blank">1</a></li>
                <li><a href="" target="_blank">1</a></li>
            </ol>

        </article>
    )
}

export default DisplayOneItem;