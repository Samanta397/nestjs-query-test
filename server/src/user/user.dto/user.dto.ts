import {FilterableField, IDField, UnPagedRelation} from "@nestjs-query/query-graphql";
import {Field, GraphQLISODateTime, ID, ObjectType} from "@nestjs/graphql";
import {RoleDto} from "../../role/role.dto/role.dto";
import {PermissionDto} from "../../permission/permission.dto/permission.dto";

@ObjectType('User')
@UnPagedRelation('permissions', () => PermissionDto, { disableRemove: true })
@UnPagedRelation('roles', () => RoleDto, { disableRemove: true })
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
