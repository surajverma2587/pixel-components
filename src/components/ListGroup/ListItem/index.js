const ListItem = (props) => {
  return (
    <li
      className="list-item list-item-link list-item-text"
      onClick={props.onClick}
    >
      {props.text}
    </li>
  );
};

export default ListItem;
