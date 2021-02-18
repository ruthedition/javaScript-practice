const LabelInput = (props) => {
  return(
    <div>
      <label>{props.label}</label>
      <input type={props.type} value={props.value}></input>
    </div>
  )
}
export default LabelInput