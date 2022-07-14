import { useState, useEffect } from 'react';
import axios from 'axios'
import NavBar from './NavBar';
import LandingPageMainText from './LandingPageMainText';
import LandingPageItemDetail from './LandingPageItemDetail';

function LandingPage(){

    const [itemPictureURL, setItemPictureURL] = useState<string>("")
    const [itemName, setItemName] = useState<string>("")
    const [itemPrice, setItemPrice] = useState<number>(0.00)

    const [itemPictureStyle, setItemPictureStyle] = useState<Object>({})
    const [itemNameStyle, setItemNameStyle] = useState<Object>({})
    const [itemPriceStyle, setItemPriceStyle] = useState<Object>({
        fontFamily: "'Orbitron', 'sans-serif'",
        fontSize: "26px",
        fontWeight: "600",
    })

    const [nextItemPictureURL, setNextItemPictureURL] = useState<string>("")
    const [nextItemName, setNextItemName] = useState<string>("")
    const [nextItemPrice, setNextItemPrice] = useState<number>(0.00)

    const delay = (timemillis:number) => new Promise((resolve, reject) => {setTimeout(()=>{resolve(true)}, timemillis)});

    useEffect(() => {
        firstFetch()
    }, [])

    const firstFetch = async () =>{
        await fetchNextItem();
        await delay(1000)
        await nextItem();
    }

    const nextItem = async () => {
        var itemPictureStyle_ = {
            backgroundImage: `url(${itemPictureURL})`,
            transition:"0.2s",
            opacity:"1",
        }
        var itemNameStyle_ = {
            width: "62%",
            fontFamily: "'Orbitron', 'sans-serif'",
            fontSize: "26px",
            fontWeight: "600",

            transition:"0.2s",
            opacity:"0",
        }
        var itemPriceStyle_ = {
            fontFamily: "'Orbitron', 'sans-serif'",
            fontSize: "26px",
            fontWeight: "600",

            transition:"0.2s",
            opacity:"0",
        }

        setItemPictureStyle(itemPictureStyle_)
        setItemNameStyle(itemNameStyle_)
        setItemPriceStyle(itemPriceStyle_)

        // DELAY
        await delay(300)
        // POST-DELAY

        setItemPictureURL(nextItemPictureURL)
        setItemName(nextItemName)
        setItemPrice(nextItemPrice)

        itemPictureStyle_ = {
            backgroundImage: `url(${itemPictureURL})`,
            transition:"0.2s",
            opacity:"1",
        }

        itemNameStyle_ = {
            width: "62%",
            fontFamily: "'Orbitron', 'sans-serif'",
            fontSize: "26px",
            fontWeight: "600",

            transition:"0.2s",
            opacity:"1",
        }

        itemPriceStyle_ = {
            fontFamily: "'Orbitron', 'sans-serif'",
            fontSize: "26px",
            fontWeight: "600",

            transition:"0.2s",
            opacity:"1",
        }
        setItemPictureStyle(itemPictureStyle_)
        setItemNameStyle(itemNameStyle_)
        setItemPriceStyle(itemPriceStyle_)

    }

    const fetchNextItem = async () =>{
        var itemPicture = await fetchItemPicture();
        var url = URL.createObjectURL(itemPicture)

        var words = await fetchItemName();
        var str : string = words[0]
        str += ' '
        str += words[1]
        str = str.toUpperCase()

        var price = randomPrice();

        setNextItemPictureURL(url)
        setNextItemName(str)
        setNextItemPrice(price)
    }

    const fetchItemPicture = async () => {
        const currentTimeSeconds = Date.now()/1000 + Math.random()*10
        const resp = await axios.get(`https://picsum.photos/seed/omnia${currentTimeSeconds}/1920/1080`, { responseType: "blob" })
        return resp.data
    }

    const fetchItemName = async () =>{
        var resp = await axios.get(`https://random-word-api.herokuapp.com/word?number=2`)
        return resp.data

    }

    const randomPrice = () =>{
        var rand10s = Math.random()*5+1
        var rand = Math.random()*(10**rand10s)+rand10s

        console.log(rand10s + " " + rand)

        rand = Math.floor(rand*100)/100
        return rand
    }


    return(
        <div className='w-full h-full bg-black'>
            <div className='w-full h-full color-white bg-black bg-size-fill'>
                <div className='w-full h-full color-white bg-black bg-size-fill'
                style={itemPictureStyle}>

                </div>
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
                    <LandingPageItemDetail itemName={itemName} itemPrice={itemPrice} itemNameStyle={itemNameStyle} itemPriceStyle={itemPriceStyle} nextItem={nextItem} fetchNextItem={fetchNextItem}></LandingPageItemDetail>
                </div>
            </div>
        </div>
    )
}

export default LandingPage