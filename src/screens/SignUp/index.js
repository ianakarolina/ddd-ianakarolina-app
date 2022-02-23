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

import {screenHeight, screenWidth} from '../../src/constants/dimensions'
import colors from '../../src/constants/colors'

const SignUp = ({fontsize,fontweight,navigation}) => {
    const navigateToLogin = () => {
        navigation.navigate('Login')
    }

    return (
        <Container> 
            <Logo resizeMode='contain' source={SilverLogo}/>
            <Text fontsize={17} fontweight={'bold'}>Silver Motors ID</Text>
            <Text fontsize={28} fontweight={'100'}>Registrar</Text>
            <Text fontsize={15} fontweight={'100'}>Crie sua nova conta Silver Motors</Text>
            <Input width={screenWidth*0.8} placeholder='E-mail*' margintop={30}/>
            <Input width={screenWidth*0.8} placeholder='Senha*' margintop={13}/>
            <Input width={screenWidth*0.8} placeholder='Repetir Senha*' margintop={13}/>
            <Input width={screenWidth*0.8} placeholder='CPF*' margintop={13}/>
            <Input width={screenWidth*0.8} placeholder='Endereço*' margintop={13}/>
            <Button onPress={navigateToLogin} text='Registrar-se' width={screenWidth*0.67} height={50} backgroundcolor={colors.silverMotors} border={'none'} radius={30} margintop={50} />
        </Container>

    );
};

export default SignUp