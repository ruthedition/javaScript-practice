import {useState} from 'react';

const TipForm = () => {

  const [bill, setBill] = useState(null)
  const [service, setService] = useState(null)
  const [numberOfPeople, setNumberOfPeople] = useState(null)
  return (
    <form>
      <div>
        <label>How much was your bill?</label>
      <input type='number' value={bill}></input>
      </div>
      <div>
         <label>How was your service?</label>
      <select id="service" name="service">
        <option disabled selected>How did you feel about it</option>
        <option value="30"> 😍 </option>
        <option value="20"> 😯 </option>
        <option value="18"> 🙂 </option>
        <option value="15"> 🙁 </option>
        <option value="10"> 😒 </option>
        <option value="5"> 😣 </option>
      </select>
      </div>
     <div>
       <label>How many people are sharing the bill?</label>
      <input type='number' value={numberOfPeople} ></input>
     </div>
      
      <button>Calculate</button>
    </form>
  )
}

export default TipForm