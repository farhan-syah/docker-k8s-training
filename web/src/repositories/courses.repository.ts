import { API } from "../services";
import { variables } from "../variables";
import type { Course, CourseCreate, CourseUpdate } from "./courses.entity";

class _CoursesRepository {
  basePath = variables.apiBasePath + "/courses";

  async getAll(): Promise<Course[]> {
    return API.get<Course[]>(this.basePath);
  }

  async get(id: number): Promise<Course> {
    return API.get<Course>(this.basePath + `/${id}`);
  }

  async create(obj: CourseCreate) {
    return API.post<CourseCreate, Course>(this.basePath, obj);
  }

  async update(id: number, obj: CourseUpdate) {
    return API.patch<CourseUpdate, Course>(this.basePath + `/${id}`, obj);
  }

  async delete(id: number) {
    return API.delete<Course>(this.basePath + `/${id}`);
  }
}

export const CourseRepository = new _CoursesRepository();
