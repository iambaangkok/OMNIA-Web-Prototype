import { useState, useEffect } from 'react';
import axios from 'axios'
import NavBarButton from './NavBarButton';
import OMNIALogo from './OMNIALogo'

function NavBar(){

    useEffect(() => {
    }, [])

    return(
        <div className='flex-row w-full color-white'
        style={{
            gap: "4%",
            justifyContent: "space-between",
            height: "7%",
            position: "relative",
            boxSizing: "border-box",
            paddingLeft:"5%",
            paddingRight:"0%",
            marginTop:"2%",
            
        }}>
            <div className='flex-row'
            style={{
                gap:"10px",
                justifyContent: "flex-start"
            }}> 
                <OMNIALogo scale={1} color={"--color-white"}/>
                <div className="drop-shadow-exact"
                style={{
                    fontFamily: "'Orbitron', 'sans-serif'",
                    fontSize:"66px",
                    fontWeight: "700",
                    
                }}>
                    OMNIA
                </div>
            </div>
            <div className='flex-row'
            style={{
                gap: "0%",
                width: "45%",
                justifyContent:"space-between",
                position: "relative",
                paddingRight: "2%"
            }}            
            > 
                <NavBarButton text={"BROWSE"} url={""}/>
                <NavBarButton text={"SPECIALS"} url={""}/>
                <NavBarButton text={"WHO WE ARE"} url={""}/>
            </div>
        </div>
    )
}

export default NavBar