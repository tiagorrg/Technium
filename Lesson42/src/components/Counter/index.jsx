import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from "../../slices/counter/counterSlice";

export const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    const [amount, setAmount] = useState('')

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Добавить 1
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Отнять 1
                </button>

                <input type="number" onChange={(e) => setAmount(e.target.value ? Number(e.target.value) : 0)}/>
                <button onClick={() => dispatch(incrementByAmount(amount))}>Добавить число</button>
            </div>
        </div>
    );
}