import React, { useState } from "react";

export default function JobForm({ addJob }) {
  const [form, setForm] = useState({
    company: "",
    role: "",
    status: "Applied",
    date: "",
  });
  const statuses = ["Applied", "Interview", "Offer", "Rejected"];

  const handleSubmit = (e) => {
    e.preventDefault();
    addJob({ ...form, id: Date.now() });
    setForm({ company: "", role: "", status: "Applied", date: "" });
  };

  return (
    <div className="card p-3 mb-4 shadow-sm">
      <h5>Add Job Application</h5>
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Company Name"
              value={form.company}
              required
              onChange={(e) => setForm({ ...form, company: e.target.value })}
            />
          </div>

          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Job Role"
              value={form.role}
              required
              onChange={(e) => setForm({ ...form, role: e.target.value })}
            />
          </div>

          <div className="col-md-3">
            <select
              className="form-select"
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
            >
              {statuses.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>

          <div className="col-md-3">
            <input
              type="date"
              className="form-control"
              value={form.date}
              required
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            />
          </div>
        </div>

        <button className="btn btn-primary mt-0">Add Application</button>
      </form>
    </div>
  );
}
