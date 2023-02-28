
import Button from '../components/Button'
import { useReducer } from 'react'
import Panel from '../components/Panel';

const INCREMENT_COUNT = 'increment-count'; 
const DECREMENT_COUNT = 'decrement-count'; 
const SET_VALUE_TO_ADD = 'change-value-to-add'; 
const ADD_VALUE_TO_COUNT = 'add_value_to_count'; 


function CounterPage({initialCount}) {
  // const [valueToAdd, setValueToAdd] = useState(0)
  // const [count, setCount] = useState(initialCount); 
  const reducer = (state, action)=> {
    switch(action.type) {
      case INCREMENT_COUNT:
        return {...state, count: state.count + 1}; 

      case SET_VALUE_TO_ADD: 
        return {...state, valueToAdd: action.payload }

      case ADD_VALUE_TO_COUNT: 
        return {
          ...state, 
          count : state.count + state.valueToAdd,
          valueToAdd: 0
        }

      case DECREMENT_COUNT:
        return {...state, count: state.count - 1}; 
      default:
        return state; 
    }
    // if( action.type === INCREMENT_COUNT) {
    //   
    // } else if (action.type === DECREMENT_COUNT) {
    //   return {
    //     ...state,
    //     count: state.count - 1
    //   }
    // } else if (action.type === SET_VALUE_TO_ADD) {
    //   return {
    //     ...state, 
    //     valueToAdd: action.payload
    //   }
    // }
    // return state; 
  }
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  })
  
  const increment = () => dispatch({type: INCREMENT_COUNT})
  const decrement = () => dispatch({type: DECREMENT_COUNT})
  
  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0; 
    dispatch({type: SET_VALUE_TO_ADD, payload: value })
  }
  const handleSubmit = (event) => {
    event.preventDefault(); 
   dispatch({type: ADD_VALUE_TO_COUNT}) 
  }


  return (
    <Panel className='m-3'>
        <h1 className='text-lg'>Count is {state.count}</h1>
        <div className='flex flex-row'>
          <Button onClick={increment}>Incrementer</Button>
          <Button onClick={decrement}>Decrementer</Button>
        </div>
        <form onSubmit={handleSubmit}>
          <label>Add a lot!</label>
          <input
          value={state.valueToAdd} 
          onChange={handleChange}
          type="number" 
          className="p-1 m-3 bg-gray-50 border border-gray-300" />
          <Button>Add it!</Button>
        </form>
    </Panel>
    
  )
}

export default CounterPage