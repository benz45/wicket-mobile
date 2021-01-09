import React, {useState} from 'react';
import {Text, Checkbox} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import * as Styled from 'root/src/Styles/Screens/Styled_RegisterComplate';

//Redux
import {useSelector} from 'react-redux';

const RegisterComplate = () => {
  const {user} = useSelector((reducer) => reducer.CurrentUserReducer);
  const [isCheckbox, setCheckbox] = useState(false);
  const {navigate} = useNavigation();

  const submit = async () => {
    navigate('Authenticated', {screen: 'Stack_HomeDrawer'});
  };

  return (
    <Styled.MainContainer>
      <Styled.SVG_registerComplate />
      <Styled.HeadText>Register Complate</Styled.HeadText>
      <Styled.SubText>Welcomde to my app Wicket List</Styled.SubText>
      <Styled.ContainerShowDetail>
        {user && user.displayName && user.email ? (
          <Styled.ContainerDetail>
            <Text>Name : {user.displayName}</Text>
            <Text>Email : {user.email}</Text>
          </Styled.ContainerDetail>
        ) : (
          <Styled.ContainerLoading>
            <Text>Loading</Text>
            <Styled.ActivityIndicator size={14} />
          </Styled.ContainerLoading>
        )}
        <Styled.Body>
          Can break usage such as persisting and restoring state. This might
          happen if you passed non serializable values such as function, class
          instances etc. in params. class instances etc. in params
        </Styled.Body>
      </Styled.ContainerShowDetail>
      <Styled.ContainerCheckBox>
        <Checkbox.Android
          status={isCheckbox ? 'checked' : 'unchecked'}
          onPress={() => setCheckbox(!isCheckbox)}
        />
        <Text>Accept terms persisting and restoring state.</Text>
      </Styled.ContainerCheckBox>

      <Styled.Btn
        disabled={!isCheckbox}
        mode="contained"
        icon="check-bold"
        dark={true}
        onPress={() => submit()}>
        Successful
      </Styled.Btn>
    </Styled.MainContainer>
  );
};

export default RegisterComplate;
