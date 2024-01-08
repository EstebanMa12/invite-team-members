import {Link, useNavigate } from 'react-router-dom'
import { FaGooglePlusG, FaPhone  } from 'react-icons/fa6'
import { loginGoogle, loginWithEmailAndPassword } from '../../store/users/userThunks'
import { useDispatch } from 'react-redux'


const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/dashboard')
    }
    const handleLogin = () =>{
        dispatch(loginGoogle)
    }
    const handleLoginWithEmailAndPassword = (data) => {
        console.table(data);
        dispatch(loginWithEmailAndPassword(data))
      }
    return (
        <section className="h-screen">
            <div className="h-full">
                <div>
                    <div><img 
                    src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    alt="login"
                    className="w-full"
                    />
                    </div>
                    <div className="flex flex-row items-center justify-center lg:justify-start">
                        <p className="mb-0 mr-4 text-lg">
                            Sign in with
                        </p>
                        <button 
                        className="flex items-center justify-center w-10 h-10 mr-2 bg-gray-200 rounded-full"
                        onClick={handleLogin}
                        type='button'
                        >
                            <FaGooglePlusG/>
                        </button>
                        <button type='button' className="flex items-center justify-center w-5 h-5 bg-gray-200 rounded-full">
                            <FaPhone/>
                        </button>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default Login;