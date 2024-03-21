import { Button } from 'bootstrap';
import {useState} from 'react';


export default function VerifyButton({allVerified}){
    const [isVerified, setIsVerified] = useState(false);

   
    function handleVerify() {
            setIsVerified((prevState) => !prevState);

    }
    if (allVerified) {
        return (
            <button id="active" onClick={handleVerify} type="submit">Verify</button>
        )
    }
     return (    
            isVerified?
            <button id='active' onClick={handleVerify}>OK</button>
            :
            <button id='inactive' onClick={handleVerify}>NOT OK</button>
        )
};  
