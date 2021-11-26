import React,{useEffect,useState} from 'react';
import Colors from './Colors';
import axios from 'axios';

const Home=()=>{
    const [Data,setData]=useState({
        Company:'',
        Description:''
    })
    const [colorsData,setColorsData]=useState([])
    useEffect(()=>{
        axios.get('https://reqres.in/api/unknown')
            .then(res=>{
                console.log('Response from main API: ',res)
                console.log('Home Data: ',res.data.data)
                let companyData=res.data.support;
                setData({
                     Company: companyData.url,
                    Description: companyData.text})
                console.log('Colors Data: ',res.data.data)
                setColorsData(res.data.data)
            })
            .catch(err=>{
                console.log(err);
            })
    },[])
    return(
        <>
            <h1>This Page created to show Json Response from API to React-App.</h1>
            
            <p>Json Source URL:<a>https://reqres.in/api/unknown</a></p>
            
            <Colors data={colorsData}/>
            <p>{Data.Company}</p>
            <p>{Data.Description}</p>
            
            <h1>Created by Shraddha</h1>
        </>
    )
}

export default Home;