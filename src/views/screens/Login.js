import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Box, Button, Center, Divider, FormControl, Heading, HStack, Input, Stack, useNativeBase } from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Link, useNavigation } from '@react-navigation/native'

const Login = () => {
  const navigate = useNavigation()
  return (
    <SafeAreaView>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Box py={24} px={6}>
        <View alignContent='center'>
          <Center>
            {/* <Image h={40} source={SoccerLoginImage} alt="soccer" shadow={2} size={'xl'} /> */}
            <Heading>Login</Heading>

          </Center>
        </View>
        <Stack space={4}>
          <FormControl isRequired>
            <FormControl.Label color={'#000'} fontWeight={16}>Userame or Email</FormControl.Label>
            <Input borderColor={'#000'} backgroundColor={'#fff'} placeholder="Enter your email address" variant='filled' isRequired keyboardType='email-address' />
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label color={'#000'} fontWeight={16}>Password</FormControl.Label>
            <Input type='password' fontSize={16} borderColor={'#000'} backgroundColor={{ backgroundColor: '#fff' }} placeholder="password" variant='filled' isRequired keyboardType='default' />
          </FormControl>
        </Stack>
        <Button
          colorScheme="primary"
          bg={"#000"}
          my={10}
          onPress={() => {
            navigate.navigate('ChooseSchoolScreen')
          }}

        >
          Login
        </Button>
        <HStack
          space="2"
          mb={{
            base: "6",
            md: "7",
          }}
          alignItems="center"
          justifyContent="center"
        >
          <Divider
            w="30%"
            _light={{
              bg: "coolGray.200",
            }}
            _dark={{
              bg: "coolGray.700",
            }}
          ></Divider>
          <Text
            fontSize="sm"
            fontWeight="medium"
            _light={{
              color: "coolGray.300",
            }}
            _dark={{
              color: "coolGray.500",
            }}
          >
            or
          </Text>
          <Divider
            w="30%"
            _light={{
              bg: "coolGray.200",
            }}
            _dark={{
              bg: "coolGray.700",
            }}
          ></Divider>
        </HStack>
        <HStack
          mb="4"
          space="1"
          alignItems="center"
          justifyContent="center"
          mt={{
            base: "auto",
            md: "8",
          }}
        >
          <Text
            fontSize="sm"
            _light={{
              color: "coolGray.800",
            }}
            _dark={{
              color: "coolGray.400",
            }}
          >
            Already have an account?
          </Text>
          {/* Opening Link Tag navigateTo:"SignIn" */}
          <Link to={'/RegistrationScreen'}
            _text={{
              fontSize: "sm",
              fontWeight: "bold",
              textDecoration: "none",
            }}
            _light={{
              _text: {
                color: "blue",
              },
            }}
            _dark={{
              _text: {
                color: "primary.500",
              },
            }}
            onPress={() => {
              navigate.navigate('RegistrationScreen');
            }}
          >
            Create Account
          </Link>
          {/* Closing Link Tag */}
        </HStack>
      </Box>

    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({})