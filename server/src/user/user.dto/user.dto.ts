import {
  FilterableField,
  FilterableUnPagedRelation,
  IDField, PagingStrategies,
  QueryOptions,
  UnPagedRelation
} from "@nestjs-query/query-graphql";
import {Field, GraphQLISODateTime, ID, ObjectType} from "@nestjs/graphql";
import {RoleDto} from "../../role/role.dto/role.dto";
import {PermissionDto} from "../../permission/permission.dto/permission.dto";

@ObjectType('User')
@FilterableUnPagedRelation('permissions', () => PermissionDto, { disableRemove: true })
@FilterableUnPagedRelation('roles', () => RoleDto, { disableRemove: true })
@QueryOptions({ pagingStrategy: PagingStrategies.OFFSET })
export class UserDto {
  @IDField(() => ID)
  id!: number;

  @FilterableField()
  username!: string;

  @FilterableField()
  email!: string;

  @Field(() => GraphQLISODateTime)
  created!: Date;

  @Field(() => GraphQLISODateTime)
  updated!: Date;
}
