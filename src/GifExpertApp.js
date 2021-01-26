import React, {useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
// import PropTypes from 'prop-types'

export const GifExpertApp = () => {

    // const categories = ['Sabrina', 'Gilmore Girls', 'Friends'];
    const [categories, setCategories] = useState(['HIMYM']);    

    
    // const handleAdd = () => {
    //     // setCategories( [...categories, 'HIMYM'] );

    //     setCategories(cats => ['HIMYM', ...categories]);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories} />
            <hr/>  
            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    categories.map( category => 
                        <GifGrid 
                            key= {category}
                            category= {category}
                        />
                    // <li key={category} > {category} </li>
                    )
                }
            </ol>
        

        </>
    );
};

GifExpertApp.propTypes = {

};

export default GifExpertApp
