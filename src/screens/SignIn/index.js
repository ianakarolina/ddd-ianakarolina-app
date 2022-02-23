import React from 'react'
import { 
        Container, 
        Logo, 
        Title,
        SignUpButton,
        TextButton,
        OrText,
        LineView,
        ViewOr
    } from './styles'
import Button from '../../src/components/Button'
import Input from '../../src/components/Input'
import SilverLogo from '../../src/assets/Logo.png'
import {screenHeight, screenWidth} from '../../src/constants/dimensions'
import colors from '../../src/constants/colors'
import GoogleButton from '../../src/components/GoogleButton'
import { AntDesign } from '@expo/vector-icons'; 

const SignIn = ({fontstyle,textdecoration,marginleft,margintop,navigation}) => {
    const navigateToCadastro = () => {
        navigation.navigate('Cadastro')
    }

    const navigateToEsqueciSenha = () => {
        navigation.navigate('EsqueciSenha')
    }

    return (
        <Container>
            <Logo resizeMode='contain' source={SilverLogo}/>
            <Title>Silver Motors</Title>
            <Input width={screenWidth*0.8} placeholder='E-mail' margintop={90}/>
            <Input width={screenWidth*0.8} placeholder='Senha' margintop={15}/>
            <SignUpButton marginleft={150} margintop={-15}>
                <TextButton onPress={navigateToEsqueciSenha} fontstyle={'italic'} textdecoration={'underline'}>Esqueci minha senha</TextButton>
            </SignUpButton>
            <Button text='ENTRAR' width={screenWidth*0.35} height={50} backgroundcolor={'#837F7B'} border={'none'} radius={5} margintop={20}/>
            <OrText> ──────── ou ──────── </OrText>
            <GoogleButton text='GOOGLE' width={screenWidth*0.79} height={35} backgroundcolor={colors.background} border={colors.secundaria} radius={5} margintop={15}/>
            <GoogleButton text='FACEBOOK' width={screenWidth*0.79} height={35} backgroundcolor={colors.background} border={colors.secundaria} radius={5} margintop={15} />
            <SignUpButton  onPress={navigateToCadastro} marginleft={0} margintop={5}>
                <TextButton fontstyle={'normal'} textdecoration={'none'}>Não possui uma conta?</TextButton>
                <TextButton fontstyle={'italic'} textdecoration={'underline'} >Cadastre-se</TextButton>
            </SignUpButton> 
        </Container>
    );
};

export default SignIn;