import React from 'react'

const PersonalForm = () => {
    const [userData, setUserData] = useState({})
  const [formUserData, setFormUserData] = useState({
    nombre:'', 
    apellido:'', 
    email:''
  })
  const [showPersonalData, setShowPersonalData] = useState(false)
  const handleRegisterUser = (evento) =>{
    evento.preventDefault()
    console.log(evento)
    setShowPersonalData(true)
    setUserData(formUserData)
    setFormUserData({nombre:'', 
    apellido:'', 
    email:''})
  }
  const handleChangeRegisterUser = (evento) =>{
    console.log(evento.target.name)
    console.log(formUserData)
    setFormUserData({...formUserData, [evento.target.name]: evento.target.value})
  }
  return (
    <div>
        <form onSubmit={handleRegisterUser} className='formularioUsuario'>
        <label htmlFor="nombre">Ingrese su nombre:</label>
        <input placeholder='Cosme' name='nombre' id='nombre' onChange={handleChangeRegisterUser} value={formUserData.nombre}/>
        <label htmlFor="apellido">Ingrese su apellido:</label>
        <input type="text" placeholder='fulanito' id='apellido' name='apellido' onChange={handleChangeRegisterUser} value={formUserData.apellido} />
        <label htmlFor="email">Ingrese su email:</label>
        <input type="email" placeholder='cosmeFulanito@gmail.com' id='email' name='email' onChange={handleChangeRegisterUser} value={formUserData.email}/>
        {showPersonalData ? <button>Editar</button> : <button type='submit'>Enviar</button>}
      </form>
      {
        showPersonalData &&
        <div>
          <h2>Nombre de usuario: {userData.nombre} {userData.apellido}</h2>
          <div><b>Email:</b> {userData.email}</div>
        </div>
      }
    </div>
  )
}

export default PersonalForm
