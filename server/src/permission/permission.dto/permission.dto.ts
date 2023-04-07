import {Field, GraphQLISODateTime, ID, ObjectType} from "@nestjs/graphql";
import {FilterableField, IDField, UnPagedRelation} from "@nestjs-query/query-graphql";
import {RoleDto} from "../../role/role.dto/role.dto";
import {UserDto} from "../../user/user.dto/user.dto";

@ObjectType("Permission")
@UnPagedRelation('roles', () => RoleDto, { disableRemove: true })
@UnPagedRelation('users', () => UserDto, { disableRemove: true })
export class PermissionDto {
  @IDField(() => ID)
  id!: number;

  @FilterableField()
  name!: string;

  @Field(() => GraphQLISODateTime)
  created!: Date;

  @Field(() => GraphQLISODateTime)
  updated!: Date;
}
