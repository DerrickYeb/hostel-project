import { Dimensions, FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image, ScrollView } from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context'
import { KnustHostels, UGHostels } from '../../consts/houses';
import COLORS from '../../consts/colors';
import { useNavigation } from '@react-navigation/native';


const { width } = Dimensions.get('screen');

const Card = ({ house }) => {
    const navigation = useNavigation()

    return (
        <>
            <Pressable
                activeOpacity={0.8}
                onPress={() => navigation.navigate('DetailsScreen', house)}>
                <View style={styles.card}>
                    {/* House image */}
                    <Image source={house.image} style={styles.cardImage} />
                    <View style={{ marginTop: 10 }}>
                        {/* Title and price container */}
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginTop: 10,
                            }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                                {house.title}
                            </Text>
                            <Text
                                style={{ fontWeight: 'bold', color: COLORS.blue, fontSize: 16 }}>
                                GHS1,500
                            </Text>
                        </View>

                        {/* Location text */}

                        <Text style={{ color: COLORS.grey, fontSize: 14, marginTop: 5 }}>
                            {house.location}
                        </Text>

                        {/* Facilities container */}
                        {/* <View style={{ marginTop: 10, flexDirection: 'row' }}>
              <View style={style.facility}>
                <Icon name="hotel" size={18} />
                <Text style={style.facilityText}>2</Text>
              </View>
              <View style={style.facility}>
                <Icon name="bathtub" size={18} />
                <Text style={style.facilityText}>2</Text>
              </View>
              <View style={style.facility}>
                <Icon name="aspect-ratio" size={18} />
                <Text style={style.facilityText}>100m</Text>
              </View>
            </View> */}
                    </View>
                </View>
            </Pressable>
        </>
    );
};

const OffCampusHostel = () => {
    return (
            <SafeAreaView>
                <FlatList
                    // snapToInterval={width - 20}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingLeft: 20, paddingVertical: 20 }}
                    
                    data={UGHostels}
                    renderItem={({ item }) => <Card house={item} />}
                />
            </SafeAreaView>
    )
}

export default OffCampusHostel

const styles = StyleSheet.create({
    card: {
        height: 250,
        backgroundColor: COLORS.white,
        elevation: 10,
        width: width - 40,
        marginRight: 20,
        padding: 15,
        borderRadius: 20,
        margin: 10,
      },
      cardImage: {
        width: '100%',
        height: 120,
        borderRadius: 15,
      },
})