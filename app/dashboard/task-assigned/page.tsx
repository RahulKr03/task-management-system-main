import React from 'react';

export interface Task {
  _id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: 'Low' | 'Medium' | 'High';
  status: 'Pending' | 'In Progress' | 'Completed';
}

interface AssignedTasksProps {
  tasks: Task[];
}

const statusColor = {
  Pending: 'bg-yellow-100 text-yellow-800',
  'In Progress': 'bg-blue-100 text-blue-800',
  Completed: 'bg-green-100 text-green-800',
};

const AssignedTasks: React.FC<AssignedTasksProps> = ({ tasks = [] }) => {
    return (
      <section className="h-screen p-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Tasks Assigned to Them</h2>
  
        <div className="flex flex-col gap-4">
          {tasks.length === 0 ? (
            <p className="text-gray-500">No tasks assigned.</p>
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
  

export default AssignedTasks;
