import styled from 'styled-components/native';


export const ContainerBox = styled.View`
  flex-direction:row;
  align-items:center;
  justify-content:flex-start;
  width: 100%;
  height:220px;
  margin-top:6%;
  border-radius:25px;
  background:#E6E6FA;
`;

export const ContainerFoto = styled.View`
    align-items:center;
    justify-content:center;
    width:50%;
    height:100%;
`;

export const FotoDog = styled.Image`
    background: black;
    padding:20px;
`;

export const ContainerInfos = styled.View`
    width:50%;
    height:100%;
    align-items:center;
    justify-content:flex-start;
    
`;

export const ContainerInter = styled.View`
    justify-content: center;
    align-items:flex-start;
`;

export const TextBasic = styled.Text`
    padding:5px 5px 5px 0px;
    font-size:25px;
`;

export const Nome = styled.Text`
    padding:5px;
    font-size:16px;
`;

export const Idade = styled.Text`
    padding:5px;
    font-size:16px;
`;

export const SaibaMais = styled.TouchableOpacity`
    margin-top:20%;
    border-radius:25px;
    padding:2px 12px 2px 12px;
    background: purple;
`;

export const SaibaMaisTexto = styled.Text`
    color: white;
    font-weight:bold;
`;