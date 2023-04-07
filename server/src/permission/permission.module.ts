import { Module } from '@nestjs/common';
import {NestjsQueryGraphQLModule} from "@nestjs-query/query-graphql";
import {NestjsQueryTypeOrmModule} from "@nestjs-query/query-typeorm";
import {PermissionEntity} from "./permission.entity/permission.entity";
import {PermissionDto} from "./permission.dto/permission.dto";

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([PermissionEntity])],
      resolvers: [{ DTOClass: PermissionDto, EntityClass: PermissionEntity }],
    }),
  ],
})
export class PermissionModule {}
