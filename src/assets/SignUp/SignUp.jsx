import React from 'react'
import "../SignUp/signUp.css"
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { formRegisterSchema } from '../schema/formRegisterSchema'
import { useDispatch } from 'react-redux'
import { postData } from '../redux/feature/register/registerSlice'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const SignUp = () => {

const dispatch = useDispatch()

const submit = (values,action) => {
  dispatch(postData(values));
  action.resetForm();
}

 const {values,errors,handleChange,handleSubmit} = useFormik ({
  initialValues: {
    name:"",
    surname:"",
    username:"",
    email:"",
    Password:"",
    repeatPassword:"",
    terms:""
  },
  validationSchema:formRegisterSchema,
  onSubmit:submit
 }) 

  return (
 <>
 <Header/>
    <div className="register-form">

<h2>Register</h2>

<form action="#" method="POST" onSubmit={handleSubmit}>

  <label htmlFor="name">Name:</label>
  <input type="text" id="name" name="name" placeholder='Name...' value={values.name} onChange={handleChange}/>
  {errors.name && <p className='input-error' >{errors.name}</p>}

  <label htmlFor="surname">Surname:</label>
  <input type="text" id="surname" name="surname" placeholder='Surname...' value={values.surname} onChange={handleChange}/>
  {errors.surname && <p className='input-error' >{errors.surname}</p>}

  <label htmlFor="username">Username:</label>
  <input type="text" id="username" name="username" placeholder='Username...' value={values.username} onChange={handleChange}/>
  {errors.username && <p className='input-error' >{errors.username}</p>}

  <label htmlFor="email">Email:</label>
  <input type="email" id="email" name="email" placeholder='Email...' value={values.email} onChange={handleChange}/>
  {errors.email && <p className='input-error' >{errors.email}</p>}

  <label htmlFor="password">Password:</label>
  <input type="password" id="password" name="password" placeholder='Password...'value={values.password} onChange={handleChange}/>
  {errors.password && <p className='input-error' >{errors.password}</p>}

  <label htmlFor="repeatPassword">Repeat Password:</label>
  <input type="password" id="repeatPassword" name="repeatPassword" placeholder='Repeat Password...'value={values.repeatPassword} onChange={handleChange}/>
  {errors.repeatPassword && <p className='input-error' >{errors.repeatPassword}</p>}

  <div className="checkbox-container">
    <div style={{display:"flex"}}>
    <input type="checkbox" id="terms" name="terms" value={values.terms} onChange={handleChange} />
    <label style={{marginBottom:"0"}} htmlFor="terms">I agree to the terms and conditions</label>
    </div>
    {errors.terms && <p className='input-error' >{errors.terms}</p>}
  </div>

  <button type="submit">Register</button>

  <a href=""><Link to="/signIn" >Go to  Sign In</Link></a> <br />
  <a href=""><Link to="/" >Go to Home Page</Link></a>

</form>

    </div>
  <Footer/>
 </>

  )
}

export default SignUp