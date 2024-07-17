import React, { useState } from 'react';
import axios from 'axios';

const EmployerRegister = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        secondName: '',
        username: '',
        email: '',
        password: '',
        companyName: '',
        industry: '',
        location: '',
        contactEmail: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/employer/register', formData);
            alert('Registration successful');
            // You can handle further actions like redirecting the user after successful registration
        } catch (error) {
            console.error('Error during registration:', error);
            alert('Registration failed. Please check your details and try again.');
        }
    };

    return (
        <section className="">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="/" className="-m-1.5 py-8 text-4xl font-bold tracking-tight text-indigo-600 hover:text-indigo-500">
                    <span className="sr-only">Hire-zone</span>
                    Hire-zone
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an Employer account
                        </h1>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        id="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="First Name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="secondName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Second Name</label>
                                    <input
                                        type="text"
                                        name="secondName"
                                        id="secondName"
                                        value={formData.secondName}
                                        onChange={handleChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Second Name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Username"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="name@company.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="companyName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company Name</label>
                                    <input
                                        type="text"
                                        name="companyName"
                                        id="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Company Name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="industry" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Industry</label>
                                    <input
                                        type="text"
                                        name="industry"
                                        id="industry"
                                        value={formData.industry}
                                        onChange={handleChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Industry"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                                    <input
                                        type="text"
                                        name="location"
                                        id="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Location"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="contactEmail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact Email</label>
                                    <input
                                        type="email"
                                        name="contactEmail"
                                        id="contactEmail"
                                        value={formData.contactEmail}
                                        onChange={handleChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="contact@company.com"
                                        required
                                    />
                                </div>
                            </div>
                            <button type="submit" className="w-full text-white bg-indigo-600 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-500 dark:focus:ring-indigo-800">
                                Create an account
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <a href="/employer-login" className="font-medium text-indigo-600 hover:underline dark:text-indigo-500">Login here</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EmployerRegister;