import * as yup from 'yup';

const SignInSchema = yup.object().shape({
  email: yup.string().required('Usuário é obrigatório').email('Email inválido'),
  password: yup.string().required('Senha é obrigatória'),
});
export default SignInSchema;
