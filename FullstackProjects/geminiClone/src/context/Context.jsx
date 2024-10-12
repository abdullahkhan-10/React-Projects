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


    // Function to sent the prompt and called the function on which we have hit api.
    const onSent = async() =>{

        setResultData("")
        setLoading(true)
        setShowResult(true)
        setRecentPrompt(input)

        // here we have sent the input as parameter to (run) function, the run function get data from api and return that data, which we are storing it here in const (response). 
        const response = await run(input)
        setResultData(response)           // To set the text data in state variable (resultData)

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
        resultData
    }

    return(
        <Context.Provider value={myValues}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;