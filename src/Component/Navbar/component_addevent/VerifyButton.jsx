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
        
        <button id={(isVerified)? 'active' : 'inactive'} onClick={handleVerify} type="submit">Verify</button>
    )
};  
