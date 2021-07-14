const ListItemWithButton = (props) => {
  return (
    <li className="list-item">
      <div className="list-item-text">{props.text}</div>
      <button className="list-item_button" onClick={props.onClick}>
        {props.btnText}
      </button>
    </li>
  );
};

export default ListItemWithButton;
