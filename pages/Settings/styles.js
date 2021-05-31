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
  margin-top:5%;
  margin-bottom:5%;
`

export const Button = styled.TouchableOpacity`
  flex:1;
  width:100%;
  height: 60px;
  background-color: #DC143C;
  border-radius:25px;
  justify-content:center;
  align-items:center;
`

export const ButtonText = styled.Text`
  color:purple;
  font-size:18px;
  font-weight:bold;
`

export const ContainerFoto = styled.View`
  height:180px;
  margin-top:5%;
  width:180px;
  background: #E6E6FA;
  border-radius:100px;
`;

export const Foto = styled.Image`
  width:180px;
  height:180px;
  border-radius:100px;
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

export const ButtonSalvar = styled.TouchableOpacity`
margin-top:5%;
width:25%;
height: 50px;
background-color: #E6E6FA;
border-radius:25px;
justify-content:center;
align-items:center;

`;

export const ContainerButton = styled.View`
  height:60px;
  width:100%;
  justify-content:flex-end;
  align-items:flex-end;
`;

export const ContainerButtonAlterar = styled.View`
  height:60px;
  width:100%;
  justify-content:center;
  align-items:center;
  margin-bottom:5%;
`;

export const ButtonAlterar = styled.TouchableOpacity`
margin-top:5%;
width:39%;
height: 50px;
background-color: #E6E6FA;
border-radius:25px;
justify-content:center;
align-items:center;
`;