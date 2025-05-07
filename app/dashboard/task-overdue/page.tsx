import React from 'react';

export interface Task {
  _id: string;
  title: string;
  description: string;
  dueDate: string;
  assignedTo: string;
  priority: 'Low' | 'Medium' | 'High';
  status: 'Pending' | 'In Progress' | 'Completed';
}

interface OverdueTasksProps {
  tasks: Task[];
}

const OverdueTasks: React.FC<OverdueTasksProps> = ({ tasks = [] }) => {
  const today = new Date();

  const overdueTasks = tasks.filter(
    (task) =>
      new Date(task.dueDate) < today && task.status !== 'Completed'
  );

  return (
    <section className="h-screen p-4 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Overdue Tasks</h2>

      <div className="flex flex-col gap-4">
        {overdueTasks.length === 0 ? (
          <p className="text-gray-500">No overdue tasks.</p>
        ) : (
          overdueTasks.map((task) => (
            <div
              key={task._id}
              className="flex flex-col md:flex-row items-start md:items-center justify-between bg-red-50 shadow-md border border-red-200 rounded-xl p-4"
            >
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-red-800">{task.title}</h3>
                <p className="text-sm text-red-600">
                  Due: {new Date(task.dueDate).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-600 mt-1">{task.description}</p>
                <p className="text-sm text-gray-600 mt-1">
                  Assigned to: <span className="font-medium">{task.assignedTo}</span>
                </p>
              </div>
              <span className="mt-3 md:mt-0 px-3 py-1 text-sm bg-red-200 text-red-900 rounded-full">
                {task.status}
              </span>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default OverdueTasks;
