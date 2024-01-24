import { useState } from "react"
import Swal from "sweetalert2"
const Link = () => {
    const generateRandomLink = () => {
        
        return `https://app.com/join/${
            Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
        }`
    }
    const [randomLink, setRandomLink] = useState(generateRandomLink())
    const handleCopyLink = () => {
        navigator.clipboard.writeText(randomLink)
        Swal.fire({
            icon: 'success',
            title: 'Copied to clipboard',
            showConfirmButton: false,
            timer: 1000
        })
    };
    return (
        <div className="border-b pb-8 ">
            <h3 className="font-bold ">Invite link</h3>
            <p className="text-sm text-gray-400 mb-4">Use private link to invite people. Only users who can invite member can see this.<br/>
                You can <a href="#" 
                className="text-blue-600 underline"
                onClick={()=>setRandomLink(generateRandomLink())}>reset the link </a> to create new private link
            </p>
            <div className="flex">
                <div className="bg-gray-300 w-96 flex items-center rounded p-2">
                    <span>{randomLink}</span>
                </div>
                <button 
                className="border border-pink-400 rounded p-2 ml-4 text-pink-600"
                onClick={handleCopyLink}>Copy link</button>
            </div>
        </div>
    )
}

export default Link