import React from "react";

export default function CompletedEnrollmentCard({ enrollment }) {
  const {
    userId,
    simulationId,
    progress,
    taskSubmissions,
    completedAt,
  } = enrollment;

  return (
    <div className="p-6 bg-white rounded shadow space-y-4">
      <h2 className="text-xl font-bold text-green-600">Completed Simulation</h2>

      <div>
        <p><strong>Candidate:</strong> {userId.firstName} {userId.lastName}</p>
        <p><strong>Email:</strong> {userId.email}</p>
        <p><strong>Simulation:</strong> {simulationId.title}</p>
        <p><strong>Progress:</strong> {progress}%</p>
        <p><strong>Completed At:</strong> {new Date(completedAt).toLocaleString()}</p>
      </div>

      <div>
        <h3 className="font-semibold text-lg mt-4">Submitted Tasks</h3>
        <ul className="mt-2 space-y-3">
          {taskSubmissions.map((task, index) => (
            <li key={task._id} className="border rounded p-3 bg-gray-50">
              <p><strong>Task {index + 1}:</strong> {task.taskId.title}</p>
              <p><strong>Score:</strong> {task.taskId.completionScore}</p>
              <p>
                <strong>Submission:</strong>{" "}
                <a
                  href={task.submissionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  View File
                </a>
              </p>
              <p>
                <strong>Submitted At:</strong>{" "}
                {new Date(task.submittedAt).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
