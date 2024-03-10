import ObjectID from "bson-objectid"

export type IEntity = {
  id?: string
  createdAt?: number
  updatedAt?: number
  disabledAt?: number
  active?: boolean
}

export default class Entity {
  id: string
  createdAt: number
  updatedAt?: number
  disabledAt?: number
  active: boolean

  constructor (init: IEntity) {
    this.id = init.id ?? String(ObjectID())
    this.createdAt = init.createdAt ?? Date.now()
    this.updatedAt = init.updatedAt
    this.disabledAt = init.disabledAt
    this.active = init.active ?? true
  }
}