/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, ResourceSuggestion, Resource, User } from "@prisma/client";

export class ResourceSuggestionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ResourceSuggestionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ResourceSuggestionFindManyArgs>
  ): Promise<number> {
    return this.prisma.resourceSuggestion.count(args);
  }

  async findMany<T extends Prisma.ResourceSuggestionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ResourceSuggestionFindManyArgs>
  ): Promise<ResourceSuggestion[]> {
    return this.prisma.resourceSuggestion.findMany(args);
  }
  async findOne<T extends Prisma.ResourceSuggestionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ResourceSuggestionFindUniqueArgs>
  ): Promise<ResourceSuggestion | null> {
    return this.prisma.resourceSuggestion.findUnique(args);
  }
  async create<T extends Prisma.ResourceSuggestionCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ResourceSuggestionCreateArgs>
  ): Promise<ResourceSuggestion> {
    return this.prisma.resourceSuggestion.create<T>(args);
  }
  async update<T extends Prisma.ResourceSuggestionUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ResourceSuggestionUpdateArgs>
  ): Promise<ResourceSuggestion> {
    return this.prisma.resourceSuggestion.update<T>(args);
  }
  async delete<T extends Prisma.ResourceSuggestionDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ResourceSuggestionDeleteArgs>
  ): Promise<ResourceSuggestion> {
    return this.prisma.resourceSuggestion.delete(args);
  }

  async getResourceId(parentId: string): Promise<Resource | null> {
    return this.prisma.resourceSuggestion
      .findUnique({
        where: { id: parentId },
      })
      .ResourceID();
  }

  async getUserId(parentId: string): Promise<User | null> {
    return this.prisma.resourceSuggestion
      .findUnique({
        where: { id: parentId },
      })
      .userID();
  }
}
