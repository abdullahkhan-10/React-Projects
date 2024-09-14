import React, { useReducer, useState } from 'react'
import "./style.css"
import { data } from '../../assets/data'


const QuizApp = () => {
    let [index, setIndex] = useState(0)
    // mean store the current index of array (data) in variable (question). initially it is zero.
    const [question, setQuestion] =useState(data[index])
    // To select only one option
    const [lock, setLock] = useState(false)

    // In score we will store the number of correct answers. 
    const [score, setScore] = useState(0)

    // When we click on next button on last question the app disappear, because we have not save it any where,To solve this problem we will save all the result in state variable (result).
    const [result, setResult] = useState(false)

    // when we click on wrong option, the correct option will get colored as well.
    let option1 = useReducer(null)
    let option2 = useReducer(null)
    let option3 = useReducer(null)
    let option4 = useReducer(null)
    let optionAarray = [option1, option2, option3, option4]

    const checkAns = (element, answer) =>{
        // once lock is false, mean we can click any option.
        if (lock === false) {
            if (question.ans === answer) {
                element.target.classList.add("correct")

                // once we click one option, and the lock get true here, then we can not select other option.
                setLock(true)

                // When some one click on the right option. The number of correct answers will be store in variable (store) through (setScore) method.
                setScore(prev => prev+1)

            }else{
                element.target.classList.add("wrong")
                setLock(true)
                // when we click on wrong option, the correct option will get colored as well.
                // (question.ans-1) mean we have index started from zero, so we need to include that one as well.
                optionAarray[question.ans-1].current.classList.add("correct")

            }
        }
       
    }

    // To move to the next question.
    const next = ()=>{
        // mean if any of the option is selected
        if (lock === true) {     
            // when we click on last question, and index is eqaul to no length mean no data found in array, then make the variable (result) true.
            if (index === data.length - 1) {
                setResult(true)
                return 0;
            }      
            setIndex(++index)           // increase the index.
            setQuestion(data[index])    // set that index mean set question number in variable state (question).
            setLock(false)              // it mean we can again select any of option of the next question.

            // To uncheck the option of the next question.
            optionAarray.map( (optionItem) =>{
                optionItem.current.classList.remove("wrong")
                optionItem.current.classList.remove("correct")
                return null;
            })
        }
    }

    // To reset the app.
    const reset = ()=>{
        setIndex(0)
        setQuestion(data[0])     // mean strart from question on index zero, which is question one
        setScore(0)
        setLock(false)
        setResult(false)
    }

  return (
    <div className='container'>
        <h1>Quiz App</h1>
        {/* (index+1) mean we will get the index of each question which will incremented when question get change or press next button */}
        {/* (question.question) the first question is the state in ehich we have stored the array (data), the second question is the property in array (data) on which the text is stored. */}
        {
            result?
            // if (result) get true then display this fragment. 
            <>
                <h2>You Scored {score} out of {data.length}</h2>
                <button onClick={reset}>Reset</button>
            </>
            // if  (result) is false, which by default is, then display this fragment. 
            : <>
                <h2>{index+1}. {question.question}</h2>

                <ul>
                    <li ref={option1} onClick={(e) => {checkAns(e,1)}}>{question.option1}</li>
                    <li ref={option2} onClick={(e) => {checkAns(e,2)}}>{question.option2}</li>
                    <li ref={option3} onClick={(e) => {checkAns(e,3)}}>{question.option3}</li>
                    <li ref={option4} onClick={(e) => {checkAns(e,4)}}>{question.option4}</li>
                </ul>

                <button onClick={next}>Next</button>
                <div className="index">{index+1} of {data.length}</div>
            </>
        }
        
    </div>
  )
}

export default QuizApp