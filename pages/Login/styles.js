import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  flex-direction:column;
  align-items:center;
  justify-content:flex-end;
  /* background-color:#AB1B71; */
  padding:10px 10px 0px 10px;

`;

export const CaixaLogin = styled.View`
  background-color:#fff;
  width:100%;
  height:50%;
  border-top-right-radius:25px;
  border-top-left-radius:25px;
  padding:20px;
 
`;

export const ContainerBotoes = styled.View`
  flex-direction:row;

`;

export const Botao = styled.TouchableOpacity`
  flex:1;
  align-items:center;
  justify-content:center;
  height:60px;
  border-bottom-width:4px;
  border-bottom-color: ${props => props.ultimoClick ? "#AE1B73" : "#fff"} ;
  margin: 0px 5px;

`;

export const BotaoTexto = styled.Text`
  font-size:20px;
  color:${props => props.ultimoClick ? "#673f66" : "#ccc"} ;
`;

export const ContainerInputs = styled.View`
  margin-top:30px;

`;


export const InputTexto = styled.Text`
  font-size:18px;
  color:#b4b8c6;
`;

export const Input = styled.TextInput`
  border:1px solid #ccc;
  height:65px;
  border-radius:5px;
  padding:0px 20px;
  margin-top:5px;
`;

export const BackgroundImage = styled.ImageBackground`
width:230%;
height:120%;
position:absolute;

`;

export const Logo = styled.View`
 flex:1;
 justify-content:center;
 align-items:center;
 resizeMode: center;
`
export const CaixaTextoChamada = styled.View`
 flex:1;
 justify-content:center;
 align-items:center;
`

export const TextoChamada = styled.Text`
 color:#fff;
 font-size:20px;
 text-align:center;
 background:black;
`

export const ForgotPassword = styled.TouchableOpacity`
  
  align-items:flex-end;

`

export const TextForgotPassword = styled.Text`
  color:#ae1b73;
  font-size:14px;

`


export const ContainerButtons = styled.View`
  flex-direction:row;
  margin-top:20px;
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
