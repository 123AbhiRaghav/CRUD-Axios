import {useEffect,useState} from 'react'
import Card from './Card'
import Navbar from './Navbar';
import { toast } from 'react-toastify';
import { API_URL } from '../App';
import axios from 'axios';


function Home() {
  let [datas,setDatas] = useState([])
  const getDatas=async()=>{
    try {
      let res = await axios.get(API_URL)
      if(res.status===200)
      {

        setDatas(res.data.filter(e=>e.status))
      }
    } catch (error) {
        toast.error()
    }
  }

  useEffect(()=>{
    getDatas()
  },[])
  return <div className='container-fluid'>
    <Navbar/>
    <div className='previewWrapper'>
    {
      datas.map((e)=>{
        return <Card name={e.name} username={e.username} email={e.email}  key={e.id}/>
      })
    }
    </div>
  </div>
}

export default Home