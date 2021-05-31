import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding:10px 10px 10px 10px;
  background:purple;
`;

export const Text = styled.Text`
  font-weight:bold;
`;

export const ContainerImagem = styled.View`
  width:100%;
  height: 300px;
  background: #E6E6FA;
  border-radius: 25px;
  margin-top:3%;
  margin-bottom:5%;
  `;

export const Imagem = styled.Image`
  width:100%;
  height:100%;
  border-radius:25px;
`;

export const ContainerInfo = styled.View`
  margin-bottom:1%;
  width:100%;
  padding: 8px;
  flex-direction:row;
  justify-content:space-between;
  border-radius:25px;
  background: #E6E6FA;
  `;

export const Info = styled.View`
  
  `;

export const InfoText = styled.Text`
  font-weight: bold;
  font-size:22px;
`;

export const InfoTextInner = styled.Text`
  font-size:18px;
`;

export const ContainerBotao = styled.View`
  width:100%;
  margin-bottom:5%;
  justify-content:center;
  align-items: center;
`;

export const Botao = styled.TouchableOpacity`
border-radius:25px;
padding:5px 40px 5px 40px;
background: #E6E6FA;
`;