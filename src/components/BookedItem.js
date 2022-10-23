import { SafeAreaView, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Box, Button, HStack, Image, Modal, Pressable, ScrollView, Text, useToast, VStack } from 'native-base'
import COLORS from '../consts/colors'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AnimatedLottieView from 'lottie-react-native'

const BookedItem = ({ data }) => {
    const toast = useToast()
    const [modalVisible, setModalVisible] = useState(false)
    const[dataFetched,setFetchedData] = useState({})
    console.log("Data",data)

    const getBookedItem = async () => {
        const returnData = await AsyncStorage.getItem('@bookedHostel')
        console.log("Async Storage Data", JSON.parse(returnData))
    }

    const removeBookedItem = async () => {
        await AsyncStorage.removeItem('@bookedHostel')
        setModalVisible(false);
        toast.show({
            title: 'Remove Booked Hostel',
            description: "Booked Hostel was removed from the database",
            color: 'teal.50'
        })
    }
    useEffect(() => {
        getBookedItem()
    }, [])
    return (
        <>
            {
                data?.length > 0 ? (
                    <Pressable>
                        <Box px={2}>
                            <HStack py={2}>
                                <Image source={data?.image} px={5} alt="" borderRadius={10} height={160} width={150} />
                                <VStack safeArea={4} space={4}>
                                    <Text fontSize={20}>{data?.title}</Text>
                                    <Text>{data?.location}</Text>
                                </VStack>
                                <VStack safeArea={4}>
                                    <Text fontWeight={600} fontSize={16}>GHS{data?.price}</Text>
                                    <Text fontWeight={400} fontSize={16}>{data?.rentType}</Text>
                                </VStack>
                            </HStack>
                            <Button.Group px={2} safeArea={1}>
                                <Button color={'black'} onPress={() => {
                                    setModalVisible(!modalVisible)
                                }} style={styles.pendingStyle}>Cancel</Button>
                            </Button.Group>
                        </Box>
                        <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} avoidKeyboard justifyContent="flex-end" bottom="4" size="lg">
                            <Modal.Content>
                                <Modal.CloseButton />
                                <Modal.Header color={'#fff'} background={'#000'}>
                                    <Text color={'white'}>Cancel Booking</Text>
                                </Modal.Header>
                                <Modal.Body>
                                    Are you sure want to cancel your booking?
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button.Group>
                                        <Button pr={6} width={120} background={'dark.100'} onPress={() => {
                                            setModalVisible(false);
                                        }}>
                                            Cancel
                                        </Button>
                                        <Button width={120} background={'dark.100'} onPress={removeBookedItem}>
                                            Continue
                                        </Button>
                                    </Button.Group>
                                </Modal.Footer>
                            </Modal.Content>
                        </Modal>
                    </Pressable>
                ) :
                    <View style={styles.animationContainer}>
                        <AnimatedLottieView
                        
                            autoPlay
                            // ref={animation}
                            style={{
                                width: 500,
                                height: 500,
                                backgroundColor: COLORS.tranparent,
                            }}
                            // Find more Lottie files at https://lottiefiles.com/featured
                            source={require('../assets/animations/empty.json')}
                        />
                        <Text>You haven't booked any hostel yet</Text>
                    </View>
            }

        </>
    )
}

export default BookedItem

const styles = StyleSheet.create({
    pendingStyle: {
        backgroundColor: '#000',
        width: 180,
        color: '#fff'
    },
    animationContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      },
})