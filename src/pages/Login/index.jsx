import {Link, useNavigate } from 'react-router-dom'


const Login = () => {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/dashboard')
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                        <Link to="/register" className="btn btn-link">Register</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;