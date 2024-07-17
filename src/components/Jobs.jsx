import React, { useEffect, useState } from 'react';
import { BiTimeFive } from "react-icons/bi";
import axios from 'axios';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/jobs/joblist');
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {jobs.length === 0 ? (
          <div>No jobs found.</div>
        ) : (
          jobs.map(({ id, title, time, location, description, company , salary}) => (
            <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded [10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/70 hover:shadow-lg">
              <span className="flex justify-between items-center gap-4">
                <h1 className="text-[16px] font-semibold text-textColor group-hover:text-blue">{title}</h1>
                <span className="flex items-center text-[#ccc] gap-1"><BiTimeFive />{time}</span>
              </span>
              <h6 className="text-[#ccc]">{location}</h6>
              <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-blue">
                {description}
              </p>
              <div className="company flex items-center gap-2">
                <span className="text-[14px] py-[1rem] block group-hover:text-blue">
                  {salary}
                </span>
              </div>
              <button
                className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-blue"
              >
                Apply Now
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Jobs;
