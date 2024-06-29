import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import ResultTable from './ResultTable';
import { useDispatch, useSelector } from 'react-redux';
import { resetAllAction } from '../Redux/question-reducer';
import { resetResultAction } from '../Redux/result-reducer';
import { attempts_Number, earnPionts_Number, flagResult } from '../helper/helper';
import '../styles/Result.css'

const Result = () => {

    const dispatch =useDispatch()
    const { questions : {queue ,answers }, result : { result, userId}} = useSelector(state => state)

    useEffect(()=>{
        console.log(flag );
    })

    const totalPoint = queue.length * 10;
    const attempts = attempts_Number(result)
    const earnPoints = earnPionts_Number(result ,answers,10)
    const flag = flagResult(totalPoint,earnPoints)

    function onRestart(){
        dispatch(resetAllAction())
        dispatch(resetResultAction())

    }
  return (
    <div className='container'>
        <h1 className='title'>Quiz Application</h1>
        
        <div className='result-main'>
            <div className='main'>
                <span>Username</span>
                <span className='bold'>Daily Tuition</span>
            </div>
            <div className='main'>
                <span>Total Quiz Points :</span>
                <span className='bold'>{totalPoint || 0}</span>
            </div>
            <div className='main'>
                <span>Total Questions :</span>
                <span className='bold'>{queue.length || 0}</span>
            </div>
            <div className='main'>
                <span>Total Attempts :</span>
                <span className='bold'>{attempts || 0}</span>
            </div>
            <div className='main'>
                <span>Total Earn Points :</span>
                <span className='bold'>{earnPoints || 0}</span>
            </div>
            <div className='main'>
                <span>Quiz Result :</span>
                <span style={{ color: `${flag ? "#2aff9a" : "#ff2a66"}` }} className='bold'>{flag ? "Passed" : "Failed"}</span>
            </div>
            <div className='start'>
         <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
            </div>
            <div className='container'>
                <ResultTable></ResultTable>
            </div>
        </div>
    </div>
  )
}

export default Result