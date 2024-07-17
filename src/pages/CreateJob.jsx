import React, { useState } from 'react';
import axios from 'axios';

export default function CreateJobListing() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    salary: '',
    employer_id: ''
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
      const response = await axios.post('http://localhost:5000/jobs/joblist', formData);
      alert(response.data.message);
    } catch (error) {
      console.error('Error creating job listing:', error);
      alert('Failed to create job listing');
    }
  };

  return (
    <>
      <div className="h-full flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <a href="/" className="-m-1.5 p-1.5 text-4xl font-bold tracking-tight text-indigo-600 hover:text-indigo-500">
            <span className="sr-only">Hire-zone</span>
            Hire-zone
          </a>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create a Job Listing
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="text-sm font-medium text-gray-900">
                Job Title
              </label>
              <div className="mt-2">
                <input
                  id="title"
                  name="title"
                  type="text"
                  required
                  value={formData.title}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="description" className="text-sm font-medium text-gray-900">
                Job Description
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  required
                  value={formData.description}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="salary" className="text-sm font-medium text-gray-900">
                Salary
              </label>
              <div className="mt-2">
                <input
                  id="salary"
                  name="salary"
                  type="text"
                  required
                  value={formData.salary}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="employer_id" className="text-sm font-medium text-gray-900">
                Employer ID
              </label>
              <div className="mt-2">
                <input
                  id="employer_id"
                  name="employer_id"
                  type="text"
                  required
                  value={formData.employer_id}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create Job Listing
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
