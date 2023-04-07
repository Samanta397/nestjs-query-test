import {Field, GraphQLISODateTime, ID, ObjectType} from "@nestjs/graphql";
import {FilterableField, FilterableUnPagedRelation, IDField, UnPagedRelation} from "@nestjs-query/query-graphql";
import {UserDto} from "../../user/user.dto/user.dto";
import {PermissionDto} from "../../permission/permission.dto/permission.dto";

@ObjectType("Role")
@FilterableUnPagedRelation('permissions', () => PermissionDto, { disableRemove: true })
@FilterableUnPagedRelation('users', () => UserDto, { disableRemove: true })
export class RoleDto {
  @IDField(() => ID)
  id!: number;

  @FilterableField()
  name!: string;

  @Field(() => GraphQLISODateTime)
  created!: Date;

  @Field(() => GraphQLISODateTime)
  updated!: Date;
}
