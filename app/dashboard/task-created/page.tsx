import React from 'react';

export interface CreatedTask {
  _id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: 'Low' | 'Medium' | 'High';
  assignedTo: string;
  status: 'Pending' | 'In Progress' | 'Completed';
}

interface CreatedTasksProps {
  tasks: CreatedTask[];
}

const statusColor = {
  Pending: 'bg-yellow-100 text-yellow-800',
  'In Progress': 'bg-blue-100 text-blue-800',
  Completed: 'bg-green-100 text-green-800',
};

const CreatedTasks: React.FC<CreatedTasksProps> = ({ tasks = [] }) => {
  return (
    <section className="h-screen p-4 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Tasks They Created</h2>

      <div className="flex flex-col gap-4">
        {tasks.length === 0 ? (
          <p className="text-gray-500">No tasks created.</p>
        ) : (
          tasks.map((task) => (
            <div
              key={task._id}
              className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-md rounded-xl p-4"
            >
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
                <p className="text-sm text-gray-500">
                  Due: {new Date(task.dueDate).toLocaleDateString()} | Priority: {task.priority}
                </p>
                <p className="text-sm text-gray-600 mt-1">{task.description}</p>
                <p className="text-sm text-gray-600 mt-1">
                  Assigned to: <span className="font-medium">{task.assignedTo}</span>
                </p>
              </div>
              <span
                className={`mt-3 md:mt-0 px-3 py-1 text-sm rounded-full ${statusColor[task.status]}`}
              >
                {task.status}
              </span>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default CreatedTasks;
