import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slices/counter/counterSlice'
import usersReducer from '../slices/users/usersSlice'

const incrementLoggerMiddleware = store => next => action => {
    if (action.type === 'counter/increment') {
        console.log('Обнаружено увеличение счетчика!', {
            currentValue: store.getState().counter.value,
            incrementBy: action.payload || 1
        });
    }
    return next(action);
};

const incrementByAmountMiddleware = () => next => action => {
    if (action.type === 'counter/incrementByAmount') {
        
        const newActionPayload = {
            ...action,
            payload: Number(action.payload + 2)
        }

        return next(newActionPayload)
    }
    return next(action)
}

export default configureStore({
    reducer: {
        counter: counterReducer,
        users: usersReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(incrementLoggerMiddleware, incrementByAmountMiddleware)
})