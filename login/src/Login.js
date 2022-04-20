import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';

export default function Login(){

    const [loginData,setLoginData] = useState(localStorage.getItem('loginData') ?JSON.parse(localStorage.getItem('loginData')) 
    : null);
    const navigate = useNavigate();
    console.log(navigate);

    const handleSuccess = async (googleData) => {
      console.log(googleData);
      navigate('/search');

      const url = `/api/google-login`;
      const res = await fetch(url, {
        method : 'POST',
        body : JSON.stringify(
          {
          token : googleData.tokenId
          }),
          headers : {
            'Content-Type' : 'Application/json',
            'Accept': 'application/json'
          },
        });

        const data = await res.json();
        console.log("DATA");
        console.log(data);
        setLoginData(data);
        localStorage.setItem('loginData',JSON.stringify(data));
    }
  
    const handleFailure = (result) =>{
      alert(result);
    }
  
    return  (
    <div>
        <GoogleLogin
        clientId="691771711130-vfa4ih67qscejn55ahcufame4plrpcud.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={handleSuccess}
        onFailure={handleFailure}
        cookiePolicy={'single_host_origin'}
    />
  </div>
  )
}