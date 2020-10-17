import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
export const GifExpertApp = () => {

    //const categories = ['One Punch','Samurai x','Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

   /* const handleAdd = ()=>{
        //aniadimos los elementos que tenemos
        setCategories([...categories,'HunterxHunter']);
    }*/


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <ol>
                {
                    categories.map((categoria)=>(
                        <GifGrid 
                            key={categoria}
                            category={categoria}
                        />
                    ))
                        //return <li key={categoria}>{categoria}</li>;
                }
            </ol>
        </>
    )
}
