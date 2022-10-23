import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import SchoolCard from '../../components/schoolCard'
import { KnustHostels, UCCHostels, UGHostels, UPSAHostels } from '../../consts/houses'

const data = [
  {
    id:1,
    School:'KNUST',
    schoolImage:'https://res.cloudinary.com/derrydev/image/upload/v1666023661/Images/knust_ctcdni.png',
    location:'Kumasi',
    hostels:KnustHostels
  },
  {
    id:2,
    School:'UG',
    schoolImage:'https://res.cloudinary.com/derrydev/image/upload/v1666023665/Images/UG_dbjxkq.png',
    location:'Accra',
    hostels:UGHostels
  },
  {
    id:3,
    School:'UCC',
    schoolImage:'https://res.cloudinary.com/derrydev/image/upload/v1666023663/Images/ucclogo_c5zkfl.png',
    location:'Cape Coast',
    hostels:UCCHostels
  },
  {
    id:4,
    School:'UPSA',
    schoolImage:'https://res.cloudinary.com/derrydev/image/upload/v1666023661/Images/UPSA_xd8iox.jpg',
    location:'Accra-Madina',
    hostels:UPSAHostels
  }
]

const UpdateSchool = () => {
  return (
    <SafeAreaView>
       <StatusBar style='light'/>
            <SafeAreaView> 
            <Text color={'white'} style={{
              padding: 10,
            }} fontSize={18} fontWeight="extrabold">Update  school</Text>
                <FlatList
                    keyExtractor={(club) => '_club' +club.id}
                    numColumns={3}
                    estimatedItemSize={100}
                    renderItem={(data) => (
                         <SchoolCard data={data.item} />
                    )} 
                    data={data}
                    />
            </SafeAreaView>
    </SafeAreaView>
  )
}

export default UpdateSchool

const styles = StyleSheet.create({})