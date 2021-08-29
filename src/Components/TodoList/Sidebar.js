import { ListItem } from "material-ui";
import React from "react";

export default function Sidebar() {
  const [lists, setLists] = React.useState([]);
  return (
    <div>
      <h1>MY LISTS</h1>
      {lists.map((d) => (
        <ListItem>List</ListItem>
      ))}
    </div>
  );
}
