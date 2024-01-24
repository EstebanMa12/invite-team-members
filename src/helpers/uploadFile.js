import axios from 'axios'
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dsgfgsjud/upload'

export const saveImage = async file =>{
    const body={
        file,
        api_key: 523377193467897,
        upload_preset: 'ml_default'
    }
    const headers = {
        'Content-Type': 'application/invite-team-members',
    }
    const response = await axios.post(CLOUDINARY_URL, body, {headers})
    return response.data.secure_url
}

