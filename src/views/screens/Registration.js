import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Box, Button, Center, Divider, FormControl, Heading, HStack, Input, KeyboardAvoidingView, ScrollView, Select, Stack } from 'native-base'
import { Link, useNavigation } from '@react-navigation/native'

const Registration = () => {
    const navigate = useNavigation()
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
                            <Input borderColor={'#000'} backgroundColor={{ backgroundColor: '#fff' }} placeholder="Enter your email address" variant='filled' isRequired keyboardType='email-address' />
                        </FormControl>
                        <FormControl isRequired>
                            <FormControl.Label color={'#000'} fontWeight={16}>Email Address</FormControl.Label>
                            <Input borderColor={'#000'} backgroundColor={{ backgroundColor: '#fff' }} placeholder="Enter your email address" variant='filled' isRequired keyboardType='email-address' />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Phone Number</FormControl.Label>
                            <Input borderColor={'#000'} backgroundColor={{ backgroundColor: '#fff' }} placeholder="Enter your phone number" variant='filled' _focus={{backgroundColor:'#fff'}} keyboardType='phone-pad' />
                        </FormControl>
                        <FormControl isRequired>
                            <FormControl.Label color={'#000'} fontWeight={16}>User Type</FormControl.Label>
                            <Select borderColor={'#000'} backgroundColor={{ backgroundColor: '#fff' }}>
                                <option>Student</option>
                            </Select>
                        </FormControl>
                        {/* <Text>NB: Property owner will be verified</Text> */}
                        <FormControl isRequired>
                            <FormControl.Label>Password</FormControl.Label>
                            <Input borderColor={'#000'} backgroundColor={{ backgroundColor: '#fff' }} placeholder="Password" type='password' _focus={{backgroundColor:'#fff'}} isRequired variant='filled' />
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
                    onPress={() => {
                        navigate.navigate('ChooseSchoolScreen')
                    }}

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