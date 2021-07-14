import React from "react";

import ListGroup from ".";

export default {
  title: "Components/ListGroup",
  component: ListGroup,
};

export const UsersList = (args) => <ListGroup {...args} />;
export const FollowersList = (args) => <ListGroup {...args} />;

UsersList.args = {
  title: "Users",
  listItems: ["bob.smith", "alice.green", "really.long.long.long.name"],
  type: "btn",
  onClick: () => {
    console.log("btn clicked");
  },
  btnText: "Follow",
};

FollowersList.args = {
  title: "Followers",
  listItems: ["bob.smith", "alice.green", "really.long.long.long.name"],
  type: "link",
  onClick: () => {
    console.log("link clicked");
  },
};
