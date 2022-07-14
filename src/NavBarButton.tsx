import { useState, useEffect } from 'react';
import axios from 'axios'
import './fonts.css'
import './NavBarButton.css'
import {AiFillCaretLeft} from 'react-icons/ai'

type NavBarButtonType = {
    text: string;
    url: string
}

function NavBarButton({text, url} : NavBarButtonType){

    const textSize = "24px"

    useEffect(() => {
    }, [])

    return(
        <div className='navbarbutton flex-col color-white drop-shadow-exact'
        style={{
            // gap: "4%",
            width:"100%",
            justifyContent: "space-between",
            position: "relative",

        }}>
            
            <div className='flex-row'
            style={{
                height: "100%",
                justifyContent: 'flex-end',
                alignItems:'flex-end',
            }}>
                <div className='navbarbutton-text color-white'
                style={{
                    fontFamily: "'Orbitron', 'sans-serif'",
                    fontSize:textSize,
                    fontWeight: "400",
                }}>
                    {text} 
                </div>

                <div className='flex-row' style={{paddingBottom:"5px"}}><AiFillCaretLeft></AiFillCaretLeft></div>
                
                <div className='bg-white'
                style={{
                    width:"2px",
                    height:"100%",
                }}>
                </div>
                
            </div>
            <div className='navbarbutton-base bg-black'
            style={{
                height:"10%"
            }}>
            </div>
        </div>
        
    )
}

export default NavBarButton