import React from "react";
import PropTypes from "prop-types";
import { AppBar, MenuItem, SelectField } from "material-ui";
import { Toolbar, ToolbarGroup, ToolbarTitle } from "material-ui/Toolbar";
import { Categories } from "./Categories";

export const Top = ({
  history,
  title,
  useToobar,
  categories,
  categorySelected,
  sortSelected,
  handleChangeCategory,
  handleChangeSort
}) => (
  <div>
    <AppBar
      title={title}
      showMenuIconButton={false}
      style={{ backgroundColor: "#aaa" }}
    />
    {useToobar && (
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text="Sort:" />
          <SelectField
            value={sortSelected}
            onChange={(event, index, sortSelected) =>
              handleChangeSort(sortSelected)}
          >
            <MenuItem value={"-voteScore"} primaryText="Vote Score" />
            <MenuItem value={"-timestamp"} primaryText="Date" />
          </SelectField>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarTitle text="Categories:" />
          <Categories
            history={history}
            categories={categories}
            categorySelected={categorySelected}
            handleChange={handleChangeCategory}
            showFirstElement={true}
          />
        </ToolbarGroup>
      </Toolbar>
    )}
  </div>
);

Top.defaultProps = {
  title: "",
  useToobar: true,
  categories: [],
  categorySelected: "all",
  sortSelected: "-voteScore"
};

Top.propTypes = {
  title: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  categorySelected: PropTypes.string.isRequired,
  sortSelected: PropTypes.string.isRequired,
  handleChangeCategory: PropTypes.func.isRequired,
  handleChangeSort: PropTypes.func.isRequired
};
