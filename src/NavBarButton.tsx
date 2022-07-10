import { useState, useEffect } from 'react';
import axios from 'axios'
import './fonts.css'

type NavBarButtonType = {
    text: string;
    url: string
}

function NavBarButton({text, url} : NavBarButtonType){

    const textSize = "24px"

    useEffect(() => {
    }, [])

    return(
        <div className='flex-col color-black bg-white drop-shadow-exact'
        style={{
            // gap: "4%",
            width:"30%",
            justifyContent: "space-between",
            position: "relative",
            
        }}>
            
            <div className='flex-row'
            style={{
                height: "100%",
                justifyContent: 'space-between',
                alignItems:'flex-end',
                paddingRight: "4%"
                
            }}>
                <div className='bg-yellow'
                style={{
                    height:"100%",
                    width:"2px",
                    
                }}>

                </div>
                <div
                style={{
                    fontFamily: "'Orbitron', 'sans-serif'",
                    fontSize:textSize,
                    fontWeight: "400",
                }}>
                    {text}     
                </div> 
                
            </div>
            <div className='bg-black'
            style={{
                height:"10%"
            }}>
                
            </div>
        </div>
        
    )
}

export default NavBarButton