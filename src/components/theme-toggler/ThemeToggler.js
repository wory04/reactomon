import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledThemeToggler = styled.div`
  cursor: "pointer";
`;

const StyledIcon = styled.span`
  &:before {
    content: '${(props) => props.theme.ThemeTogglerIcon}';
  }
`;

const ThemeToggler = (props) => {
  return (
    <StyledThemeToggler onClick={props.changeTheme}>
      <StyledIcon />
    </StyledThemeToggler>
  );
};

ThemeToggler.propTypes = {
  changeTheme: PropTypes.func.isRequired,
};

export default ThemeToggler;
