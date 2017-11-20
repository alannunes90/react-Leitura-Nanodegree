import React from "react";
import { MenuItem, SelectField } from "material-ui";
import { ToolbarGroup, ToolbarTitle } from "material-ui/Toolbar";

export default class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "-voteScore"
    };
  }

  handleChange = value => {
    this.setState({
      value: value
    });
    this.props.handleChangeSort(value);
    console.dir(value);
  };
  render() {
    return (
      <ToolbarGroup>
        <ToolbarTitle text="Sort:" />
        <SelectField
          value={this.props.sortSelected}
          onChange={(event, index, sortSelected) =>
            this.props.handleChangeSort(sortSelected)}
        >
          <MenuItem value={"-category"} primaryText="Categoria" />
          <MenuItem value={"-timestamp"} primaryText="Date" />
          <MenuItem value={"-voteScore"} primaryText="Vote Score" />
          <MenuItem value={"title"} primaryText="Título" />
          <MenuItem
            value={"-totalComments"}
            primaryText="Total de comentários"
          />
        </SelectField>
      </ToolbarGroup>
    );
  }
}
