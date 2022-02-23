import React from 'react'
import { 
        Container, 
        Title,
        Logo,
        Text,
    } from './styles'

import Button from '../../src/components/Button'
import Input from '../../src/components/Input'
import SilverLogo from '../../src/assets/Logo.png'
import Icon from 'react-native-vector-icons/AntDesign'

import {screenHeight, screenWidth} from '../../src/constants/dimensions'
import colors from '../../src/constants/colors'

const ForgotPassword = ({fontsize,fontweight,navigation}) => {

    const navigateToLogin = () => {
        navigation.navigate('Login')
    }

    return (
        <Container>
            <Icon name='arrowleft' size={25} color={colors.secundaria}/>
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