import React from "react";

import ListItemWithButton from ".";

export default {
  title: "Components/ListItemWithButton",
  component: ListItemWithButton,
};

export const ButtonListItem = (args) => <ListItemWithButton {...args} />;

ButtonListItem.args = {
  text: "alice.green",
  onClick: () => {
    console.log("list item clicked");
  },
  btnText: "Follow",
};
