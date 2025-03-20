import './OptionList.css'

export const OptionList = ({value, teams, updateValue}) => {

  const handleChange = (e) => {
    updateValue(e.target.value)
  }
  return (
    <>
    <label className='form-label fw-medium fs-4 mt-4 ms-3'>Team</label>
      <select 
        class="form-select form-select-lg shadow p-3 bg-body-tertiary rounded" 
        aria-label="team"
        value={value}
        onChange={handleChange}>
        <option className='fs-4' value="" disabled defaultValue="" hidden>Select team</option>
        {teams.map(( team, index ) =><option className='fs-4' key={ index }>{ team }</option>)}
      </select>
    </>
  )
}
