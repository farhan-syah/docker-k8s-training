import { Injectable } from '@nestjs/common';
import { PrismaService } from '../db';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}

  create(createCourseDto: CreateCourseDto) {
    return this.prisma.course.create({ data: createCourseDto });
  }

  findAll() {
    return this.prisma.course.findMany();
  }

  findOne(id: number) {
    return this.prisma.course.findUnique({ where: { id } });
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return this.prisma.course.update({ where: { id }, data: updateCourseDto });
  }

  remove(id: number) {
    return this.prisma.course.delete({ where: { id } });
  }
}
