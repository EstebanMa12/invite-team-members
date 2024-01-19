import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginGoogle, loginWithEmailAndPassword } from '../../store/users/userThunks'
import { useForm } from 'react-hook-form'
import { FaGooglePlusG, FaPhone  } from 'react-icons/fa6'
import Swal from 'sweetalert2'
import { useEffect } from 'react'


const Login = () => {

//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const { isAuthenticate, user, error } = useSelector(( store ) => store.user)
//   const { register, handleSubmit } = useForm()

//   const handleLogin = ()=>{
//     dispatch(loginGoogle())
//   }
  

//   const handleLoginWithEmailAndPassword = (data) => {
//     console.table(data);
//     dispatch(loginWithEmailAndPassword(data))
//   }

//   useEffect(() => {
//     if (error) {
//       Swal.fire({
//         title: "Oops!",
//         text: "Ha ocurrido un error, por favor verifique sus credenciales",
//         icon: "Error"
//       })
//     }
  
//     if ( error === false ) {
//       Swal.fire({
//         title: `Bienvenido ${user.name}!`,
//         text: "Has iniciado sesión exitosamente",
//         icon: "success"
//       }).then(navigate('/home'))
//     }
//   }, [error])



  return (<>
    {
    <section className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl  leading-tight tracking-tight text-gray-900     md:text-2xl dark:text-white
                    md:leading-10
                    md:tracking-tighter
                    md:text-center
                ">
                    <strong>Sign in</strong> to your account
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                    </div>
                    <div>
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                            </div>
                            <div className="ml-3 text-sm">
                              <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                            </div>
                        </div>
                        <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                    </div>
                    <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500"> Sign up</a>
                    </p>
                </form>
            </div>
        </div>
    </div>
  </section>
    /* <section classNameName='bg-gray-50 dark:bg-gray-900'>
    <h1 classNameName='text-3xl font-bold underline my-3'>Iniciar sesión</h1>
    <form
      classNameName='grid justify-start' 
    >
      <input 
          classNameName='border border-indigo-300 rounded-md my-3 h-10 text-indigo-700 px-5' 
          type='email' 
          placeholder='Ingrese su correo electrónico'
          name='email'
        />
        <input 
          classNameName='border border-indigo-300 rounded-md my-3 h-10 text-indigo-700 px-5' 
          type='password' 
          placeholder='Ingrese su contraseña' 
          name='password'
        />
        <div classNameName='flex gap-4'>
          <button classNameName='bg-violet-400 text-white h-10 rounded-md my-5 px-5' type='submit'>Iniciar sesión</button>
          <button
            classNameName='bg-green-400 text-white h-10 rounded-md my-5 p-5 flex place-items-center flex gap-2'
            type='button'
          >
            Ingresar con google
            <FaGooglePlusG />
          </button>
          <button
            classNameName='bg-green-400 text-white h-10 rounded-md my-5 p-5 flex place-items-center flex gap-2'
            type='button'
          >
            Ingresar con celular
            <FaPhone />
          </button>
        </div>
        <p>
        Si no tiene una cuenta registrada, registrese
        <Link 
          classNameName='text-indigo-900 underline px-1' 
          to='/register'
        >
          aquí
        </Link>
      </p>
    </form>
  </section> */}
  </>)
}

export default Login