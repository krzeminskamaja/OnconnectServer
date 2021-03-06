/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateKeywordArgs } from "./CreateKeywordArgs";
import { UpdateKeywordArgs } from "./UpdateKeywordArgs";
import { DeleteKeywordArgs } from "./DeleteKeywordArgs";
import { KeywordFindManyArgs } from "./KeywordFindManyArgs";
import { KeywordFindUniqueArgs } from "./KeywordFindUniqueArgs";
import { Keyword } from "./Keyword";
import { ResourceFindManyArgs } from "../../resource/base/ResourceFindManyArgs";
import { Resource } from "../../resource/base/Resource";
import { SynonymFindManyArgs } from "../../synonym/base/SynonymFindManyArgs";
import { Synonym } from "../../synonym/base/Synonym";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { KeywordService } from "../keyword.service";

@graphql.Resolver(() => Keyword)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class KeywordResolverBase {
  constructor(
    protected readonly service: KeywordService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Keyword",
    action: "read",
    possession: "any",
  })
  async _keywordsMeta(
    @graphql.Args() args: KeywordFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Keyword])
  @nestAccessControl.UseRoles({
    resource: "Keyword",
    action: "read",
    possession: "any",
  })
  async keywords(
    @graphql.Args() args: KeywordFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Keyword[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Keyword",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Keyword, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Keyword",
    action: "read",
    possession: "own",
  })
  async keyword(
    @graphql.Args() args: KeywordFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Keyword | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Keyword",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Keyword)
  @nestAccessControl.UseRoles({
    resource: "Keyword",
    action: "create",
    possession: "any",
  })
  async createKeyword(
    @graphql.Args() args: CreateKeywordArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Keyword> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Keyword",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Keyword"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Keyword)
  @nestAccessControl.UseRoles({
    resource: "Keyword",
    action: "update",
    possession: "any",
  })
  async updateKeyword(
    @graphql.Args() args: UpdateKeywordArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Keyword | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Keyword",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Keyword"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Keyword)
  @nestAccessControl.UseRoles({
    resource: "Keyword",
    action: "delete",
    possession: "any",
  })
  async deleteKeyword(
    @graphql.Args() args: DeleteKeywordArgs
  ): Promise<Keyword | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Resource])
  @nestAccessControl.UseRoles({
    resource: "Keyword",
    action: "read",
    possession: "any",
  })
  async resourceId(
    @graphql.Parent() parent: Keyword,
    @graphql.Args() args: ResourceFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Resource[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Resource",
    });
    const results = await this.service.findResourceId(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => [Synonym])
  @nestAccessControl.UseRoles({
    resource: "Keyword",
    action: "read",
    possession: "any",
  })
  async synonymId(
    @graphql.Parent() parent: Keyword,
    @graphql.Args() args: SynonymFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Synonym[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Synonym",
    });
    const results = await this.service.findSynonymId(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => [User])
  @nestAccessControl.UseRoles({
    resource: "Keyword",
    action: "read",
    possession: "any",
  })
  async userId(
    @graphql.Parent() parent: Keyword,
    @graphql.Args() args: UserFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<User[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "User",
    });
    const results = await this.service.findUserId(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }
}
