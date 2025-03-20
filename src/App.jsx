import { useState } from 'react'
import { v4 } from 'uuid'

import { Form } from './components/Form/Form'
import { Header } from './components/Header/Header'
import { MyOrg } from './components/MyOrg/MyOrg'
import { Team } from './components/Team/Team'
import { Footer } from './components/Footer/Footer'
import './App.css'  

export const App = () => {
  const [showForm, setshowForm] = useState(false)
  const [collaborators, setCollaborators] = useState([
    {
      id: v4(),
      name:"Tulio Bastidas",
      role:"dev",
      team:"Front End",
      urlPhoto:"https://github.com/tuliobast.png"

    },
    {
      id: v4(), 
      name:"Harland Lohora",
      role:"Instructor",
      team:"Back End",
      urlPhoto:"https://github.com/harlandlohora.png"

    },
    {
      id: v4(), 
      name:"Miguel Duran",
      role:"dev",
      team:"UX/UI",
      urlPhoto:"https://github.com/midudev.png"

    }
  ])
  const [teams, setTeams] = useState([
    {
      id: v4(),
      title: 'Developers',
      primaryColor: '#57C278',
      secondaryColor:'#D9F7E9'
    },
    {
      id: v4(),
      title:'Front End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF',
    },
    {
      id : v4(),
      title: 'Back End',
      primaryColor: '#E06A68',
      secondaryColor:' #F0F8E2'
    },
    {
      id: v4(),
      title: 'Data Science',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5'    
    },
    {
      id: v4(),
      title: 'Devops',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      id: v4(),
      title: 'UX/UI',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'    
    },
    {
      id: v4(),
      title: 'Mobile',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      id: v4(),
      title: 'Innovation and Management',
      primaryColor: '#6278f7',
      secondaryColor: '#e4e8fc'
    },
  ])

  const handleForm = () => {
    setshowForm(!showForm)
  }

  const registerCollaborator = (collaborator) =>{
    // console.log('new collaborator', collaborator )
    setCollaborators([...collaborators, collaborator])
  }

  const deleteCollaborator= (id) => {
    // console.log('eliminado', id)
    const updatedCollaborators = collaborators.filter(collaborator => collaborator.id !== id)
    setCollaborators(updatedCollaborators)
  }

  const updateColor = (color, id) => {
    console.log('Update: ', color, id)
    const updatedTeams = teams.map(team => {
      if(team.id == id){
        team.primaryColor = color
      }
      return team
    })
    setTeams(updatedTeams)
  }


  return (
    <>
      <Header />
      {
        showForm && <Form 
          teams={teams.map(team=>team.title)}
          register ={registerCollaborator}
        />
      }    
      
      <MyOrg handleForm={handleForm} />       
      {  teams.map((team) => <Team 
        key={team.title} 
        data={team} 
        collaborators={collaborators.filter(collaborator => collaborator.team==team.title)} 
        deleteCollaborator={deleteCollaborator}
        updateColor={updateColor}
        />
      )}
      <Footer/>
    </>
  )
}
