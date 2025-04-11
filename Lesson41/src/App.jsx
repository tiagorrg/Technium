import React from 'react'

function App() {
  const createStore = (reducer, initState) => {
    const currentReducer = reducer
    let state = initState

    let listener = []

    return {
      dispatch(action) {
        state = currentReducer(state, action)
        listener.forEach((element) => element() )
      },

      subscribe (newListener) {
        listener.push(newListener)
      },

      getState () {
        return state
      }
    }
  }

  function counterReducer(state = 0, action) {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1 ;
      case 'DECREMENT':
        return state - 1 ;
      default:
        return state;
    }
  }

  const store = createStore(counterReducer)

  store.subscribe(() => {
    console.log(store.getState())
  })
  store.subscribe(() => {
    console.log(store.getState())
  })
  store.subscribe(() => {
    console.log(store.getState())
  })

  store.dispatch({type: "INCREMENT"})
  store.dispatch({type: "INCREMENT"})
  store.dispatch({type: "DECREMENT"})

  return (
    <>
      
    </>
  )
}

export default App
