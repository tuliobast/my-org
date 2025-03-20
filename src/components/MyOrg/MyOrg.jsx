import './MyOrg.css'

export const MyOrg = ({handleForm}) => {

  return (
    <section className='flex orgSection'>
      <h2 className='title'>My Organization</h2>
      <img src="/img/add.png" alt="add" onClick={handleForm}/> 

    </section>
  )
}
