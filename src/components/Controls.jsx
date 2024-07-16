import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../store/counterSlice';
import { privacyActions } from '../store/privacySlice';

export default function Controls() {
    const dispatch = useDispatch();

    const counter = useSelector(store => store.counter);
    const privacy = useSelector(store => store.privacy)

    const input = useRef();

    const handleIncrement = () => {
        dispatch(counterActions.increaseValue());
    }

    const handleDecrement = () => {
        dispatch(counterActions.decreaseValue());
    }
    const handleAdd = () => {
        dispatch(counterActions.handleAdd(input.current.value));
        input.current.value = "";
    }

    const handleSubtract = () => {
        dispatch(counterActions.handleSubtract(input.current.value));
        input.current.value = "";
    }

    const handlePrivacyToggele = () => {
        dispatch(privacyActions.handlePrivacyToggele());
    }

    return (
        <>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={handleIncrement}>+1</button>

                <button type="button" className="btn btn-success btn-lg px-4 gap-3" onClick={handleDecrement}>-1</button>
                <button type="button" className="btn btn-warning" onClick={handlePrivacyToggele}>Privacy</button>
            </div>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">

                <input type='text' ref={input}></input>
                <button type="button" className="btn btn-info" onClick={handleAdd}>Add</button>
                <button type="button" className="btn btn-danger" onClick={handleSubtract}>Subtract</button>
            </div>
        </>
    )
}
