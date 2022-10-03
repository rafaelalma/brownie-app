import { ReactElement } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

import { Dog } from './types'

type Props = {
  dogs: Dog[]
}

export default function DogList({ dogs }: Props): ReactElement {
  return (
    <List>
      {dogs.map((dog) => (
        <ListItem key={dog.id}>
          <ListItemText primary={dog.name} />
        </ListItem>
      ))}
    </List>
  )
}
