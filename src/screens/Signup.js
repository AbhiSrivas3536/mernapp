import React , {useState} from 'react'

import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar';

export default function Signup() {

    const [credentials,setcredentials] = useState({name:"",email:"",password:"",geolocation:""})
    //event listner for form
    const handleSubmit= async(e)=>{
        e.preventDefault();// synthetic event
        //since it is a post req we will also sen  data with fetch 
        const response = await fetch("http://localhost:4000/api/createuser", {
            method:'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify({name:credentials.name , email:credentials.email , password:credentials.password , location:credentials.geolocation}) // we send json object but stringify it first 'name_in_backend:name_in form'
        });
        // get response 
        const json=await response.json();
        console.log(json);
        //if not success alert 
        if(!json.success){
            alert("Enter Valid Credentials")
        }
        else{
            alert("User Created Successfully");
        }


    }
    
    const onChange=(event)=>{
        //this will update the credentials taken from the form 
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }

    return (
        <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover',height: '100vh' }}>
            <div><Navbar/></div>
            <div className='container'>
                <form className='w-50 m-auto mt-5 border bg-dark border-success rounded' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        {/* adding name and value in below input do same for email password address */}
                        <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} onChange={onChange} id="exampleInputPassword1" />
                    </div>

                    <button type="submit" className="m-3 btn btn-success">Submit</button>
                    <Link to= '/login' className='m-3 btn btn-danger'>Already a user</Link>
                </form>
            </div>
        </div>
    )
}
