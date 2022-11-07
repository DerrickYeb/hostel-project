import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView, Text } from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context'
import BookedItem from '../../../components/BookedItem'
import COLORS from '../../../consts/colors'
import AsyncStorage from '@react-native-async-storage/async-storage'

const BookedHostels = () => {
    const [bookedData, setBookedData] = useState([]);
    const [user, setUser] = useState([]);


    const getData = async () => {
        const jsonValue = await AsyncStorage.getItem('@bookedHostel')
            console.log(JSON.parse(jsonValue));
        setBookedData(JSON.parse(jsonValue))
        return jsonValue ? JSON.parse(jsonValue) : null;
    }
    const getUserData = async () => {
        const jsonValue = await AsyncStorage.getItem('@user')
            console.log(JSON.parse(jsonValue));
            setUser(JSON.parse(jsonValue))
        return jsonValue ? JSON.parse(jsonValue) : null;
    }
    useEffect(() => {
        getData()
        getUserData()
    },[])

  return (
    <SafeAreaView style={{
        flex: 1,
        backgroundColor: 'white'
    }}>
        <Text color={COLORS.dark} style={{
            padding: 10,
        }} fontSize={18} fontWeight="extrabold">Recently Booked Hostels</Text>

        <BookedItem data={bookedData} user={user}/>
        
    </SafeAreaView>
  )
}

export default BookedHostels

const styles = StyleSheet.create({})