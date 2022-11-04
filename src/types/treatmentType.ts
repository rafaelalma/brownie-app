export type Step = {
  id: string
  medication: string | null
  description: string | null
}

export type Part = {
  id: string
  name: string
  steps: Step[]
}

export interface Treatment {
  id: string
  parts: Part[]
  dog: {
    id: string
    name: string
    kennel: string | null
  }
}
