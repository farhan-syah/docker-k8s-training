export interface Course {
  id: number;
  courseCode: string;
  name: string;
}

export type CourseCreate = Omit<Course, "id">;

export type CourseUpdate = Partial<CourseCreate>;
