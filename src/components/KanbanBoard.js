import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

export default function KanbanBoard({ jobs, updateJob, deleteJob }) {
  const statuses = ["Applied", "Interview", "Offer", "Rejected"];

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const jobId = Number(result.draggableId);
    const newStatus = result.destination.droppableId;
    const job = jobs.find((j) => j.id === jobId);
    updateJob({ ...job, status: newStatus });
  };

  const [editing, setEditing] = useState(null);
  const [editForm, setEditForm] = useState({ company: "", role: "", date: "" });

  const startEdit = (job) => {
    setEditing(job.id);
    setEditForm({ company: job.company, role: job.role, date: job.date });
  };

  const saveEdit = (id) => {
    updateJob({ id, ...editForm, status: jobs.find((j) => j.id === id).status });
    setEditing(null);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="row text-center">
        {statuses.map((status) => (
          <div className="col-md-3" key={status}>
            <div className="card shadow-sm mb-3">
              <div className="card-header bg-dark text-white fw-bold">{status}</div>
              <Droppable droppableId={status}>
                {(provided) => (
                  <div
                    className="card-body"
                    style={{ minHeight: "300px" }}
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {jobs
                      .filter((job) => job.status === status)
                      .map((job, index) => (
                        <Draggable key={job.id} draggableId={String(job.id)} index={index}>
                          {(prov) => (
                            <div
                              ref={prov.innerRef}
                              {...prov.draggableProps}
                              {...prov.dragHandleProps}
                              className="p-2 mb-2 border rounded bg-light text-start"
                            >
                              {editing === job.id ? (
                                <>
                                  <input
                                    className="form-control mb-1"
                                    value={editForm.company}
                                    onChange={(e) => setEditForm({ ...editForm, company: e.target.value })}
                                  />
                                  <input
                                    className="form-control mb-1"
                                    value={editForm.role}
                                    onChange={(e) => setEditForm({ ...editForm, role: e.target.value })}
                                  />
                                  <input
                                    type="date"
                                    className="form-control mb-2"
                                    value={editForm.date}
                                    onChange={(e) => setEditForm({ ...editForm, date: e.target.value })}
                                  />
                                  <button className="btn btn-success btn-sm me-2" onClick={() => saveEdit(job.id)}>Save</button>
                                  <button className="btn btn-secondary btn-sm" onClick={() => setEditing(null)}>Cancel</button>
                                </>
                              ) : (
                                <>
                                  <strong>{job.company}</strong>
                                  <p className="m-0">{job.role}</p>
                                  <small>Date: {job.date}</small>
                                  <div className="mt-2">
                                    <button className="btn btn-sm btn-outline-primary me-2" onClick={() => startEdit(job)}>Edit</button>
                                    <button className="btn btn-sm btn-outline-danger" onClick={() => deleteJob(job.id)}>Delete</button>
                                  </div>
                                </>
                              )}
                            </div>
                          )}
                        </Draggable>
                      ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </div>
        ))}
      </div>
    </DragDropContext>
  );
}
