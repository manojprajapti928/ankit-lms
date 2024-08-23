import React,{useState,useEffect} from 'react'
import './UseAI.css'

import parse from 'html-react-parser';
 





import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";

export default function UseAI() {

    let [Res, setRes] = useState("");
    let [Prompt, setPropmt] = useState("");

    useEffect(() => {
      function GetAnswerFromAi() {
        const apiKey = "AIzaSyD_AmKAFdHhulQxpPyDmvbqMgtjRad8L5E";
        const genAI = new GoogleGenerativeAI(apiKey);
  
        const model = genAI.getGenerativeModel({
          model: "gemini-1.5-flash",
        });
  
        const generationConfig = {
          temperature: 1,
          topP: 0.95,
          topK: 64,
          maxOutputTokens: 8192,
          responseMimeType: "text/plain",
        };
  
        async function run() {
          const chatSession = model.startChat({
            generationConfig,
            history: [],
          });
  
          const result = await chatSession.sendMessage(Prompt);
          console.log(result.response.text());
          // setRes(result.response.text());
          setRes(formatResponse(result.response.text()));
        }
  
        run();
      }
      GetAnswerFromAi();
    }, [Prompt]);

      function handleSubmit(e) {
        e.preventDefault();
        setPropmt(e.target[0].value);
        console.log(e.target[0].value + "2+2");
        //  e.target[0].value = "";
      }



      function formatResponse(text) {
        // Example: Simple formatting logic for illustrative purposes
        let formattedText = text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // bold text surrounded by **
        .replace(/- (.*?)$/gm, '<li>$1</li>') // list items prefixed by -
        .replace(/\n/g, '<br/>') // replace newlines with <br/>
        .replace(/==(.+?)==/g, '<span class="highlight">$1</span>'); // highlighted text surrounded by ==
  
      // Wrap list items with <ul> tags
      formattedText = formattedText.replace(/<br\/><li>/g, '<ul><li>').replace(/<\/li><br\/>/g, '</li></ul>');
  
      return formattedText;
      }



  return (<>
  <div className='ai_img'></div>
    <div className="AI_container">
  
      <h1>Use AI</h1>

      <form  className="form" onSubmit={(e) => handleSubmit(e)}>
          <input type='text' placeholder='How can AI help you today'/>
          <button>Help</button>
        </form>
        {Res && <div className="response">{parse(Res)}</div>}

    </div>
    </>
  )
}
