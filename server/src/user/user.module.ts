import { Module } from '@nestjs/common';
import {NestjsQueryGraphQLModule} from "@nestjs-query/query-graphql";
import {NestjsQueryTypeOrmModule} from "@nestjs-query/query-typeorm";
import {UserEntity} from "./user.entity/user.entity";
import {UserDto} from "./user.dto/user.dto";

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([UserEntity])],
      resolvers: [{ DTOClass: UserDto, EntityClass: UserEntity }],
    }),
  ],
})
export class UserModule {}
