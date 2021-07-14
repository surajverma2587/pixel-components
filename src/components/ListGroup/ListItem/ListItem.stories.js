import React from "react";

import ListItem from ".";

export default {
  title: "Components/ListItem",
  component: ListItem,
};

export const ListItemLink = (args) => <ListItem {...args} />;

ListItemLink.args = {
  text: "bob.smith",
  onClick: () => {
    console.log("list item clicked");
  },
};
