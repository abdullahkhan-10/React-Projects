import {createContext, useState} from "react"
import run from "../config/gemini"

export const Context = createContext()

const ContextProvider = (props) =>{

    const [input, setInput] = useState("")
    const [recentPrompt, setRecentPrompt] = useState("")
    const [prevPrompt, setPrevPrompt] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState("")

    // to make resulted text smooth and like typing. 
    const delayPara = (index, nextWord) =>{
        setTimeout(() => {
            setResultData( prev => prev + nextWord)
        }, 75*index);
    }

    // to add new chat
    const newChat = ()=>{
        setLoading(false)
        setShowResult(false)
    }

    // Function to sent the prompt and called the function (run) on which we have hit api.
    const onSent = async(prompt) =>{

        setResultData("")
        setLoading(true)
        setShowResult(true)
        let response;
        if (prompt !== undefined) {
            response = await run(prompt)
            setRecentPrompt(prompt)
        }else{
            // to save previouse prompt.
            setPrevPrompt( prev=>[...prev, input])
            setRecentPrompt(input)

            // here we have sent the input as parameter to (run) function, the run function get data from api and return that data, which we are storing it here in const (response). 
            response = await run(input)
        }


        // to remove initial stars from text data and make first letter bold 
        let responseArray = response.split("**");
        let newResponse = "";
        for(let i = 0; i < responseArray.length; i++){
            if (i === 0 || i%2 !== 1) {
                newResponse += responseArray[i]
            }
            else{
                newResponse += "<b>"+responseArray[i]+"</b>"
            }
        }

        // to add break at the end of paragraph 
        let newResponse2 = newResponse.split("*").join("</br>")

        // to make resulted text smooth and like typing. 
        let newResponseArray = newResponse2.split(" ")
        for (let i = 0; i < newResponseArray.length; i++) {
            const nextWord = newResponseArray[i];
            delayPara(i, nextWord+ " ")
            
        }

        setResultData(newResponse2)           // To set the text data in state variable (resultData)
        setLoading(false)
        setInput("")
    }

    // onSent("What is react js")

    const myValues = {
        onSent,
        input,
        setInput,
        recentPrompt,
        setRecentPrompt,
        prevPrompt,
        setPrevPrompt,
        showResult,
        loading,
        resultData,
        newChat,
    }

    return(
        <Context.Provider value={myValues}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;