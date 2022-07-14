import { useEffect } from "react";
import './LandingPageItemDetail.css'

type LandingPageItemDetailType = {
    itemName:string;
    itemPrice:number;
    // setItemName:Function;
    // setItemPrice:Function;
    itemNameStyle:Object;
    itemPriceStyle:Object;
    nextItem:Function;
    fetchNextItem:Function;
}

function LandingPageItemDetail({itemName, itemPrice, itemNameStyle, itemPriceStyle, nextItem, fetchNextItem} : LandingPageItemDetailType) {

    useEffect(() => {
        // fetchItem()
    }, [])

    const triggerOnClickTransition = () => {
        nextItem()
        fetchNextItem()
    }


    return (
        <div className='flex-col '
            
            style={{
                width: "600px",
                // height:"100px",
                opacity: "0.8",
                marginTop: "2%",
                justifyContent:"space-between",
                userSelect: "none",
            }}>
            <div className='flex-row color-black bg-white drop-shadow-exact'
                style={{
                    justifyContent: "space-between",
                    height:"70%",
                    opacity: "1",
                    paddingTop: "5%",
                    paddingLeft: "5%",
                    paddingRight: "5%",
                }}>
                <div className='color-black'
                    style={itemNameStyle}>{itemName}</div>
                <div className='color-black'
                    style={itemPriceStyle}>{itemPrice + " $"}</div> 
            </div>
            <button className='lpid-random-button
            flex-row color-black bg-white drop-shadow-exact'
            onClick={() => {
                triggerOnClickTransition()
            }}
            style={{
                justifyContent:"center",
                alignItems:"center",
                width: "600px",
                height: "15%",
                opacity: "1",
                fontFamily: "'Orbitron', 'sans-serif'",
                fontSize: "20px",
                fontWeight: "600",
            }}>
                SEE A RANDOM PRODUCT

            </button>
        </div>
    )
}

export default LandingPageItemDetail