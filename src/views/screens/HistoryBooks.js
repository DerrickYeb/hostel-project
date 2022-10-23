import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Pressable, ScrollView, Text } from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context'
import BookedItem from '../../components/BookedItem'
import COLORS from '../../consts/colors'
import AsyncStorage from '@react-native-async-storage/async-storage'

const data = [
    {
        id: '1',
        title: 'Unity hall',
        location: 'Main campus',
        image: require('../../assets/house1.jpg'),
        details: `This building is located in the commercial area, withing walking distance of shops...`,
        interiors: [
            require('../../assets/interior1.jpg'),
            require('../../assets/interior2.jpg'),
            require('../../assets/interior3.jpg'),
        ],
        price: "2000",
        rentType: "per year"
    },
    {
        id: '2',
        title: 'Akuafo hall',
        location: 'Main campus',
        image: require('../../assets/house1.jpg'),
        details: `This building is located in the commercial area, withing walking distance of shops...`,
        interiors: [
            require('../../assets/interior1.jpg'),
            require('../../assets/interior2.jpg'),
            require('../../assets/interior3.jpg'),
        ],
        price: "2000",
        rentType: "per year"
    },
]

const HistoryBooks = () => {
    const [bookedData, setBookedData] = useState([]);
    const allBookedData = []

    const getData = async () => {
        const jsonValue = await AsyncStorage.getItem('@bookedHostel')
        allBookedData.push(JSON.parse(jsonValue))
        setBookedData(allBookedData)
        return jsonValue ? JSON.parse(jsonValue) : null;
    }
    //  console.log(JSON.parse(bookedData));
    useEffect(() => {
        getData()
    }, [])

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: 'white'
        }}>
            <Text color={COLORS.dark} style={{
                padding: 10,
            }} fontSize={18} fontWeight="extrabold">Recently Booked Hostels</Text>

            {/* <Button.Group px={2} safeArea={1}>
                <Pressable>
                    <Button  color={'black'} style={styles.pendingStyle}>Pending</Button>
                </Pressable>
                <Button  style={styles.pendingStyle}>Completed</Button>
                <Button  style={styles.pendingStyle}>Cancelled</Button>
            </Button.Group> */}
            <FlatList
                keyExtractor={(club) => '_club'}
                numColumns={1}
                estimatedItemSize={100}
                renderItem={(data) => (
                    <BookedItem data={data.item} />
                )}
                data={bookedData} />
        </SafeAreaView>
    )
}

export default HistoryBooks

const styles = StyleSheet.create({
    pendingStyle: {
        backgroundColor: COLORS.dark,
        borderWidth: 1,
        borderColor: COLORS.dark,
        width: 125,
        color: '#fff'
    },
    CompletedStyle: {
        backgroundColor: COLORS.dark,
        borderWidth: 1,
        borderColor: '',
        width: 125
    },
    onPressedStyle: {
        backgroundColor: COLORS.dark,
        color: '#fff'
    }
})