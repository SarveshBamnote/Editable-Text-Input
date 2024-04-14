import {Component} from 'react'

import {
  BgContainer,
  CardContainer,
  Heading,
  SaveContainer,
  EditContainer,
  TextInput,
  Button,
  InputText,
} from './styledComponents'

class EditableText extends Component {
  state = {
    textInput: '',
    toggle: true,
  }

  onClickSave = () => {
    this.setState({toggle: false})
  }

  onClickEdit = () => {
    this.setState({toggle: true})
  }

  onChangeInput = event => {
    this.setState({textInput: event.target.value})
  }

  render() {
    const {toggle, textInput} = this.state
    return (
      <BgContainer>
        <CardContainer>
          <Heading>Editable Text Input</Heading>
          {toggle ? (
            <SaveContainer>
              <TextInput
                type="text"
                onChange={this.onChangeInput}
                value={textInput}
              />
              <Button type="button" onClick={this.onClickSave}>
                Save
              </Button>
            </SaveContainer>
          ) : (
            <EditContainer>
              <InputText>{textInput}</InputText>
              <Button type="button" onClick={this.onClickEdit}>
                Edit
              </Button>
            </EditContainer>
          )}
        </CardContainer>
      </BgContainer>
    )
  }
}

export default EditableText
