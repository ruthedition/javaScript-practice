const SelectService = (props) => {
  return (
    <div>
      <label>{props.label}</label>
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

  )
}
export default SelectService