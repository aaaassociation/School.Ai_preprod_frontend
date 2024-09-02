/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import background from "../../assets/images/all-img/section-bg-5.png";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.email) errors.email = "Email is required";
    if (!formData.password) errors.password = "Password is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
      setLoading(false);
      navigate("/schoolai/courses");
    } catch (error) {
      console.error("Error during login:", error);
      setFormErrors({ submit: error.message });
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container mx-auto">
        <div className="lg:flex justify-between items-center mb-10">
          <div>
            <div className="mini-title">Welcome Back</div>
            <div className="column-title ">
              Login to <span className="shape-bg">Your Account</span>
            </div>
          </div>
          <div>
            <Link to="/" className="btn btn-primary">
              Go to Home
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 w-full mx-auto bg-white shadow-box5 rounded-[8px] p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {formErrors.password && (
                <p className="text-red-500 text-sm mt-1">{formErrors.password}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition duration-300"
              disabled={loading}
            >
              {loading ? <div className="spinner"></div> : "Login"}
            </button>
            {formErrors.submit && (
              <p className="text-red-500 text-sm mt-1">{formErrors.submit}</p>
            )}
          </form>
          <p className="mt-4 text-center">
            Don't have an account?{" "}
            <Link
              to="/schoolai/register"
              className="text-primary hover:underline"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
