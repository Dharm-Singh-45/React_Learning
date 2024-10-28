

function User(props) {
let data = 'dharm singh'

  
  return (
    <div>
      <h1>User Name :  </h1>
      <button onClick={()=>props.alert(data)}>Click me</button>
     </div>
  )
}


export default User
