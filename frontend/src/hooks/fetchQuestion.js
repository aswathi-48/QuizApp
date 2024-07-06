import { useEffect, useState } from "react"
import data , {answers} from "../database/data"
import { useDispatch } from "react-redux"
import * as Action from '../Redux/question-reducer'
import { getServerData } from "../helper/helper"

// fetch question hook to fetch api data and set value to store
export const useFetchQuestion = () => {
    const dispatch = useDispatch();
    const [getData, setGetdata] = useState({ isLoading: false, apiData: [], serverError: null });

    useEffect(() => {
        setGetdata(prev => ({...prev, isLoading: true }));

        // async function fetch backend data
        (async () => {
            try {
                let question = await data;
               const [{ questions, answers }] = await getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`,(data) => data)
                console.log(questions, answers);
                if (question.length > 0) {
                    setGetdata(prev => ({...prev, isLoading: false, apiData: question }));
                    dispatch(Action.startExamAction({question, answers}));
                } else {
                    throw new Error('No Question Available');
                } 
            } catch (error) {
                setGetdata(prev => ({...prev, isLoading: false, serverError: error.message }));
            }
        })();
    }, [dispatch]);

    return [getData, setGetdata];
}

// go to next
export const MoveNextQuestion = () => async (dispatch) => 
 {
    try {
        dispatch (Action.moveNextAction()) // increase trace by one
    } catch (error) {
        console.log(error);
    }
}

//go to prev

export const MovePrevQuestion = () => async (dispatch) => 
 {
    try {
        dispatch (Action.movePrevAction())  // decrease trace by one
    } catch (error) { 
        console.log(error);
    }
}