import React from "react";

import SearchForm from ".";

export default {
  title: "Components/SearchForm",
  component: SearchForm,
};

export const GamesSearchBar = (args) => <SearchForm {...args} />;

GamesSearchBar.args = {
  placeholder: "Foo Bar",
  onSubmit: () => {},
  btnLabel: "Go Go Go",
};
