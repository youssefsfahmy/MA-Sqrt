import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import ListItemText from '@material-ui/core/ListItemText'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import { useHistory } from 'react-router'

export default function ListCard(props) {
  const history = useHistory()
  return (
    <div>
      <Card
        style={{
          width: '20vw',
          height: '25vw',
          margin: '1vw',
          borderRadius: '0.4vw',
        }}
        onClick={() => history.push('/Todo')}
      >
        <CardHeader title={props.title} />
        <div>
          {props.todos.length === 0 ? (
            <h4>This is an empty list :(, click to add todos</h4>
          ) : (
            props.todos.map((d) => (
              <>
                <li>{d.content}</li>
              </>
            ))
          )}
        </div>
      </Card>
    </div>
  )
}
