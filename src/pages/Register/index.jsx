import {Link, useNavigate } from 'react-router-dom'
const Register = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1>Register</h1>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" />
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                        <Link
                            to="/"
                            className="btn btn-link">Login</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Register;