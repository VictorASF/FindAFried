import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding:10px 10px 0px 10px;

`;

export const Texto = styled.Text`
  font-size:16px;
  font-weight:bold;
`
export const ContainerButtons = styled.View`
  flex-direction:row;
  margin-top:30px;
`

export const Button = styled.TouchableOpacity`
  flex:1;
  width:100%;
  height: 60px;
  background-color: ${props => props.invert ? "#fff" : "#ae1b73"};
  border:1px solid #ae1b73;
  border-radius:5px;
  justify-content:center;
  align-items:center;
  margin-right:${props => props.invert ? "10px" : "0px"};
`

export const ButtonText = styled.Text`
  color:${props => props.invert ? "#ae1b73" : "#fff"};
  font-size:16px;
  font-weight:bold;
`