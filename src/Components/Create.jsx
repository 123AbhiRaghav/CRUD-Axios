import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Navbar from './Navbar';
import axios from 'axios';
import { API_URL } from '../App';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Create() {
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [zipcode, setZipcode] = useState("")
    const [phone, setPhone] = useState("")
    

    let navigate = useNavigate()

    const handleCreate = async() => {
        try {
            let data = {
                        name,username,email,street,city,zipcode,
                        phone, status:false
                       };
            let res = await axios.post(API_URL,data)
            if(res.status === 201){                   
                navigate('/')
                toast.success("Data Created Successfully")
            }
        } catch (error) {
            toast.danger("Data Failed")
        }
    }

    return <>
        <Navbar/><br/>
        <div className='container-fluid '>
                <Form>
                    <div className="mb-3 ">
                      <label className="fw-bold">Name</label>
                      <input type="text" placeholder="Enter Name" onChange={(e)=>{setName(e.target.value)}}/>
                    </div>
                    <Row className="mb-3">
                        <div>
                            <label className="fw-bold">Username</label>
                            <input type="text" placeholder="Enter Username" onChange={(e)=>{setUsername(e.target.value)}}/>
                          </div>
                        <div>
                          <label className="fw-bold">Email</label>
                          <input type='email' placeholder="Enter Email" onChange={(e)=>{setEmail(e.target.value)}}/>
                        </div>
                    </Row>
                    <Row className="mb-3">
                        <label className="fw-bold">Address</label>
                        <div>
                            <input type="text" placeholder='Enter Street' onChange={(e)=>{setStreet(e.target.value)}}/>
                        </div>
                        <div>
                            <input type="text" placeholder='Enter City' onChange={(e)=>{setCity(e.target.value)}}/>
                        </div>
                        <div>
                            <input type="text" placeholder='Enter Zipcode' onChange={(e)=>{setZipcode(e.target.value)}}/>
                        </div>
                    </Row>
                    <Row className="mb-3">
                        <div>
                            <Form.Label className="fw-bold">Phone Number</Form.Label>
                            <input type="text" placeholder="Enter Phone Number" onChange={(e)=>{setPhone(e.target.value)}}/>
                        </div>
                    </Row>
                    
                    <Button variant='primary' onClick={()=>handleCreate()}>Submit</Button>
                </Form>    
        </div>
    </>
    
}
export default Create;