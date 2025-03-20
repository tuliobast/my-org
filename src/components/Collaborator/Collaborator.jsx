import { CgCloseO } from "react-icons/cg";
import './Collaborator.css'

export const Collaborator = ({data:{name, role, urlPhoto, id}, primaryColor, deleteCollaborator }) => {



      
  return (  
    <div className='collaborator'>
      <CgCloseO className="delete" onClick={() => deleteCollaborator(id)} />

      <div className="heading" style={{backgroundColor:primaryColor }}>
        <img src={urlPhoto} alt={name} />
      </div>
      <div className="info">
        <h4>{name}</h4>
        <h5>{role}</h5>
      </div>
    </div>
  )
}
