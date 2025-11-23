import React from "react";
import JobForm from "./components/JobForm";
import KanbanBoard from "./components/KanbanBoard";
import useLocalStorage from "./utils/useLocalStorage";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [jobs, setJobs] = useLocalStorage("jobs", []);

  const addJob = (job) => setJobs([...jobs, job]);
  const updateJob = (updated) => setJobs(jobs.map((j) => (j.id === updated.id ? updated : j)));
  const deleteJob = (id) => setJobs(jobs.filter((j) => j.id !== id));

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Job Application Tracker</h2>
      <JobForm addJob={addJob} />
      <KanbanBoard jobs={jobs} updateJob={updateJob} deleteJob={deleteJob} />
    </div>
  );
}
