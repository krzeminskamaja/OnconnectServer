/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, CurrentSource, User } from "@prisma/client";

export class CurrentSourceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CurrentSourceFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CurrentSourceFindManyArgs>
  ): Promise<number> {
    return this.prisma.currentSource.count(args);
  }

  async findMany<T extends Prisma.CurrentSourceFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CurrentSourceFindManyArgs>
  ): Promise<CurrentSource[]> {
    return this.prisma.currentSource.findMany(args);
  }
  async findOne<T extends Prisma.CurrentSourceFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CurrentSourceFindUniqueArgs>
  ): Promise<CurrentSource | null> {
    return this.prisma.currentSource.findUnique(args);
  }
  async create<T extends Prisma.CurrentSourceCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CurrentSourceCreateArgs>
  ): Promise<CurrentSource> {
    return this.prisma.currentSource.create<T>(args);
  }
  async update<T extends Prisma.CurrentSourceUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CurrentSourceUpdateArgs>
  ): Promise<CurrentSource> {
    return this.prisma.currentSource.update<T>(args);
  }
  async delete<T extends Prisma.CurrentSourceDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CurrentSourceDeleteArgs>
  ): Promise<CurrentSource> {
    return this.prisma.currentSource.delete(args);
  }

  async findUserId(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<User[]> {
    return this.prisma.currentSource
      .findUnique({
        where: { id: parentId },
      })
      .userId(args);
  }
}