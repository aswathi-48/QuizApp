import React, { useEffect, useState } from 'react'
import Questions from './Questions';
import { useDispatch, useSelector } from 'react-redux'
import { MoveNextQuestion, MovePrevQuestion } from '../hooks/fetchQuestion';
import { PushAnswer } from '../hooks/setResult';
import { Navigate } from 'react-router-dom';


const Quiz = () => {

    const [check, setChecked] = useState(undefined)
    const result = useSelector(state => state.result.result);
    //    const trace = useSelector(state=>state.questions.trace)
    const { queue, trace } = useSelector(state => state.questions)

    const dispatch = useDispatch()

    useEffect(() => {
        console.log(result)
    })

    function onNext() {
        console.log("on Next click");
        if (trace < queue.length) {
            dispatch(MoveNextQuestion())   //update trace value by one using MoveNextAction
            // dispatch(PushAnswer(check))

            // insert a new result in the array
            if(result.length <= trace){
            dispatch(PushAnswer(check))
                
            }
        }

        // reset the value of the checked variable
        setChecked(undefined)

    }

    function onPrev() {
        // console.log("on prev click");
        if (trace > 0)
            dispatch(MovePrevQuestion())  // update trace value by one using MovePrevAction
    }

    function onChecked(check) {
        console.log(check);
        setChecked(check)
    }

    //finish exam after attent last question
if(result.length && result.length >= queue.length ){
    return <Navigate to={'/result'} replace="true" ></Navigate>
}
    return (
        <div className='container'>
            <h1 className='title'>Quiz Application</h1>

            <Questions onChecked={onChecked} />
            <div className='grid'>
                {/* <button className='prev-btn' onClick={onPrev}>Prev</button>
                 */}

                 {trace > 0 ?  <button className='prev-btn' onClick={onPrev}>Prev</button>: <div/>}
                <button className='next-btn' onClick={onNext}>Next</button>
            </div>
        </div>
    )
}

export default Quiz