/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Synonym, Keyword } from "@prisma/client";

export class SynonymServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SynonymFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SynonymFindManyArgs>
  ): Promise<number> {
    return this.prisma.synonym.count(args);
  }

  async findMany<T extends Prisma.SynonymFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SynonymFindManyArgs>
  ): Promise<Synonym[]> {
    return this.prisma.synonym.findMany(args);
  }
  async findOne<T extends Prisma.SynonymFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SynonymFindUniqueArgs>
  ): Promise<Synonym | null> {
    return this.prisma.synonym.findUnique(args);
  }
  async create<T extends Prisma.SynonymCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SynonymCreateArgs>
  ): Promise<Synonym> {
    return this.prisma.synonym.create<T>(args);
  }
  async update<T extends Prisma.SynonymUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SynonymUpdateArgs>
  ): Promise<Synonym> {
    return this.prisma.synonym.update<T>(args);
  }
  async delete<T extends Prisma.SynonymDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SynonymDeleteArgs>
  ): Promise<Synonym> {
    return this.prisma.synonym.delete(args);
  }

  async getKeywordId(parentId: string): Promise<Keyword | null> {
    return this.prisma.synonym
      .findUnique({
        where: { id: parentId },
      })
      .keywordId();
  }
}