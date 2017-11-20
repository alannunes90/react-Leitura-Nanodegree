import React from "react";
import PropTypes from "prop-types";
import { AppBar } from "material-ui";
import { Toolbar } from "material-ui/Toolbar";
import { Categories } from "./Categories";
import Sort from "../components/Sort";

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
        <Sort sortSelected={sortSelected} handleChangeSort={handleChangeSort} />
          <Categories
            history={history}
            categories={categories}
            categorySelected={categorySelected}
            handleChange={handleChangeCategory}
            showFirstElement={true}
          />

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
