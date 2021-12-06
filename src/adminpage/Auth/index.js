import React, { useEffect } from 'react'
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import axios from "axios";
import "./login.css";

const Index = () => {

  const [user, setUser] = React.useState({username:"", password:""})

  useEffect(() => {
    window.localStorage.clear();
  },[])

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    try{
      await axios.post('http://161.35.117.200:8087/api/auth/signIn', user)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          window.location.href="/contact"
          console.log(response)
        })
        .catch(err => console.log("Login or Password wrong!"))
    }catch{
      console.log("failed")
    }
  }
  console.log(user)
  return (
    <div className="login-form-box">
        <form  onSubmit={onSubmit} className="login-form">
          <h5>Admin</h5>
          <TextField type="text" name="username" onChange={onChange} className="username-login" placeholder="login..." required/>
          <TextField type="password" name="password" onChange={onChange} className="password-login" placeholder="password..." required/>
          <Button type="submit" className="enter-button"> Вход </Button>
        </form>
    </div>
  )
}

export default Index;
