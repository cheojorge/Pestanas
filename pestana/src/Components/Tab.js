import React from 'react'

export const Tab = ({tabs,fun}) => {
    
    const onClickHandler = (e, value) =>{
        const id = e.target.id
        var intro = document.getElementById(id);
        fun(value, intro)
        
        
        
    }
        return tabs.map((item, index)=>{
            return(
                <li key={index}  className="nav-item">
                    <button 
                        id= {index}
                        className="nav-link active" 
                        onClick = {(e) => onClickHandler(e, item)}>{item}
                    </button>
                </li>
            ) 
        });
}
