import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    // const [count, setCount] = useState(0);

    // const [images, setImages] = useState([]);

    // useEffect(() => {
    //     getGifs(category)
    //         .then( setImages );
    // }, [category]);

    const {data:images, loading} = useFetchGifs( category );


    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading</p>}
            <div className = "card-grid">
                    {
                        images.map( img => (
                            // <li key = {id}>{title}</li>
                        <GifGridItem 
                        key = {img.id} 
                        {...img} />
                        ))
                    }
                {/* { <button onClick= { () => setCount(count + 1)}> </button> } */}
            </div>
        </>
    )
}