/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestMorgan from "nest-morgan";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ResourceService } from "../resource.service";
import { ResourceCreateInput } from "./ResourceCreateInput";
import { ResourceWhereInput } from "./ResourceWhereInput";
import { ResourceWhereUniqueInput } from "./ResourceWhereUniqueInput";
import { ResourceFindManyArgs } from "./ResourceFindManyArgs";
import { ResourceUpdateInput } from "./ResourceUpdateInput";
import { Resource } from "./Resource";
import { ResourceHistoryFindManyArgs } from "../../resourceHistory/base/ResourceHistoryFindManyArgs";
import { ResourceHistory } from "../../resourceHistory/base/ResourceHistory";
import { ResourceHistoryWhereUniqueInput } from "../../resourceHistory/base/ResourceHistoryWhereUniqueInput";
import { KeywordFindManyArgs } from "../../keyword/base/KeywordFindManyArgs";
import { Keyword } from "../../keyword/base/Keyword";
import { KeywordWhereUniqueInput } from "../../keyword/base/KeywordWhereUniqueInput";
import { ResourceSuggestionFindManyArgs } from "../../resourceSuggestion/base/ResourceSuggestionFindManyArgs";
import { ResourceSuggestion } from "../../resourceSuggestion/base/ResourceSuggestion";
import { ResourceSuggestionWhereUniqueInput } from "../../resourceSuggestion/base/ResourceSuggestionWhereUniqueInput";
@swagger.ApiBearerAuth()
export class ResourceControllerBase {
  constructor(
    protected readonly service: ResourceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "Resource",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: Resource })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: ResourceCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Resource> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Resource",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"Resource"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: data,
      select: {
        abstract: true,
        authors: true,
        createdAt: true,
        id: true,
        imageURL: true,
        link: true,
        relaseDate: true,
        resourceType: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "Resource",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [Resource] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(ResourceFindManyArgs)
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Resource[]> {
    const args = plainToClass(ResourceFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Resource",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        abstract: true,
        authors: true,
        createdAt: true,
        id: true,
        imageURL: true,
        link: true,
        relaseDate: true,
        resourceType: true,
        title: true,
        updatedAt: true,
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "Resource",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Resource })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: ResourceWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Resource | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Resource",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        abstract: true,
        authors: true,
        createdAt: true,
        id: true,
        imageURL: true,
        link: true,
        relaseDate: true,
        resourceType: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return permission.filter(result);
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id")
  @nestAccessControl.UseRoles({
    resource: "Resource",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Resource })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: ResourceWhereUniqueInput,
    @common.Body()
    data: ResourceUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Resource | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Resource",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"Resource"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          abstract: true,
          authors: true,
          createdAt: true,
          id: true,
          imageURL: true,
          link: true,
          relaseDate: true,
          resourceType: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id")
  @nestAccessControl.UseRoles({
    resource: "Resource",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Resource })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: ResourceWhereUniqueInput
  ): Promise<Resource | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          abstract: true,
          authors: true,
          createdAt: true,
          id: true,
          imageURL: true,
          link: true,
          relaseDate: true,
          resourceType: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id/historyID")
  @nestAccessControl.UseRoles({
    resource: "Resource",
    action: "read",
    possession: "any",
  })
  @ApiNestedQuery(ResourceHistoryFindManyArgs)
  async findManyHistoryId(
    @common.Req() request: Request,
    @common.Param() params: ResourceWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<ResourceHistory[]> {
    const query = plainToClass(ResourceHistoryFindManyArgs, request.query);
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "ResourceHistory",
    });
    const results = await this.service.findHistoryId(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        readDate: true,

        sourceID: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        userID: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post("/:id/historyID")
  @nestAccessControl.UseRoles({
    resource: "Resource",
    action: "update",
    possession: "any",
  })
  async createHistoryId(
    @common.Param() params: ResourceWhereUniqueInput,
    @common.Body() body: ResourceWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      historyID: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Resource",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Resource"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id/historyID")
  @nestAccessControl.UseRoles({
    resource: "Resource",
    action: "update",
    possession: "any",
  })
  async updateHistoryId(
    @common.Param() params: ResourceWhereUniqueInput,
    @common.Body() body: ResourceHistoryWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      historyID: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Resource",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Resource"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id/historyID")
  @nestAccessControl.UseRoles({
    resource: "Resource",
    action: "update",
    possession: "any",
  })
  async deleteHistoryId(
    @common.Param() params: ResourceWhereUniqueInput,
    @common.Body() body: ResourceWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      historyID: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Resource",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Resource"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id/keywordID")
  @nestAccessControl.UseRoles({
    resource: "Resource",
    action: "read",
    possession: "any",
  })
  @ApiNestedQuery(KeywordFindManyArgs)
  async findManyKeywordId(
    @common.Req() request: Request,
    @common.Param() params: ResourceWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Keyword[]> {
    const query = plainToClass(KeywordFindManyArgs, request.query);
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Keyword",
    });
    const results = await this.service.findKeywordId(params.id, {
      ...query,
      select: {
        childID: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post("/:id/keywordID")
  @nestAccessControl.UseRoles({
    resource: "Resource",
    action: "update",
    possession: "any",
  })
  async createKeywordId(
    @common.Param() params: ResourceWhereUniqueInput,
    @common.Body() body: ResourceWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      keywordID: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Resource",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Resource"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id/keywordID")
  @nestAccessControl.UseRoles({
    resource: "Resource",
    action: "update",
    possession: "any",
  })
  async updateKeywordId(
    @common.Param() params: ResourceWhereUniqueInput,
    @common.Body() body: KeywordWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      keywordID: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Resource",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Resource"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id/keywordID")
  @nestAccessControl.UseRoles({
    resource: "Resource",
    action: "update",
    possession: "any",
  })
  async deleteKeywordId(
    @common.Param() params: ResourceWhereUniqueInput,
    @common.Body() body: ResourceWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      keywordID: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Resource",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Resource"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id/suggestionID")
  @nestAccessControl.UseRoles({
    resource: "Resource",
    action: "read",
    possession: "any",
  })
  @ApiNestedQuery(ResourceSuggestionFindManyArgs)
  async findManySuggestionId(
    @common.Req() request: Request,
    @common.Param() params: ResourceWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<ResourceSuggestion[]> {
    const query = plainToClass(ResourceSuggestionFindManyArgs, request.query);
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "ResourceSuggestion",
    });
    const results = await this.service.findSuggestionId(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        priority: true,

        ResourceID: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        userID: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post("/:id/suggestionID")
  @nestAccessControl.UseRoles({
    resource: "Resource",
    action: "update",
    possession: "any",
  })
  async createSuggestionId(
    @common.Param() params: ResourceWhereUniqueInput,
    @common.Body() body: ResourceWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      suggestionID: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Resource",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Resource"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id/suggestionID")
  @nestAccessControl.UseRoles({
    resource: "Resource",
    action: "update",
    possession: "any",
  })
  async updateSuggestionId(
    @common.Param() params: ResourceWhereUniqueInput,
    @common.Body() body: ResourceSuggestionWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      suggestionID: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Resource",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Resource"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id/suggestionID")
  @nestAccessControl.UseRoles({
    resource: "Resource",
    action: "update",
    possession: "any",
  })
  async deleteSuggestionId(
    @common.Param() params: ResourceWhereUniqueInput,
    @common.Body() body: ResourceWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      suggestionID: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Resource",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Resource"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
