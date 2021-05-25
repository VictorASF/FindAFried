import styled from 'styled-components/native';


export const ContainerBox = styled.TouchableOpacity`
  flex-direction:row;
  align-items:center;
  justify-content:flex-start;
  border: 1px solid red;
  width: 100%;
  height:220px;
  margin-top:6%;
  border-radius:50px;
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
