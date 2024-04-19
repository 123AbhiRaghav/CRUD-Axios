import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Navbar from './Navbar';
import axios from 'axios';
import { API_URL } from '../App';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function Edit() {

  let {id} = useParams()
  let navigate = useNavigate()

  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [street, setStreet] = useState("")
  const [suite, setSuite] = useState("")
  const [city, setCity] = useState("")
  const [zipcode, setZipcode] = useState("")
  const [phone, setPhone] = useState("")

  const handleEdit = async() => {
    try {
      let data = {name,username,email,street,suite,city,zipcode,phone, status:false};
      let res = await axios.put(`${API_URL}/${id}`,data)
      if(res.status === 200){                   
        navigate('/')
        toast.success("data edited succesfully")
      }
    }catch (error) {
      toast.danger("data editing failed")
    }
  }

  const getUserdataById = async() => {
    try {
      let res = await axios.get(`${API_URL}/${id}`)
      if(res.status===200){
        setName(res.data.name)
        setUsername(res.data.username)
        setEmail(res.data.email)
        setStreet(res.data.street)
        setSuite(res.data.suite)
        setCity(res.data.city)
        setZipcode(res.data.zipcode)
        setPhone(res.data.phone)
      }      
    }catch (error) {
      toast.error("Internal error")
    }
  }

  useEffect(()=>{
    getUserdataById();
  },[])

  return <>
      <div className='container-fluid'>
          <Navbar/>
          <div className="fromWrapper">
              <Form>
                  <div className="mb-3">
                    <label>Name</label>
                    <input type="text" value = {name} placeholder="Enter Name" onChange={(e)=>{setName(e.target.value)}}/>
                  </div>
                  <Row className="mb-3">
                      <div>
                          <label>Username</label>
                          <input type="text" value = {username} placeholder="Enter Username" onChange={(e)=>{setUsername(e.target.value)}}/>
                        </div>
                      <div>
                        <label>Email</label>
                        <input type='email' value = {email} placeholder="Enter Email" onChange={(e)=>{setEmail(e.target.value)}}/>
                      </div>
                  </Row>
                  <Row className="mb-3">
                      <label>Address</label>
                      <div>
                          <input type="text" value = {suite} placeholder='Enter Suite' onChange={(e)=>{setSuite(e.target.value)}}/>
                      </div>
                      <div>
                          <input type="text" value = {street} placeholder='Enter Street' onChange={(e)=>{setStreet(e.target.value)}}/>
                      </div>
                      <div>
                          <input type="text" value = {city} placeholder='Enter City' onChange={(e)=>{setCity(e.target.value)}}/>
                      </div>
                      <div>
                          <input type="number" value = {zipcode} placeholder='Enter Zipcode' onChange={(e)=>{setZipcode(e.target.value)}}/>
                      </div>
                  </Row>
                  <Row className="mb-3">
                      <div>
                          <label>Phone Number</label>
                          <input type="text" value = {phone} placeholder="Enter Phone Number" onChange={(e)=>{setPhone(e.target.value)}}/>
                      </div>
                  </Row>
                  <Button variant="primary" onClick={()=>handleEdit()}>Submit</Button>
              </Form>    
          </div>            
      </div>
  </>
    
}

export default Edit