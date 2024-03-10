import Entity, { IEntity } from "./Entity";

export type IUser = IEntity & {
  email: string
  password: string
  name: string
  verified?: boolean
}

export default class User extends Entity {
  email: string
  password: string
  name: string
  verified: boolean
  
  constructor (init: IUser) {
    super(init as IEntity)
    
    this.email = init.email
    this.password = init.password
    this.name = init.name
    this.verified = init.verified ?? false
  }
}