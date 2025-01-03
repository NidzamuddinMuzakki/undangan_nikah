import React from "react";

import {BungaBawahImageDiv,BungaAtasImageDiv,BungaAtas,BungaBawah,DivMohonMaaf,CoverDiv } from "./styled";
import BungaAtasImage from './../../images/Asset-6.png'
import BungaBawahImage from './../../images/Asset-7.png'

import BurungGif from './../../images/giphy-1-1.gif'


const Doa = ()=>{
    return(
        <div className="zoom" style={{position:'relative',display:'flex',marginTop:'30px', justifyContent:'center', alignItems:'center',width:'100vw',height:'600px',marginBottom:'30px',}}>
            <CoverDiv>
                <div style={{position:'absolute', opacity:0.5,top:10}}>
                    <img alt="burung" style={{width:'500px'}} src={BurungGif}></img>
                </div>
                <BungaAtas>
                   
                    <BungaAtasImageDiv src={BungaAtasImage} alt="bungaatas"></BungaAtasImageDiv>
                </BungaAtas>
                <DivMohonMaaf style={{marginTop:'0px'}}>
                    “Semoga Allah menghimpun yang terserak dari keduanya, memberkati mereka berdua dan kiranya Allah meningkatkan kualitas keturunan mereka, menjadikannya pembuka pintu rahmat, sumber ilmu dan hikmah serta pemberi rasa aman bagi umat.”
                </DivMohonMaaf>
                <DivMohonMaaf style={{fontWeight:'bold'}}>
                (Doa Nabi Muhammad SAW, pada pernikahan putrinya Fatimah Azzahra dengan Ali Bin Abi Thalib)
                </DivMohonMaaf>
                <BungaBawah>
                   
                   <BungaBawahImageDiv src={BungaBawahImage} alt="bungaatas"></BungaBawahImageDiv>
               </BungaBawah>

            </CoverDiv>
        </div>
    )
}

export default Doa