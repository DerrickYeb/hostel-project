import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Box, Button, Center, Divider, FormControl, Heading, HStack, Input, KeyboardAvoidingView, ScrollView, Select, Stack } from 'native-base'
import { Link, useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Controller, useForm } from 'react-hook-form'

const Registration = () => {
    const navigate = useNavigation()
    const { control, handleSubmit, formState: { errors } } = useForm()


    const [user,setUser] = useState({
        fullName:'',
        userType:'',
        email:'',
        phoneNumber:'',
        password:'',

    })

    const adduser = async(data) =>{

        console.log(data)
        await AsyncStorage.setItem("@user", JSON.stringify(data)).then(()=>{
            alert(`Welcome on board ${data.fullName}`)
            navigate.navigate(data.userType === 'admin' ? "AdminScreen" : 'ChooseSchoolScreen')
        }).catch((error)=>{
            alert("an error occurred while creating an account. Try again later")
            console.error(error);
        })
    }
    console.log(user)

    return (
        <ScrollView>
            <SafeAreaView>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="dark-content"
            />
            <Box py={24} px={6}>
                {/* <Box mt={20}> */}
                <View alignContent='center'>
                    <Center>
                        {/* <Image h={40} source={SoccerLoginImage} alt="soccer" shadow={2} size={'xl'} /> */}
                        <Heading>Create an Account</Heading>
                        
                    </Center>
                </View>
                {/* </Box> */}
                <KeyboardAvoidingView>
                    <Stack space={4}>
                    <FormControl isRequired>
                            <FormControl.Label color={'#000'} fontWeight={16}>Full Name</FormControl.Label>
                           <Controller 
                           control={control}
                           render={({field:{onChange,onBlur,value}})=>(
                            <Input 
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                             borderColor={'#000'} 
                            backgroundColor={{ backgroundColor: '#fff' }} 
                            placeholder="Enter your name" 
                            variant='filled' 
                            isRequired 
                            keyboardType='default' />
                           )}
                           name="fullName"
                           />
                        </FormControl>
                        <FormControl isRequired>
                            <FormControl.Label color={'#000'} fontWeight={16}>Email Address</FormControl.Label>
                            <Controller 
                           control={control}
                           render={({field:{onChange,onBlur,value}})=>(
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
                           name="email"/>
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Phone Number</FormControl.Label>
                            <Controller 
                           control={control}
                           render={({field:{onChange,onBlur,value}})=>(
                            <Input 
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                             borderColor={'#000'} 
                            backgroundColor={{ backgroundColor: '#fff' }} 
                            placeholder="Enter your phone number" 
                            variant='filled' 
                            isRequired 
                            keyboardType='phone-pad' />
                           )}
                           name="phoneNumber"/>
                        </FormControl>
                        <FormControl isRequired>
                            <FormControl.Label color={'#000'} fontWeight={16}>User Type</FormControl.Label>
                            <Controller
                            control={control}
                            render={({field:{onChange,onBlur,value}})=>(
                                <Select placeholder='Choose user type' onValueChange={onChange} selectedValue={value} borderColor={'#000'} backgroundColor={{ backgroundColor: '#fff' }}>
                                    <Select.Item value={'student'} label="Student"/>
                                    <Select.Item value={'admin'} label="Land Lord"/>
                                </Select>
                            )} 
                            name="userType"
                            />
                        </FormControl>
                        {/* <Text>NB: Property owner will be verified</Text> */}
                        <FormControl isRequired>
                            <FormControl.Label>Password</FormControl.Label>
                            <Controller 
                           control={control}
                           render={({field:{onChange,onBlur,value}})=>(
                            <Input 
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            type="password"
                             borderColor={'#000'} 
                            backgroundColor={{ backgroundColor: '#fff' }} 
                            placeholder="Enter your password" 
                            variant='filled' 
                            isRequired 
                            keyboardType='default' />
                           )}
                           name="password"/>
                        </FormControl>
                        <FormControl isRequired>
                            <FormControl.Label>Confirm Password</FormControl.Label>
                            <Input passwordRules='required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8' borderColor={'#000'} backgroundColor={{ backgroundColor: '#fff' }} placeholder="Confirm Password" _focus={{backgroundColor:'#fff'}} type='password' isRequired variant='filled' />
                        </FormControl>
                    </Stack>
                <Button
                    colorScheme="primary"
                    bg={"#000"}
                    my={10}
                    onPress={handleSubmit(adduser)}

                >
                    Register
                </Button>
                {/* <Divider /> */}
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
                    <Link to={'/LoginScreen'}
                        _text={{
                            fontSize: "sm",
                            fontWeight: "bold",
                            textDecoration: "none",
                        }}
                        _light={{
                            _text: {
                                color: "#000",
                            },
                        }}
                        _dark={{
                            _text: {
                                color: "primary.500",
                            },
                        }}
                        onPress={() => {
                            navigate.navigate('LoginScreen');
                        }}
                    >
                        Sign in
                    </Link>
                    {/* Closing Link Tag */}
                </HStack>
                </KeyboardAvoidingView>
            </Box>

        </SafeAreaView>
        </ScrollView>
    )
}

export default Registration

const styles = StyleSheet.create({})