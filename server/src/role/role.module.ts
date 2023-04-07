import { Module } from '@nestjs/common';
import {NestjsQueryGraphQLModule} from "@nestjs-query/query-graphql";
import {NestjsQueryTypeOrmModule} from "@nestjs-query/query-typeorm";
import {RoleEntity} from "./role.entity/role.entity";
import {RoleDto} from "./role.dto/role.dto";

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([RoleEntity])],
      resolvers: [{ DTOClass: RoleDto, EntityClass: RoleEntity }],
    }),
  ],
})
export class RoleModule {}
