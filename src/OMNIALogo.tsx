type OMNIALogoType ={
    scale:number;
    color:string;
}


function OMNIALogo({scale, color} : OMNIALogoType){
    return (
        <svg className="drop-shadow-exact"  viewBox="0 0 68 68"
        style={{
            
        }}>
            <path transform={"scale(" + scale + ")"} fill={"var(" + color + ")"}
            d="m 0 0 v 68 h 68 v -68 h -68 z m 32.6 64.6 l -12.9 -7.5 l -13.6 7.5 l -2.7 -4.1 l 13.6 -7.5 v -15.6 h 4.8 v 15.6 l 13.6 7.5 l -2.7 4.1 z m 18.4 -21.1 v 15.6 h -4.8 v -15.6 l -13.6 -7.5 l 0 0 l -12.9 -7.5 l -13.6 7.5 l -2.7 -4.1 l 13.6 -7.5 v -15.6 h 4.8 v 15.6 l 13.6 7.5 l 0 0 l 12.9 7.5 l 13.6 -7.5 l 2.7 4.1 l -13.6 7.5 z m 0 -27.9 v 15.6 h -4.8 v -15.6 l -13.6 -8.2 l 2.7 -4.1 l 12.9 7.5 l 13.6 -7.5 l 2.7 4.1 l -13.6 8.2 z"/>
        </svg>

    );
}


export default OMNIALogo