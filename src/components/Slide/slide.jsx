import React,{useState} from 'react'
import {SlideS,Wrapper,Slider,Image,Info,InfoText,ImageControl,ImageIndex} from './slideStyle'
import {Button} from '../generic/genericStyles'
import {GrPrevious,GrNext} from 'react-icons/gr'

function Slide(){
    window.onresize=()=>{
		setBoxMargin(0)
	}
    function Next(){
		let boxSize=(document.getElementById('box')).clientWidth
		const maxMargin=(boxSize*4)
		if (BoxMargin!==(maxMargin*-1)){
			setBoxMargin(BoxMargin-boxSize)
		}	
	}
	function Prev(){
		let boxSize=(document.getElementById('box')).clientWidth
		const maxMargin=(boxSize*4)
		if (BoxMargin!==0){
			setBoxMargin(BoxMargin+boxSize)
		}
	}
    function changeImage(event){
        let id=event.target.id
        var boxSize=(document.getElementById('box')).clientWidth
        var margin=0
        if (id=='1'){
            margin=0
        }
        if (id=='2'){
            margin=((boxSize*2)*-1)
        }
        if (id=='3'){
            margin=((boxSize*3)*-1)
        }
        if (id=='4'){
            margin=((boxSize*5)*-1)
        }
        setBoxMargin(margin)
        
    }

    const [BoxMargin,setBoxMargin]=useState()
    const [ButtonCollor1,setButtonCollor1]=useState('transparent')
    const [ButtonCollor2,setButtonCollor2]=useState('transparent')
    const [ButtonCollor3,setButtonCollor3]=useState('transparent')
    const [ButtonCollor4,setButtonCollor4]=useState('transparent')
    return(
        <SlideS>
            <Button id='next' onClick={Next}><GrNext size='50px'/></Button>
            <Button id='prev' onClick={Prev} ><GrPrevious size='50px'/></Button>
            <ImageControl>
                <ImageIndex collor={ButtonCollor1} onClick={changeImage} id='1'/>
                <ImageIndex collor={ButtonCollor2} onClick={changeImage} id='2'/>
                <ImageIndex collor={ButtonCollor3} onClick={changeImage} id='3'/>
                <ImageIndex collor={ButtonCollor4} onClick={changeImage} id='4'/>
            </ImageControl>
            <Wrapper id='box'>
                <Slider margin={BoxMargin}>
                    <Image src='images/slide-foto1.webp'></Image>
                    <Image src='images/slide-foto2.webp'></Image>
                    <Image src='images/slide-foto3.webp'></Image>
                    <Image src='images/slide-foto4.webp'></Image>
                </Slider>
            </Wrapper>
            <Info>
                <InfoText>SITE SEGURO E CONFIÁVEL</InfoText>
                <InfoText>PRAZO DE TROCA AMPLIADO PARA 60 DIAS</InfoText>
                <InfoText>FRETE GRÁTIS PARA COMPRAS ACIMA DE R$ 599,90</InfoText>
            </Info>
        </SlideS>
    )
}

export default Slide