
import { useRef, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

import './accordion.css'
import microPhoneIcon from "./microphoneIcon.svg";
import React  from 'react';
import {  Container, Col, Row,  Button,   ButtonGroup  } from "react-bootstrap";

import { AiFillLike, AiTwotoneDislike } from "react-icons/ai";
import './App.css';


function  App()   {
  
  

  const [Word, setWord] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);
  const [counter,setCounter] = useState(0);



  const { transcript, resetTranscript } = useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);


  const microphoneRef = useRef(null);
  const btnref1 = useRef(null);  const btnref2 = useRef(null);  const btnref3 = useRef(null);  const btnref4 = useRef(null);  const btnref5 = useRef(null);  const btnref6 = useRef(null);
  const btnref11 = useRef(null); const btnref12 = useRef(null); const btnref13 = useRef(null); const btnref14 = useRef(null); const btnref15 = useRef(null); const btnref16 = useRef(null); 
  const btnref21 = useRef(null); const btnref22 = useRef(null); const btnref23 = useRef(null); const btnref24 = useRef(null); const btnref25 = useRef(null); const btnref26 = useRef(null);
  const btnref31 = useRef(null); const btnref32  = useRef(null);  const btnref33 = useRef(null); const btnref34 = useRef(null); const btnref35 = useRef(null); const btnref36 = useRef(null); 
  const btnref41 = useRef(null); const btnref42 = useRef(null); const btnref43 = useRef(null); const btnref44 = useRef(null); const btnref45 = useRef(null); const btnref46 = useRef(null); 


  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <div className="mircophone-container">
        Browser is not Support Speech Recognition.
      </div>
    );
  }



  const  handleListing = () => {
    setIsListening(true);
    microphoneRef.current.classList.add("listening");
    
    SpeechRecognition.startListening({
      continuous: true,

      language:'ar-MA'
    });




  };
  const stopHandle = () => {
    setIsListening(false);
    microphoneRef.current.classList.remove("listening");
    SpeechRecognition.stopListening();

    

  };
  const handleReset = () => {
    stopHandle();
    resetTranscript();
    setWord('')
  };

  const btnreffct = (ref)=>{
    if(transcript!==''){
      if(transcript===Word){

        ref.current.fontWeight='bold';
        setCounter(counter + 1);
        ref.current.disabled=true;
        ref.current.style.backgroundColor = 'green';
        
      }else{
        ref.current.style.backgroundColor = 'red'


    }
    }
    console.log(counter);
   
  }

 
  return (

    <Container style={{display:'flex', paddingTop:'20px'}}>


      
      <Row style={{ width:'40%', margin:20}}>
        <div>

        <div className="accordion">
      <div className="accordion-item">
        <div
          className="accordion-title"
          onClick={() => {
            setIsActive(true);
            
          }}
        >
          <div>{isActive ? '-' : '+'}</div>
          <div><span>letters of the alphabet/</span><span dir='rtl'>???????? ????????????????</span></div>
          
        </div>
        {isActive && <div className="accordion-content">

        <ButtonGroup  >
                      <Button ref={btnref1}  style={{width:'60px',height:'30px',margin:5}} onClick={()=>{setWord('??????');resetTranscript(); btnreffct(btnref1)}}>??</Button>
                      <Button ref={btnref2}   style={{width:'60px',height:'30px',margin:5}} onClick={()=>{setWord('??????');resetTranscript();btnreffct(btnref2) }}>??</Button>
                      <Button  ref={btnref3}  style={{width:'60px',height:'30px',margin:5}} onClick={()=>{setWord('??????');resetTranscript();btnreffct(btnref3)}}>??</Button>
                      <Button  ref={btnref4}  style={{width:'60px',height:'30px',margin:5}} onClick={()=>{setWord('??????');resetTranscript();btnreffct(btnref4)}}>?? </Button>
                      <Button  ref={btnref5}  style={{width:'60px',height:'30px',margin:5}} onClick={()=>{setWord('??????');resetTranscript();btnreffct(btnref5)}}>?? </Button>
                      <Button  ref={btnref6}  style={{width:'60px',height:'30px',margin:5}} onClick={()=>{setWord('??????');resetTranscript();btnreffct(btnref6)}}>??</Button>
        </ButtonGroup>
          
          </div>}
      </div>
      </div>

      <div className="accordion">
      <div className="accordion-item">
        <div
          className="accordion-title"
          onClick={() => {
          
            
            setIsActive2(true);
            
          }}
        >

          <div>{isActive2 ? '-' : '+'}</div>
          <div><span>el maad/</span><span dir='rtl'>????????</span></div>
          
        </div>
        {isActive2 && <div className="accordion-content">

        <ButtonGroup >
                      <Button ref={btnref11}  style={{width:'60px',height:'30px',margin:5}} onClick={()=>{
                        setWord('????');resetTranscript();btnreffct(btnref11)}}>????</Button>
                      <Button ref={btnref12}  style={{width:'60px',height:'30px',margin:5}} onClick={()=>{
                        setWord('????');resetTranscript();btnreffct(btnref12)}}>????</Button>
                      <Button ref={btnref13}  style={{width:'60px',height:'30px',margin:5}} onClick={()=>{
                        setWord('????');resetTranscript();btnreffct(btnref13)}}>????</Button>
                      <Button ref={btnref14}  style={{width:'60px',height:'30px',margin:5}} onClick={()=>{
                        setWord('????');resetTranscript();btnreffct(btnref14)}}>????</Button>
                      <Button ref={btnref15}  style={{width:'60px',height:'30px',margin:5}} onClick={()=>{
                        setWord('????');resetTranscript();btnreffct(btnref15)}}>????</Button>
                      <Button ref={btnref16}  style={{width:'60px',height:'30px',margin:5}} onClick={()=>{
                        setWord('????');resetTranscript();btnreffct(btnref16)}}>????</Button>
                    </ButtonGroup>

          </div>}
      </div>
      </div>

      <div className="accordion">
      <div className="accordion-item">
        <div
          className="accordion-title"
          onClick={() => {
            
            setIsActive4(true);
            
          }}
        >
          <div>{isActive4 ? '-' : '+'}</div>
          <div><span>el jar
            /</span><span dir='rtl'>????????</span></div>
          
        </div>
        {isActive4 && <div className="accordion-content">

        <ButtonGroup >
                    <Button ref={btnref31} style={{width:'60px',height:'30px',margin:5}} onClick={()=>{setWord('??????');resetTranscript();btnreffct(btnref31)}}>??????</Button>
                    <Button ref={btnref32} style={{width:'60px',height:'30px',margin:5}} onClick={()=>{setWord('??????');resetTranscript();btnreffct(btnref32)}}>??????</Button>
                    <Button ref={btnref33} style={{width:'60px',height:'30px',margin:5}} onClick={()=>{setWord('????????');resetTranscript();btnreffct(btnref33)}}>????????</Button>
                    <Button ref={btnref34} style={{width:'60px',height:'30px',margin:5}} onClick={()=>{setWord('????');resetTranscript();btnreffct(btnref34)}}>????</Button>
                    <Button ref={btnref35} style={{width:'60px',height:'30px',margin:5}} onClick={()=>{setWord('??????');resetTranscript();btnreffct(btnref35)}}>??????</Button>
                    <Button ref={btnref36} style={{width:'60px',height:'30px',margin:5}} onClick={()=>{setWord('??????');resetTranscript();btnreffct(btnref36)}}>??????</Button>
                  </ButtonGroup>
                    
          
          </div>}
      </div>
      </div>

      <div className="accordion">
      <div className="accordion-item">
        <div
          className="accordion-title"
          onClick={() => {
           
            setIsActive3(true);
            
          }}
        >
          <div>{isActive3 ? '-' : '+'}</div>
          <div><span>Tanween/</span><span>??????????????</span></div>
          
        </div>
        {isActive3 && <div className="accordion-content">
                    <ButtonGroup aria-label="Basic example">
                      <Button ref={btnref21}  style={{width:'60px',height:'30px',margin:5}} onClick={()=>{setWord('????');resetTranscript();btnreffct(btnref21)}}>????</Button>
                      <Button ref={btnref22}   style={{width:'60px',height:'30px',margin:5}} onClick={()=>{setWord('????');resetTranscript();btnreffct(btnref22)}}>????</Button>
                      <Button ref={btnref23}   style={{width:'60px',height:'30px',margin:5}} onClick={()=>{setWord('????');resetTranscript();btnreffct(btnref23)}}>????</Button>
                      <Button ref={btnref24}   style={{width:'60px',height:'30px',margin:5}} onClick={()=>{setWord('????');resetTranscript();btnreffct(btnref24)}}>????</Button>
                      <Button ref={btnref25}   style={{width:'60px',height:'30px',margin:5}} onClick={()=>{setWord('????');resetTranscript();btnreffct(btnref25)}}>????</Button>
                      <Button ref={btnref26}   style={{width:'60px',height:'30px',margin:5}} onClick={()=>{setWord('????');resetTranscript();btnreffct(btnref26)}}>????</Button>
                    </ButtonGroup>
          
          </div>}
      </div>
      </div>

      


      <div className="accordion">
      <div className="accordion-item">
        <div
          className="accordion-title"
          onClick={() => {
            
            setIsActive5(true);          
          
          }}
        >

        <div>{isActive5  ? '-' : '+'}</div>
        <div><span>Words/</span><span dir='ltr'>????????</span></div>
        
        </div>
        {isActive5 && <div className="accordion-content">

        <ButtonGroup >
                    <Button ref={btnref41} style={{width:'60px',height:'30px',margin:5}} onClick={()=>{setWord('????????');resetTranscript();btnreffct(btnref41)}}>????????</Button>
                    <Button ref={btnref42} style={{width:'60px',height:'30px',margin:5}} onClick={()=>{setWord('??????');resetTranscript();btnreffct(btnref42)}}>??????</Button>
                    <Button ref={btnref43} style={{width:'60px',height:'30px',margin:5}} onClick={()=>{setWord('????????');resetTranscript();btnreffct(btnref43)}}>????????</Button>
                    <Button ref={btnref44} style={{width:'60px',height:'30px',margin:5}} onClick={()=>{setWord('????????');resetTranscript();btnreffct(btnref44)}}>????????</Button>
                    <Button ref={btnref45} style={{width:'60px',height:'30px',margin:5}} onClick={()=>{setWord('????????');resetTranscript();btnreffct(btnref45)}}>????????</Button>
                    <Button ref={btnref46} style={{width:'60px',height:'30px',margin:5}} onClick={()=>{setWord('????????');resetTranscript();btnreffct(btnref46)}}>????????</Button>
          </ButtonGroup>
                  
          
          </div>}
      </div>
      </div>






          
        </div>
      </Row>


     


      <Row style={{ width:'30%', margin:20,paddingTop:'150px'}}>

        
        
        <div className="microphone-wrapper">
          <div className="mircophone-container">
            <button
              className="microphone-icon-container"
              ref={microphoneRef}
              onMouseDown={handleListing} 
              onMouseUp={stopHandle}            
            >
              <input type="image" src={microPhoneIcon} alt="microphone" className="microphone-icon" />
              
            </button>
            <div className="microphone-status">
              <h3>
              {isListening ? "Listening ........." : "Hold to start listening"}
              </h3>
              
            </div>
          </div>
        </div>

        <div style={{height:'50px'}}></div>

        {transcript && (
          <div className="microphone-result-container">
            <div className="microphone-result-text"><h2>{transcript}</h2></div>
            <button  style={{width:'90px',height:'50px', fontWeight: 'bold', }} onClick={handleReset}>
              Reset
            </button>
          </div> )
        }
        
      </Row>
      <Row style={{ width:'30%', margin:20, padding:30,}}>
        <Col >
        <div style={{height:'50px'}}  >
          <p style={{paddingLeft:30,fontWeight: 'bold',cursor: 'pointer'}}>your Score Is : <span style={{fontSize:'30px', fontWeight:'bold'}}>{counter}/30 </span></p>
          </div>

        <div style={{height: '400px', top:50, backgroundColor: 'rgba(0, 0, 0, 0.2)'}} >
         <div style={{marginLeft:'50px', paddingTop: '30px'}}>
            <h1 >Selected word : </h1>
            <h1 style={{height: 30,marginLeft: '80px', marginTop: '40px'}}>{Word}</h1>
            

            <h1 style={{marginTop: '30px'}}  className="alltogether">
              The result is : <p style={{marginTop: '30px',marginLeft: '65px'}}>{transcript!==''?transcript===Word?<AiFillLike size={70}/>:<AiTwotoneDislike size={70}/>:''}</p></h1>
          
         </div>
          
        </div>
        
        </Col>
      </Row>
      
    </Container>
    

    

    
  );
}
export default App;