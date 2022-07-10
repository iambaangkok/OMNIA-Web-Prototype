import { useEffect, useState } from "react"
import { AiFillCaretLeft } from "react-icons/ai"

function LandingPageMainText(){

    const [toggleState, setToggleState] = useState<boolean>(true)

    useEffect(() => {
        
    }, [])
    
    const onClickToggle = () => {
        setToggleState(!toggleState)
    }

    var style={
        fontFamily: "'Orbitron', 'sans-serif'",
        fontSize:"60px",
        fontWeight: "400",
        justifyContent:"flex-end",
        alignItems:"flex-end",
        cursor: "pointer",
        transition:"0.5s"
    }

    if (toggleState){
        Object.assign(style,{
            opacity:"1",
            transform:"translate(-20px,0)",
            visibility:"visible",
            userSelect: "none",
        })
    }else{
        Object.assign(style,{
            opacity:"0",
            visibility:"hidden",
            userSelect: "none",
        })
    }

    console.log(style)

    return(
        <div className="flex-row" onClick={onClickToggle}
        style={{
            gap:"10px",
        }}>
            <div className="flex-col"
            style={style}>
                <div className='drop-shadow-exact'>The Intergalactic</div>
                <div className='drop-shadow-exact'>Terran-Goods Vendor</div>
            </div>
            <div className='flex-row' style={{alignItems:"center"}}>
                <AiFillCaretLeft className="drop-shadow-exact" transform="scale(2,2)"></AiFillCaretLeft>
                </div>
            <div className="bg-white drop-shadow-exact"
            style={{
                width:"5px",
            }}>
            </div>
        </div>
            
    )

}

export default LandingPageMainText