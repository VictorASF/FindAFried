import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding:10px 10px 0px 10px;
  background: purple;
`;

export const Texto = styled.Text`
  font-size:16px;
  font-weight:bold;
`
export const ContainerButtons = styled.View`
  flex-direction:row;
  margin-top:30px;
  margin-bottom:5%;
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

export const ContainerFoto = styled.View`
  height:180px;
  margin-top:6%;
  margin-bottom: 6%;
  width:180px;
  border:1px solid red;
  border-radius:100px;
`;

export const Foto = styled.Image`

`;

export const ContainerInfo = styled.View`
width:100%;
background:#E6E6FA;
padding: 15px 0px 15px 0px;
border-radius:25px;
`;

export const InfoText = styled.Text`
padding-left:10px;
`;

export const ContainerBox = styled.View`
align-items:center;
width:100%;
`;

export const Box = styled.TextInput`

border:1px solid #ccc;
  height:55px;
  border-radius:10px;
  padding:0px 10px;
  margin-top:5px;
  width:95%;
  margin-bottom:5%;
`;