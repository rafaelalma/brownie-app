export enum Size {
  VeryBig = 'very big',
  Big = 'big',
  BigMedium = 'big medium',
  Medium = 'medium',
  MediumLittle = 'medium little',
  Little = 'little',
  Null = '',
}

export enum Sex {
  Male = 'male',
  Female = 'female',
  Null = '',
}

export interface Dog {
  id: string
  name: string
  kennel: string | null
  birthDate: Date | null
  breed: string | null
  sex: Sex | null
  comments: string | null
  isSpayedOrNeutered: boolean | null
  height: number | null
  length: number | null
  weight: number | null
  isCatFriendly: boolean | null
  size: Size | null
  youtubeUrl: string | null
}

export type NewDog = Omit<Dog, 'id'>

export enum IsSpayedOrNeutered {
  Yes = 'yes',
  No = 'no',
  Null = '',
}

export enum IsCatFriendly {
  Yes = 'yes',
  No = 'no',
  Null = '',
}

export enum DogSortField {
  CreateTime = 'createTime',
  UpdateTime = 'updateTime',
  Name = 'name',
  BirthDate = 'birthDate',
  Height = 'height',
  Length = 'length',
  Weight = 'weight',
}

export enum DogGroupField {
  Kennel = 'kennel',
  Breed = 'breed',
}
