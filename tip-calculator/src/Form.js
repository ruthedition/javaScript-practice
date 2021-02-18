import {useState} from 'react';
import SelectService from './SelectService'
import LabelInput from './LabelInput'

const TipForm = () => {

  const [bill, setBill] = useState(null)
  const [service, setService] = useState(null)
  const [numberOfPeople, setNumberOfPeople] = useState(null)
  return (
    <form>
      <LabelInput 
        label="How much was your bill?" 
        type="number"
        value={bill}
      />
      <SelectService label="How much was your bill?"/>
      <LabelInput 
        label="How many people are sharing the bill?" 
        type="number"
        value={numberOfPeople}
      />  
      <button>Calculate</button>
    </form>
  )
}

export default TipForm