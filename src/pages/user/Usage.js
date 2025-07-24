import React from 'react';
import TaskAccordion from '../user/Accordion'; // Adjust path if in a different directory

const UsagePage = () => {
  const dummyTasks = [
    {
      taskNumber: 1,
      title: "Calculate the area of a circle",
      isCompleted: false,
      content: "Use the formula A = πr² to calculate the area of a circle. Assume π = 3.14.",
      resources: [
        "Khan Academy: Area of a Circle",
        "Math Textbook - Chapter 7",
        "YouTube: How to calculate area"
      ],
    },
    {
      taskNumber: 2,
      title: "Submit your weekly report",
      isCompleted: true,
      content: "Prepare and upload your weekly progress report in PDF format.",
      resources: [
        "Company Report Template",
        "Previous Week's Report Example"
      ],
    },
    {
      taskNumber: 3,
      title: "Watch and summarize the lecture",
      isCompleted: false,
      content: "Watch the recorded lecture on 'Critical Thinking' and submit a 200-word summary.",
      resources: [
        "Lecture Recording Link",
        "Summary Guidelines PDF"
      ],
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Task List</h1>
      {dummyTasks.map((task, index) => (
        <TaskAccordion
          key={index}
          taskNumber={task.taskNumber}
          title={task.title}
          isCompleted={task.isCompleted}
          content={task.content}
          resources={task.resources}
        />
      ))}
    </div>
  );
};

export default UsagePage;
