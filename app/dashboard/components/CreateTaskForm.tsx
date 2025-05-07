'use client';

import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from '@/components/ui/form';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern';
import { cn } from '@/lib/utils';

const taskSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  dueDate: z.string().min(1),
  priority: z.enum(['Low', 'Medium', 'High']),
  status: z.enum(['Pending', 'In Progress', 'Completed']),
});

type TaskFormValues = z.infer<typeof taskSchema>;

const defaultValues: TaskFormValues = {
  title: '',
  description: '',
  dueDate: '',
  priority: 'Medium',
  status: 'Pending',
};

export default function CreateTaskForm() {
  const methods = useForm<TaskFormValues>({
    resolver: zodResolver(taskSchema),
    defaultValues,
  });

  const { handleSubmit, control, reset } = methods;

  const onSubmit = async (data: TaskFormValues) => {
    try {
      const res = await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert('Task created!');
        reset();
      } else {
        alert('Error creating task.');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black transition-colors">
      {/* Magical UI Background Pattern */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />

      {/* Foreground Form */}
      <FormProvider {...methods}>
        <Card className="max-w-3xl w-full mx-4 md:mx-auto z-10 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-lg shadow-2xl border border-gray-200 dark:border-zinc-700 transition-colors">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Create New Task
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row gap-4">
                <FormField
                  control={control}
                  name="title"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-gray-700 dark:text-gray-300">Title</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter task title"
                          {...field}
                          className="bg-white dark:bg-zinc-800 text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="dueDate"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-gray-700 dark:text-gray-300">Due Date</FormLabel>
                      <FormControl>
                        <Input
                          type="date"
                          {...field}
                          className="bg-white dark:bg-zinc-800 text-black dark:text-white"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 dark:text-gray-300">Description</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={4}
                        placeholder="Enter task description"
                        {...field}
                        className="bg-white dark:bg-zinc-800 text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="flex flex-col md:flex-row gap-4">
                <FormField
                  control={control}
                  name="priority"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-gray-700 dark:text-gray-300">Priority</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white dark:bg-zinc-800 text-black dark:text-white">
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-white dark:bg-zinc-900 text-black dark:text-white">
                          <SelectItem value="Low">Low</SelectItem>
                          <SelectItem value="Medium">Medium</SelectItem>
                          <SelectItem value="High">High</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="status"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-gray-700 dark:text-gray-300">Status</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white dark:bg-zinc-800 text-black dark:text-white">
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-white dark:bg-zinc-900 text-black dark:text-white">
                          <SelectItem value="Pending">Pending</SelectItem>
                          <SelectItem value="In Progress">In Progress</SelectItem>
                          <SelectItem value="Completed">Completed</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex justify-end">
                <Button type="submit" className="w-full md:w-auto">
                  Create Task
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </FormProvider>
    </div>
  );
}
