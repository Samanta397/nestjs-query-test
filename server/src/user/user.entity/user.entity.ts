import {Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {RoleEntity} from "../../role/role.entity/role.entity";
import {PermissionEntity} from "../../permission/permission.entity/permission.entity";

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  username!: string;

  @Column()
  email!: string;

  @ManyToMany(() => PermissionEntity, { cascade: true })
  @JoinTable()
  permissions: PermissionEntity[];

  @ManyToMany(() => RoleEntity, { cascade: true })
  @JoinTable()
  roles: RoleEntity[];

  @CreateDateColumn()
  created!: Date;
}
