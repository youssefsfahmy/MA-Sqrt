import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";

export default function ListCard(props) {
  return (
    <div>
      <Card
        style={{
          width: "20vw",
          height: "25vw",
          margin: "1vw",
          borderRadius: "0.4vw",
        }}
      >
        <CardHeader title={props.title} />
        <div>
          {props.todos.map((d) => (
            <>
              <ListItemText className="listText" primary={d.content} />
              <TextField
                id="standard-basic"
                label={d.content}
                value={d.content}
              />
            </>
          ))}
        </div>
      </Card>
    </div>
  );
}
