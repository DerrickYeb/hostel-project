import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  TextInput,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import COLORS from '../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { KnustHostels, UCCHostels, UGHostels, UPSAHostels } from '../../consts/houses';
import { useNavigation } from '@react-navigation/native';
import { Button, FormControl, HamburgerIcon, Input, Menu, Modal } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AnimatedLottieView from 'lottie-react-native';


const { width } = Dimensions.get('screen');

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedSchool, setSelectedSchool] = useState();
  const [selectedSchoolHostel, setSelectedSchoolHostel] = useState([]);

  // const selectedSchool = route.params;


  const getSelectedSchool = async () => {
    const jsonValue = await AsyncStorage.getItem("@school_Selected");
    console.log(JSON.parse(jsonValue))
    const schoolName = JSON.parse(jsonValue)
    setSelectedSchool(JSON.parse(jsonValue));
    switch (schoolName.School) {
      case "KNUST":
        return setSelectedSchoolHostel(KnustHostels);
      case "UG": return setSelectedSchoolHostel(UGHostels);
      case "UPSA": return setSelectedSchoolHostel(UPSAHostels);
      case "UCC": return setSelectedSchoolHostel(UCCHostels);
      default:
        break;
    }
    console.log('Hostel Selected', selectedSchoolHostel)
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  }

  useEffect(() => {
    getSelectedSchool()
  }, [])



  console.log("School Async", selectedSchool);


  const optionsList = [
    { title: 'Off-Campus Hostels', img: require('../../assets/house1.jpg'), navigatiionUrl: "OffCampusHostel" },
    { title: 'All Campuses hostels', img: require('../../assets/house2.jpg'), navigatiionUrl: "AllCampusScreen" },
  ];
  const categoryList = ['Popular', 'Recommended', 'Nearest'];

  const ListCategories = () => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
    return (
      <View style={style.categoryListContainer}>
        {categoryList.map((category, index) => (
          <Pressable
            key={index}
            onPress={() => setSelectedCategoryIndex(index)}>
            <Text
              style={[
                style.categoryListText,
                index === selectedCategoryIndex && style.activeCategoryListText,
              ]}>
              {category}
            </Text>
          </Pressable>
        ))}
      </View>
    );
  };

  const ListOptions = () => {
    return (
      <View style={style.optionListsContainer}>
        {optionsList.map((option, index) => (
          <Pressable key={index} onPress={() => navigation.navigate(option.navigatiionUrl)}>
            <View style={style.optionsCard} >
              {/* House image */}
              <Image source={option.img} style={style.optionsCardImage} />

              {/* Option title */}
              <Text style={{ marginTop: 10, fontSize: 12, fontWeight: 'bold' }}>
                {option.title}
              </Text>
            </View>
          </Pressable>
        ))}
      </View>
    );
  };
  const Card = ({ house }) => {
    console.log("House", house);
    return (
      <>
        <Pressable
          activeOpacity={0.8}
          onPress={() => navigation.navigate('DetailsScreen', house)}>
          <View style={style.card}>
            {/* House image */}
            <Image source={house.image} style={style.cardImage} />
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
                  {house.price}GHS
                </Text>
              </View>

              {/* Location text */}

              <Text style={{ color: COLORS.grey, fontSize: 14, marginTop: 5 }}>
                {house.location}
              </Text>

              {/* Facilities container */}
              <View style={{ marginTop: 10, flexDirection: 'row' }}>
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
              </View>
            </View>
          </View>
        </Pressable>
      </>
    );
  };
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      {/* Customise status bar */}
      <StatusBar
        translucent={false}
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      {/* Header container */}
      <View style={style.header}>
        <View>
          <Text style={{ color: COLORS.grey }}>Location</Text>
          <Text onPress={() => navigation.navigate('ChooseSchoolScreen')} style={{ color: COLORS.dark, fontSize: 20, fontWeight: 'bold' }}>
            {selectedSchool?.School}
          </Text>
        </View>
        <Image
          style={style.profileImage}
          source={{ uri: selectedSchool?.schoolImage }}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Input and sort button container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}>
          <View style={style.searchInputContainer}>
            <Icon name="search" color={COLORS.grey} size={25} />
            <TextInput placeholder="Search" />
          </View>

          <View style={style.sortBtn}>
            <Menu w="190" trigger={triggerProps => {
              return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                <HamburgerIcon />
              </Pressable>;
            }}>
              <Menu.Item onPress={() => navigation.navigate("RecentBookedScreen")}>Revently Booked</Menu.Item>
              <Menu.Item>Profile</Menu.Item>
              <Menu.Item>Settings</Menu.Item>
            </Menu>
          </View>
        </View>

        {/* Render list options */}
        <ListOptions />

        {/* Render categories */}
        <ListCategories />

        {
          selectedSchoolHostel.length > 0 ?  (
            <FlatList
              snapToInterval={width - 20}
              // showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingLeft: 20, paddingVertical: 20 }}
              // horizontal
              data={selectedSchoolHostel}
              renderItem={({ item }) => <Card house={item} />} />
          ) : <View style={style.animationContainer}>
            <AnimatedLottieView
              autoPlay
              style={{
                width: 500,
                height: 500,
                backgroundColor: COLORS.tranparent,
              }}
              source={require('../../assets/animations/loadingLogo.json')}
            />
          </View>
        }
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  sortBtn: {
    backgroundColor: COLORS.dark,
    height: 50,
    width: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  optionsCard: {
    height: 210,
    width: width / 2 - 30,
    elevation: 15,
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 20,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  optionsCardImage: {
    height: 140,
    borderRadius: 10,
    width: '100%',
  },
  optionListsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  categoryListText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 5,
    color: COLORS.grey,
  },
  activeCategoryListText: {
    color: COLORS.dark,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  categoryListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    paddingHorizontal: 40,
  },
  card: {
    height: 250,
    backgroundColor: COLORS.white,
    elevation: 10,
    width: width - 40,
    marginRight: 20,
    padding: 15,
    margin: 5,
    borderRadius: 20,
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderRadius: 15,
  },
  facility: { flexDirection: 'row', marginRight: 15 },
  facilityText: { marginLeft: 5, color: COLORS.grey },
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
export default HomeScreen;
