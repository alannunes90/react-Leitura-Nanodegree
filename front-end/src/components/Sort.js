import React from "react";
import PropTypes from "prop-types";
import { MenuItem, SelectField } from "material-ui";
import { ToolbarGroup, ToolbarTitle } from "material-ui/Toolbar";

export const Sort = ({ sortSelected, handleChangeSort }) => (
  <ToolbarGroup>
    <ToolbarTitle text="Sort:" />
    <SelectField
      value={sortSelected}
      onChange={(event, index, sortSelected) => handleChangeSort(sortSelected)}
    >
      <MenuItem value={"-category"} primaryText="Categoria" />
      <MenuItem value={"-timestamp"} primaryText="Date" />
      <MenuItem value={"-voteScore"} primaryText="Vote Score" />
      <MenuItem value={"title"} primaryText="Título" />
      <MenuItem value={"-totalComments"} primaryText="Total de comentários" />
    </SelectField>
  </ToolbarGroup>
);

Sort.defaultProps = {
  sortSelected: "-voteScore"
};

Sort.propTypes = {
  sortSelected: PropTypes.string.isRequired,
  handleChangeSort: PropTypes.func.isRequired
};
