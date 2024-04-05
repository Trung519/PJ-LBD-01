import { useEffect, useState } from 'react';

export default function VerifyButton({ allVerified}) {
    const [isVerified, setIsVerified] = useState(false);

    

    function handleVerify() {
        setIsVerified((prevState) => !prevState);

    }
    if (allVerified) {
        return (
            <button id="activeAll" onClick={handleVerify} type="submit">Đã duyệt</button>
        )
    }
    return (
        isVerified ?
            <button id='active' onClick={handleVerify}>Đã duyệt</button>
            :
            <button id='inactive' onClick={handleVerify}>Chưa duyệt</button>
            
        )
};  
