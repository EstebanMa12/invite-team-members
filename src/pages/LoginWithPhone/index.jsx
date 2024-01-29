import { useForm } from 'react-hook-form'
import { auth } from '../../firebase/firebaseConfig'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const LoginWithPhone = () => {
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    const generateRecaptch = () =>{
        try {
            const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
                'size': 'invisible',
                'callback': (response) => {
                    console.log(response)
                }
            })
            return recaptchaVerifier
        } catch (error) {
            console.warn(error)
        }
    }

    const onSubmit = async (data) => {
        console.log(data)
        const phone = data.phone.replace(/[-\s]/g,'');
        console.log(phone)

        generateRecaptch()
        const appVerifier = window.recaptchaVerifier
        sendSMS(phone,appVerifier)
    }

    const sendSMS = (phone, recaptchaVerifier) =>{
        signInWithPhoneNumber(auth, `+57${phone}`, recaptchaVerifier)
        .then((response) =>{
            window.confirmationResult = response
            console.log(response);
            Swal.fire({
                icon: 'success',
                title: 'SMS sent',
                text: 'Check your phone',
                showConfirmButton: false,
                timer: 2000
            })
            .then(() =>navigate('/insert-code'))
        })
        .catch((error) =>{
            console.warn(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        })
    }
    return (
        <>
        <div className="flex h-screen justify-center items-center">
            <form className="max-w-sm mx-auto"
            onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="phone-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number:</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                            <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"/>
                        </svg>
                    </div>
                    <input type="text" id="phone-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required
                    {...register('phone')}
                    />
                </div>
                <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">Select a phone number that matches the format.</p>
                <div id="recaptcha-container"></div>
                <button type="submit" className="w-full px-4 py-2 mt-4 text-base font-semibold text-center text-white transition duration-200 ease-in bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                    Send SMS
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/Register"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    {" "}
                    Sign up
                  </Link>
                </p>
            </form>
            <div id='recaptcha-container'></div>
        </div>
        </>
    )
}

export default LoginWithPhone