import { IsString, IsDateString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsDateString()
  dueDate: string;

  @IsString()
  priority: string;

  @IsString()
  status: string;

  @IsString()
  createdBy: string;

  @IsString()
  assignedTo: string;
}
