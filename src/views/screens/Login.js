import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Box, Button, Center, Divider, FormControl, Heading, HStack, Input, Stack, useNativeBase } from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Link, useNavigation } from '@react-navigation/native'
import { Controller, useForm } from 'react-hook-form'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = () => {
  const navigate = useNavigation()
  const { control, handleSubmit, formState: { errors } } = useForm()
  const [user, setUser] = useState([]);
const[isLoadibg,setIsLoading]=useState(false)

  const getUserData = async () => {
    const jsonValue = await AsyncStorage.getItem('@user')
    console.log(JSON.parse(jsonValue));
    setUser(JSON.parse(jsonValue))
    return jsonValue ? JSON.parse(jsonValue) : null;
  }

  const adduser = async(data) =>{
setIsLoading(true)
    console.log(data)
    if(data.emaiil === user.emaiil && data.password === user.password){
      alert("Welcome back " + user.fullName)
      setIsLoading(false)
      navigate.navigate(user.userType === 'admin' ? "AdminScreen" : 'ChooseSchoolScreen')
    }
    else{
      alert("User not found")
      setIsLoading(false)
    }
  }
   

  useEffect(() => {
    getUserData()
  }, [])

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
            <FormControl.Label color={'#000'} fontWeight={16}>Username or Email</FormControl.Label>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  borderColor={'#000'}
                  backgroundColor={{ backgroundColor: '#fff' }}
                  placeholder="Enter your email address"
                  variant='filled'
                  isRequired
                  keyboardType='default' />
              )}
              name="email" />
                      </FormControl>
          <FormControl isRequired>
            <FormControl.Label color={'#000'} fontWeight={16}>Password</FormControl.Label>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  borderColor={'#000'}
                  backgroundColor={{ backgroundColor: '#fff' }}
                  placeholder="Enter your password"
                  variant='filled'
                  isRequired
                  keyboardType='default' />
              )}
              name="password" />
          </FormControl>
        </Stack>
        <Button
          colorScheme="primary"
          bg={"#000"}
          my={10}
          isLoading={isLoadibg}
          isLoadingText="Loading... Please wait..."
          onPress={handleSubmit(adduser)}

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