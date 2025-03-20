import { useState } from 'react'
import { TextField } from '../TextField/TextField'
import { OptionList} from '../OptionList/OptionList'
import { Button } from '../Button/Button'
import './Form.css'


export const Form= ({teams, register}) => {
  
  const [name, setName] = useState("")
  const [role, setRole] = useState("")
  const [urlPhoto, setUrlPhoto] = useState('')
  const [team, setTeam] = useState('')

  // const {registerCollaborator} = props


  const handleSubmit = (e) => {
    e.preventDefault()
    let data ={
      name,
      role,
      urlPhoto,
      team
    }
    register(data)
    
  }

  // console.log('Props del form: ', teams)

  return (
    <section className='form container-fluid'>
      <form onSubmit={handleSubmit} className='container-fluid shadow p-6 mb-5 bg-body-tertiary rounded'>
        <h2 className='text-center display-5 my-5'>Fill out the form to create the collaborator</h2>
        <TextField 
          title={"Name"} 
          placeholder={"Enter the name..."} 
          type= {"text"} 
          isRequired 
          value ={name}
          updateValue={setName}
        />
        <TextField 
          title={"Role"} 
          placeholder={"Enter the Role..."} 
          type={"text"} 
          isRequired
          value={role}
          updateValue={setRole}  
        />
        <TextField 
          title={"Photo"} 
          placeholder={"Enter link photo..."} 
          type={"text"} 
          isRequired
          value={urlPhoto}
          updateValue={setUrlPhoto}  
        />
        <OptionList 
          value={team}
          updateValue={setTeam}
          teams={teams}
        />
        <Button text={"Create"}/>

      </form>
    </section>
  )
}
