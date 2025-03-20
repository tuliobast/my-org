import './TextField.css'

export const TextField = ({value, title, type, placeholder, required, updateValue}) => {


const handleChangeText = ({target}) => {
  updateValue(target.value )
  // console.log(target.value)
}

  return (  
    <>
      <label className="container-fluid form-label fw-medium fs-4 mt-2 ms-2 ">{title}</label>
      <input 
        className="form-control shadow p-3 mb-2 bg-body-tertiary rounded" 
        placeholder={placeholder} 
        type={type}
        required={required}
        value={value}
        onChange={handleChangeText}/>
    </>
  )
}
