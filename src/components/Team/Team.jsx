import hexToRgba from 'hex-to-rgba';


import { Collaborator } from '../Collaborator/Collaborator'
import './Team.css'

export const Team = ({ data: { title, primaryColor, id}, collaborators, deleteCollaborator, updateColor} ) => {

  const bg = {backgroundColor: hexToRgba(primaryColor, 0.2)}
  const borderTitle = {borderColor: primaryColor}

  return <>
    {
      collaborators.length > 0 && 
      <section className='team' style={bg}>
        <input 
          className='input-color' 
          type='color' 
          value={primaryColor}     
          onChange={(e)=>{
            updateColor(e.target.value, id)
          }}  
        />
        <h3 style={borderTitle}>{title}</h3>
        <div className="collaborators"> 
          {
            collaborators.map((collaborator, index)=><Collaborator 
              data={collaborator} 
              key={index} 
              primaryColor={primaryColor}
              deleteCollaborator={deleteCollaborator}    
            />)
          }  
        </div>
      </section>
    }
  </>
}
