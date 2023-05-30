import { IsString } from 'class-validator';
export class CreateCourseDto {
  @IsString()
  courseCode: string;

  @IsString()
  name: string;
}
