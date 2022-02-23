import React from 'react'
import { 
        Container, 
        Title,
        Logo,
        Text,
    } from './styles'

import Button from '../../components/Button'
import Input from '../../components/Input'
import SilverLogo from '../../assets/Logo.png'

import {screenHeight, screenWidth} from '../../constants/dimensions'
import colors from '../../constants/colors'

const ForgotPassword = ({fontsize,fontweight,navigation}) => {

    const navigateToLogin = () => {
        navigation.navigate('SignIn')
    }

    return (
        <Container>
            <Logo resizeMode='contain' source={SilverLogo}/>
            <Text fontsize={17} fontweight={'bold'}>Silver Motors ID</Text>
            <Text fontsize={22} fontweight={'100'}>Esqueci minha senha</Text>
            <Text fontsize={15} fontweight={'100'}>Informe o e-mail cadastrado e um e-mail com as intruções de recuperação será enviado.</Text>
            <Input width={screenWidth*0.85} placeholder='E-mail' margintop={45}/>
            <Button onPress={navigateToLogin} text='Enviar' width={screenWidth*0.67} height={50} backgroundcolor={colors.silverMotors} border={'none'} radius={30} margintop={50} />
        </Container>
    );
};

export default ForgotPassword