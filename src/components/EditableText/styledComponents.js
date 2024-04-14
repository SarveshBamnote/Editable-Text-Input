import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #f5d0fe;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CardContainer = styled.div`
  background-color: #ffffff;
  padding: 50px;
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    padding: 20px;
    width: 80%;
  }
`

export const Heading = styled.h1`
  font-size: 40px;
  color: #000000;
  font-family: 'Roboto';
  text-align: center;
  margin-bottom: 50px;
  @media screen and (max-width: 768px) {
    font-size: 30px;
    margin-bottom: 30px;
  }
`

export const SaveContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const TextInput = styled.input`
  font-size: 24px;
  color: #323f4b;
  font-family: 'Roboto';
  padding: 5px 10px 5px 10px;
  border: 1px solid #cbd2d9;
  border-radius: 4px;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`

export const Button = styled.button`
  color: #ffffff;
  font-size: 22px;
  background-color: #d946ef;
  padding: 8px 16px 8px 16px;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: 20px;
  @media screen and (max-width: 768px) {
    font-size: 18px
    margin-left: 0;
    margin-top: 30px;
  }
`

export const EditContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const InputText = styled.p`
  font-size: 24px;
  color: #323f4b;
  font-family: 'Roboto';
`
