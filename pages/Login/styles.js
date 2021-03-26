import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  flex-direction:column;
  align-items:center;
  justify-content:flex-end;
  background-color:#AB1B71;
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
  font-size:20px;
  color:#b4b8c6;
`;

export const Input = styled.TextInput`
  border:1px solid #ccc;
  height:65px;
  border-radius:5px;
  padding:0px 20px;
  margin:10px;
`;