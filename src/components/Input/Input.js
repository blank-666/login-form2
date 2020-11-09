import React from 'react';
import { ErrorMessage, InputContainer, StyledInput, AutocompleteList, AutocompleteItem, ViewButton } from '../styledComponents';





export function Input(props) {
  return (
    <InputContainer>
      <StyledInput {...props} />
      {props.changePasswordVisibility && <ViewButton {...props} onClick={props.changePasswordVisibility} />}
      <ErrorMessage>{!props.isValid && props.errorMessage}</ErrorMessage>
    </InputContainer>
  );
}

export class AutocompleteInput extends React.Component {
  render() {
    return (
      <InputContainer {...this.props}>
        <StyledInput {...this.props} />
        <AutocompleteList>
          {this.props.autocomplete && this.props.autocomplete.map((user) =>
            (<AutocompleteItem key={user.login} name={user.login} onClick={() => { this.props.updateData(user.login, user.password) }}
            >
              {user.login}
            </AutocompleteItem>)
          )}
        </AutocompleteList>
      </InputContainer >
    )
  }
}