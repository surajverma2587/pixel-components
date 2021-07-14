import ListItem from "./ListItem";
import ListItemWithButton from "./ListItemWithButton";

import "./ListGroup.css";

const ListGroup = (props) => {
  return (
    <div className="list-group">
      <h2 className="list-item-title">{props.title}</h2>
      <ul>
        {props.listItems.map((listItem) => {
          if (props.type === "btn") {
            return (
              <ListItemWithButton
                text={listItem}
                onClick={props.onClick}
                btnText={props.btnText || "Follow"}
                key={listItem}
              />
            );
          }
          if (props.type === "link") {
            return (
              <ListItem
                text={listItem}
                onClick={props.onClick}
                key={listItem}
              />
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
};

export default ListGroup;
