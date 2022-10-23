import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Avatar, Box, Center, VStack } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SchoolCard = ({data}) => {
    const navigate = useNavigation();

    const addSchool = async() =>{
        const jsonValue = JSON.stringify(data)
        console.log("raw data",jsonValue)
       try {
        await AsyncStorage.setItem('@school_Selected',jsonValue)
        navigate.navigate('Main')
       } catch (error) {
        console.log(error)
       }
    }
    // console.log('Team', data)
    return (
        <Pressable onPress={addSchool}>
            <Box key={data.idTeam} py={2} pb={10} pl={5}>
            {/* {
                data?.length ? data.map((team) => ( */}
           <Box px={2} alignSelf="flex-end">
           <VStack space={5} px={4} >
                <Avatar source={{
                    uri: data?.schoolImage
                }} size="lg" background={'transparent'} />
                <Center>
                <Text fontSize={7} lineBreakMode='head' noOfLines={12} color={'black'}>{data?.School}</Text>
                </Center>
            </VStack>
           </Box>
            {/* )) : <></>
            } */}
        </Box>
        </Pressable>
    )
}

export default SchoolCard