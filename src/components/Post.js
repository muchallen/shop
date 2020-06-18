import React,  { useEffect, useState} from 'react'
import './App.css';
import axios from 'axios'
import 'bootstrap'

import {Modal,Button} from 'react-bootstrap'


const Post = props=> {
    
    const [ members, setMembers]= useState([])
    const [ username, setUsername]= useState('')
    const [ email, setEmail]= useState('')
    const [ password, setPassword]= useState('')
    const [usernameedit, setUsernameedit]= useState('')
    const [passwordedit, setPasswordedit]= useState('')
    const [emailedit, setEmailedit] = useState('')
    const [id,setId]=useState('')

    const [show, setShow]=useState(false)

    const handleDelete = (id)=>{
        axios.delete('http://localhost:9000/users/delete/'+id).then(res=>{console.log(res.data)})
    }

  const handleClose = ()=>{
      setShow(false)

  }


    const handleEdit=()=>{

        const postEditData ={
            username:usernameedit,
            email:emailedit,
            password:passwordedit
        }
     axios.put('http://localhost:9000/users/update/'+id,postEditData).then(res=>{
         console.log(res.data)
     })

    }
    const handleEmailChange = (e)=>{
            setEmail(e.target.value)
    }

    const editOnchangeemail = (e)=>{
        setEmailedit(e.target.value)
    }
    const editOnchangepassword = (e)=>{
        setPasswordedit(e.target.value)
    }
    const editOnchangeusername = (e)=>{
        setUsernameedit(e.target.value)
    }
    const ShowEdit = (id)=>{
            
        axios.get('http://localhost:9000/users/'+id).then((res)=>{
        console.log()    
        setId(id)
        setPasswordedit(res.data[0].password)
        setUsernameedit(res.data[0].username)
        setEmailedit(res.data[0].email)
    })
        setShow(true)
       
    }

    const handlePasswordChange = (e)=>{
        setPassword(e.target.value)
    }

    const handleUsernameChange = (e)=>{
        setUsername(e.target.value)
    }

   const handleSubmit = (e)=>{
        e.preventDefault()

        const postData =  {
            username:username,
            email:email,
            password:password 
        }
        
        
        

        try{
        axios.post('http://localhost:9000/users/add',postData).then(res=>{
                console.log(res)
        })
        


        }
        catch(error)
         {
             console.log(error)
            
        }
   }
    
useEffect(()=>{
    axios.get('http://localhost:9000/users').then(data=>{
     setMembers(data.data)
    })
})

const listed = members.map(member=>{
    return(
                            <tr key={member.id}>
                            <td>{member.username}</td>
                            <td>{member.email}</td>
                            <td><button className="btn btn-info m-3"  onClick={()=>ShowEdit(member.id)}>edit</button><input className="btn btn-danger" type="button" value="delete" name="delete" onClick={()=>handleDelete(member.id)}/></td>
                            </tr>
    )

})

 return (
        <div className="justify-content-center">            
        <h2 className="text-success">Golf Club Members</h2>

            <table className="table-striped">
                <thead>
                    <tr>
                        <th >Name</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                          {listed}
                    </tbody>
                </table>

                <hr></hr>

                <form onSubmit={handleSubmit}  >
                        <input type="text" name="username" value={username} onChange={handleUsernameChange}></input>
                        <input type="text" name="email" value={email} onChange={handleEmailChange}></input>
                        <input type="password" name="password" value={password} onChange={handlePasswordChange}></input>
                        <button type="submit">Save</button>
                </form>

                <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
                        <input type="text" name="username" value={usernameedit} onChange={editOnchangeusername}></input>
                        <input type="text" name="email" value={emailedit} onChange={editOnchangeemail} ></input>
                        <input type="password" name="password" value={passwordedit} onChange={editOnchangepassword} ></input>
        </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


        </div>
    )
}

export default Post
