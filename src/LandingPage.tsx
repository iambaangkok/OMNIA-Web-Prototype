import { useState, useEffect } from 'react';
import axios from 'axios'
import NavBar from './NavBar';
import LandingPageMainText from './LandingPageMainText';

function LandingPage(){

    const [itemPictureURL, setItemPictureURL] = useState<string>("")
    const [itemName, setItemName] = useState<string>("")
    const [itemPrice, setItemPrice] = useState<number>(0.00)

    useEffect(() => {
        fetchItem();

        fetchItemName();

        randomPrice();
    }, [])

    const fetchItem = async () => {
        const currentTimeSeconds = Date.now()/1000
        const resp = await axios.get(`https://picsum.photos/seed/omnia${currentTimeSeconds}/1920/1080`, { responseType: "blob" })
        //console.log(resp)
        const url = URL.createObjectURL(resp.data)

        setItemPictureURL(url)
    }

    const fetchItemName = async () =>{
        var resp = await axios.get(`https://random-word-api.herokuapp.com/word?number=2`)
        var str : string = resp.data[0]
        str += ' '
        str += resp.data[1]

        setItemName(str.toUpperCase())
    }

    const randomPrice = async () =>{
        var rand10s = Math.random()*6+1
        var rand = Math.random()*(10**rand10s)+rand10s

        console.log(rand10s + " " + rand)

        rand = Math.floor(rand*100)/100

        setItemPrice(rand)
    }


    return(
        <div className='w-full '>
            <div className='w-full h-full color-white bg-gray bg-size-fill'
            style={{
                backgroundImage: `url(${itemPictureURL})`,
            }}>
                <NavBar></NavBar>
                <div className="flex-col"
                style={{
                    height:"50%",
                    justifyContent:"flex-end",
                    alignItems:"flex-end",
                    paddingRight:"10%",
                }}>
                    <LandingPageMainText></LandingPageMainText>
                    
                </div>
                <div className='flex-row'
                style={{
                    height:"30%",
                    justifyContent:"flex-start",
                    paddingLeft:"7%",
                }}>
                    <div className='flex-col color-black bg-white drop-shadow-exact'
                    style={{
                        width:"600px",
                        opacity:"0.8",
                        marginTop:"2%",
                    }}>
                        <div className='flex-row'
                        style={{
                            justifyContent:"space-between",
                            opacity:"1",
                            paddingTop:"5%",
                            paddingLeft:"5%",
                            paddingRight:"5%",
                        }}>
                            <div className='color-black'
                            style={{
                                width:"62%",
                                fontFamily: "'Orbitron', 'sans-serif'",
                                fontSize:"26px",
                                fontWeight: "600",
                            }}>{itemName}</div>
                            <div className='color-black'
                            style={{
                                fontFamily: "'Orbitron', 'sans-serif'",
                                fontSize:"26px",
                                fontWeight: "600",
                            }}>{itemPrice + " $"}</div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage