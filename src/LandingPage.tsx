import { useState, useEffect } from 'react';
import axios from 'axios'
import NavBar from './NavBar';

function LandingPage(){

    const [itemPictureURL, setItemPictureURL] = useState<string>()

    useEffect(() => {
        fetchItem();
    }, [])

    const fetchItem = async () => {
        const currentTimeSeconds = Date.now()/1000
        const resp = await axios.get(`https://picsum.photos/seed/omnia${currentTimeSeconds}/1920/1080`, { responseType: "blob" })
        //console.log(resp)
        const url = URL.createObjectURL(resp.data)

        setItemPictureURL(url)

    }


    return(
        <div className='w-full'>
            <div
            className='w-full h-full color-white bg-black bg-size-fill'
            style={{
                backgroundImage: `url(${itemPictureURL})`,
            }}>
                <NavBar></NavBar>
                <div className="flex-col"
                style={{
                    height:"50%",
                    fontFamily: "'Orbitron', 'sans-serif'",
                    fontSize:"60px",
                    fontWeight: "400",
                    justifyContent:"flex-end",
                    alignItems:"flex-end",
                    paddingRight:"5%",
                }}>
                    <div className='drop-shadow-exact'>Intergalactic</div>
                    <div className='drop-shadow-exact'>Terran-Goods Vendor</div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage