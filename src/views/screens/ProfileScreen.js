import { Pressable, SafeAreaView, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar, Badge, Box, Button, Center, Divider, HStack, Modal, ScrollView, Stack, Text, VStack } from 'native-base'
import Icon from 'react-native-vector-icons/AntDesign'
import { AntDesign, Entypo, Feather, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'


const ProfileScreen = () => {
    const navigation = useNavigation()
    const [isCurrentUser,setCurrentUSer] = useState();
    const [showModal, setShowModal] = useState(false);

    const getCurrentUser = async() =>{
        const currentUser = await AsyncStorage.getItem("@current_user");
        setCurrentUSer(JSON.parse(currentUser));
        return currentUser && JSON.parse(currentUser);
    }

    useEffect(()=>{
        getCurrentUser()
    })

    return (
        <ScrollView background={'white'}>
            <SafeAreaView>
                <Box>
                    <VStack py={5}>
                        <Center>
                            <Stack>
                                <Avatar height={120} width={120} source={{}} />
                                <Center>
                                    <Badge endIcon={<Icon name='edit' />} />
                                </Center>
                            </Stack>
                            <Text fontSize={24} fontWeight='extraBlack'>{`${isCurrentUser?.first_name} ${isCurrentUser?.last_name}`}</Text>
                            <Text fontSize={12} fontWeight='extraBlack'>{isCurrentUser?.username}</Text>
                        </Center>
                    </VStack>
                    <Divider />
                    <VStack safeArea={6} space={10}>
                        <Pressable onPress={() => {
                            navigation.navigate("EditProfileScreen");
                        }}>
                            <HStack space={8}>
                                <Icon name='user' size={30} />
                                <Text fontSize={20}>Edit Profile</Text>
                            </HStack>

                        </Pressable>
                        <Pressable onPress={() => {
                            navigation.navigate("UpdateSchoolScreen")
                        }}>
                            <HStack space={8}>
                                <FontAwesome5 name='school' size={30} />
                                <Text fontSize={20}>Change School</Text>
                            </HStack>
                        </Pressable>
                        <Pressable onPress={() =>{
                            setShowModal(true)
                        }}>
                            <HStack space={8}>
                                <Entypo name='remove-user' size={30} />
                                <Text fontSize={20}>Delete Account</Text>
                            </HStack>
                        </Pressable>
                    </VStack>
                </Box>
                <Modal bottom={4} size={'lg'} justifyContent="flex-end" isOpen={showModal} onClose={() => setShowModal(false)} _backdrop={{
                    _dark: {
                        bg: "coolGray.800"
                    },
                    bg: "warmGray.50"
                }}>
                    <Modal.Content maxWidth="350" maxH="212">
                        <Modal.CloseButton />
                        <Modal.Header><Text color={'danger.400'} fontWeight={600} fontSize={20}>Delete Account</Text></Modal.Header>
                        <Modal.Body>
                           Deleting the account will permanently delete the account
                        </Modal.Body>
                        <Modal.Footer>
                            <Button.Group space={2}>
                                <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                                    setShowModal(false);
                                }}>
                                    Cancel
                                </Button>
                                <Button background={'#000'} onPress={() => {
                                    setShowModal(false);
                                }}>
                                    Delete
                                </Button>
                            </Button.Group>
                        </Modal.Footer>
                    </Modal.Content>

                </Modal>
            </SafeAreaView>
        </ScrollView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})