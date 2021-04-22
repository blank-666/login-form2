import styled from "styled-components";
import view from "./img/view.png";
import noView from "./img/no-view.png";

const Button = styled.button`
  height: 30px;
  background: rgb(160, 194, 214);
  color: black;
  display: flex;
  border-radius: 5px;
  text-align: center;
  padding: 5px 0 5px 140px;
  margin: 0 auto;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  width: 350px;
  margin-bottom: 15px;
  cursor: pointer;
`;

const Container = styled.div`
  width: 350px;
  background: black;
  color: white;

  padding: 50px 50px;
  margin: 20px auto 100px auto;
  border-radius: 5px;
  ::after {
    display: block;
    font-size: 12px;
    color: grey;
    content: "${(props) => props.footer}";
    margin-top: 50px;
    text-align: center;
  }
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  margin-top: 15px;
  float: left;
  margin-right: 5px;
  cursor: pointer;
`;
const CheckboxLabel = styled.div`
  margin-top: 15px;
  color: white;
  font-size: 12px;
  display: flex;
  margin-bottom: 30px;
`;

const NameContainer = styled.div`
  display: flex;
  width: 350px;
  justify-content: space-between;
`;
const ErrorMessage = styled.div`
  height: 20px;
  text-align: left;
  color: red;
  font-size: 12px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledInput = styled.input`
  position: relative;
  background: black;
  border: 1px solid grey;
  border-radius: 3px;
  color: white;
  font-weight: 700;
  padding: 12px 0 12px 10px;
  outline: none;
  ${(props) => (props.nameInput ? "width: 158px" : "width: 338px")};
  ${(props) => (props.isValid ? "border-color: grey" : "border-color: red")};
  ${(props) => props.placeholder === "Login *" && "margin-bottom: 20px"};
`;

const AutocompleteList = styled.div`
  margin-top: 42px;
  position: absolute;
  border: 1px solid #d4d4d4;
  border-bottom: none;
  border-top: none;
  z-index: 99;
`;

const AutocompleteItem = styled.div`
  display: block;
  position: relative;
  width: 336px;
  list-style-type: none;
  padding: 6px;
  cursor: pointer;
  background-color: #fff;
  border-bottom: 1px solid grey;
  color: black;
`;

const ViewButton = styled.a`
  position: absolute;
  margin-left: 315px;
  margin-top: 9px;
  cursor: pointer;
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url(${(props) => (props.type === "password" ? view : noView)}) 0 0
    no-repeat;
  z-index: 1;
`;
const LinkContainer = styled.div`
  ${(props) => (props.right ? "text-align: right" : "float: left")};
  .menuItem {
    color: rgb(160, 194, 214);
    font-size: 12px;
  }
`;

// for page:
const VideoContainer = styled.div`
  background: black;
  padding: 50px;
  margin: 0 auto;
  width: 560px;
  margin-top: 50px;
  border-radius: 20px;
`;
// for nav-menu:
const NavContainer = styled.div`
  width: 100%;
  background: black;
  text-align: right;
  height: 50px;
  padding-top: 20px;
  .menuItem {
    margin-right: 50px;
    text-decoration: none;
    color: white;
    font-weight: 700;
  }
`;
export {
  Button,
  Container,
  Checkbox,
  CheckboxLabel,
  NameContainer,
  ErrorMessage,
  VideoContainer,
  InputContainer,
  StyledInput,
  AutocompleteList,
  AutocompleteItem,
  ViewButton,
  LinkContainer,
  NavContainer,
};
