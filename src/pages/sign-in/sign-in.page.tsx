import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';

import {
  Container,
  InsideContainer,
  StyledTextInput,
  Title,
  Header,
  BottomFruits,
} from './sing-in.styles';
import * as Animatable from 'react-native-animatable';
import { Formik } from 'formik';
import SignInSchema from './sign-in.schema';
import http from '../../core/http/axios.config';
import { useUser } from '../../core/contexts/user.context';
import { useNavigation } from '@react-navigation/native';
const SignIn: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { setToken, setUser } = useUser();
  const navigation = useNavigation();

  const onSubmit = (values: any) => {
    http.post('signin', values).then(res => {
      const { user, accessToken } = res.data;
      setToken(accessToken);
      setUser(user);
      navigation.navigate('home');
    });
  };

  return (
    <Container>
      <InsideContainer>
        <Header>
          <Title useNativeDriver animation="fadeInLeft">
            Bem vindo ao
          </Title>
          <Animatable.Image
            source={require('../../assets/frwk.png')}
            useNativeDriver
            delay={500}
            animation="fadeInLeft"
          />
          <Title delay={1000} useNativeDriver animation="fadeInLeft">
            Fruits
          </Title>
        </Header>
        <Formik
          initialValues={{ email: 'admin@admin.com', password: 'admin' }}
          validationSchema={SignInSchema}
          onSubmit={onSubmit}>
          {({ handleSubmit }) => (
            <Animatable.View animation="fadeInUp" useNativeDriver delay={1500}>
              <StyledTextInput label="Email" name="email" />
              <StyledTextInput
                label="Senha"
                name="password"
                secureTextEntry={!showPassword}
                right={
                  <TextInput.Icon
                    onPress={() => setShowPassword(!showPassword)}
                    name={showPassword ? 'eye-off' : 'eye'}
                  />
                }
              />
              <Button onPress={handleSubmit} mode="contained">
                Entrar
              </Button>
            </Animatable.View>
          )}
        </Formik>
      </InsideContainer>
      <BottomFruits
        useNativeDriver
        delay={1700}
        animation="fadeInDown"
        source={require('../../assets/fruitsbg.png')}
        resizeMode="contain"
      />
    </Container>
  );
};

export default SignIn;
