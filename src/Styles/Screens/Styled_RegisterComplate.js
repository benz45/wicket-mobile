import {View} from 'react-native';
import {
  Title,
  Text,
  ActivityIndicator as ActivityIndicatorPaper,
} from 'react-native-paper';
import styled from 'styled-components';
import SVG from 'root/assets/unDraw_register_4.svg';
import Button from 'root/src/Components/CustomButton';

export const MainContainer = styled(View)`
  align-items: center;
`;

export const SVG_registerComplate = styled(SVG).attrs({
  width: 220,
  height: 140,
})`
  align-self: center;
  margin: 14px 0px;
`;

export const HeadText = styled(Title)`
  margin: 6px 0px;
  font-weight: 600;
  font-size: 22px;
`;

export const SubText = styled(Text)``;

export const ContainerShowDetail = styled(View)``;

export const ContainerDetail = styled(View)`
  margin: 18px 0px 8px 0px;
`;

export const ContainerLoading = styled(View)`
  flex-direction: row;
  align-items: center;
  padding: 12px 0px;
`;

export const ActivityIndicator = styled(ActivityIndicatorPaper)`
  padding-left: 10px;
`;

export const Body = styled(Text)`
  margin: 16px 0px;
`;

export const ContainerCheckBox = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const Btn = styled(Button)`
  margin: 8px 0px;
`;
