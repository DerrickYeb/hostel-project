import { Alert, Box, Button, Center, CloseIcon, Heading, HStack, IconButton, ScrollView, Select, Text, VStack } from "native-base"
import { useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import COLORS from "../../consts/colors"
import Select2 from 'react-native-select-two';
import { useNavigation } from "@react-navigation/native";


const CheckoutScreen = () => {
    const navigation = useNavigation()
    const [selectedValue, setSelectedValue] = useState()
    const [selectedPaymentType, setSelectedPaymentType] = useState('')
    const [showAlert, setShow] = useState(false)

    const mockData = [
        { id: 1, name: 'Mobile Money' },
        { id: 2, name: 'Bank Account' },
    ];
    const mockData2 = [
        { id: 1, name: 'MTN Mobile Money' },
        { id: 2, name: 'Vodafone Cash' },
        { id: 3, name: 'AirtelTigo Cash' },

    ];
    console.log(selectedValue)

    return (
        <ScrollView>
            <SafeAreaView>
                <Box py={8} px={8}>
                    <Heading>Payment Options</Heading>
                    <Box my={5}>
                        <Text my={2}>Payment Mode</Text>
                        {/* <Select placeholder='Choose Payment mode' onValueChange={(itemValue, itemIndex) => {
                            setSelectedValue(itemValue)
                        }}>
                            <Select.Item value="MoMo" label='Mobile Money' />
                            <Select.Item value="bank" label='Bank Account' />
                            <Select.Item value="cheque" label='Cheque Payment' />
                        </Select> */}
                        <Select2
                            isSelectSingle
                            style={{ borderRadius: 5 }}
                            colorTheme={'black'}
                            popupTitle='Select item'
                            title="Select payment type"
                            selectButtonText="Select"
                            cancelButtonText="Cancel"
                            searchPlaceHolderText="Choose payment type"
                            data={mockData}
                            onSelect={(data, value) => {
                                value.map((item) => (
                                    setSelectedValue(item.id)
                                ))
                            }}
                            onRemoveItem={data => {
                                setSelectedValue({ data });
                            }} />
                    </Box>
                    {
                        selectedValue === 1 && (
                            <VStack my={5} safeArea={2} space={4}>
                                <Text>Payment Type</Text>
                                <Select2
                                    isSelectSingle
                                    style={{ borderRadius: 5 }}
                                    colorTheme={'black'}
                                    popupTitle='Select item'
                                    title="Select payment type"
                                    selectButtonText="Select"
                                    cancelButtonText="Cancel"
                                    searchPlaceHolderText="Choose payment type"
                                    data={mockData2}
                                    onSelect={(data, value) => {
                                        value.map((item) => (
                                            setSelectedPaymentType(item.id)
                                        ))
                                    }}
                                    onRemoveItem={data => {
                                        setSelectedPaymentType({ data });
                                    }} />
                            </VStack>
                        )
                    }
                    {
                        selectedValue === 2 && (
                            <VStack space={4}>
                                <Text fontSize={15} fontWeight={'bold'}>Payment Can be made at the following banks:</Text>
                                <Text>Ecobank Ghana Ridge Branch: Account Number: 098340983094830984930</Text>
                                <Text>Ghana Commercial Bank Airpot Branch:Account Number: 09040983094830984930</Text>
                                <Text>Stanbic Bank Airpot Branch:Account Number: 10340983094830984930</Text>
                            </VStack>
                        )
                    }
                    {
                        selectedPaymentType === 1 && (
                            <VStack space={4}>
                                <Text fontSize={15} fontWeight={'bold'}>MTN Mobile Money</Text>
                                <Text>Make payment through 0548388323 using your code as reference ID</Text>
                                <HStack>
                                    <Text>Your code:</Text>
                                    <Text>4322</Text>
                                </HStack>
                            </VStack>

                        )
                    }
                    {
                        selectedPaymentType === 2 && (
                            <VStack space={4}>
                                <Text fontSize={15} fontWeight={'bold'}>Vodafone Cash</Text>
                                <Text>Make payment through 05002566567 using your code as reference ID</Text>
                                <HStack>
                                    <Text>Your code:</Text>
                                    <Text>4322</Text>
                                </HStack>
                            </VStack>

                        )
                    }
                    {
                        selectedPaymentType === 3 && (
                            <VStack space={4}>
                                <Text fontSize={15} fontWeight={'bold'}>AirtelTigo Cash</Text>
                                <Text>Make payment through 02656688776 using your code as reference ID</Text>
                                <HStack>
                                    <Text>Your code:</Text>
                                    <Text>4322</Text>
                                </HStack>
                            </VStack>

                        )
                    }
                </Box>
                {
                    showAlert && (
                        <ActionPopsAlert />
                    )
                }

                {
                    showAlert ? (
                        <Box safeArea={8} py={32}>
                            <Button isDisabled={selectedValue ? false : true} background={COLORS.dark} color={COLORS.light}
                                onPress={() => navigation.navigate("Main")}>Return to Home screen</Button>
                        </Box>
                    ) : <Box safeArea={8} py={32}>
                        <Button isDisabled={selectedValue ? false : true} background={COLORS.dark} color={COLORS.light}
                            onPress={() => setShow(true)}>Confirm Payment Options</Button>
                    </Box>
                }
            </SafeAreaView>
        </ScrollView>
    )
}
const ActionPopsAlert = () => {
    return (
        <Center>
            <VStack space={5} maxW="400">
                <Alert w="100%" status="success">
                    <VStack space={2} flexShrink={1} w="100%">
                        <HStack flexShrink={1} space={1} alignItems="center" justifyContent="space-between">
                            <HStack space={2} flexShrink={1} alignItems="center">
                                <Alert.Icon />
                                <Text fontSize="md" fontWeight="medium" _dark={{
                                    color: "coolGray.800"
                                }}>
                                    Application received!
                                </Text>
                            </HStack>
                            <IconButton variant="unstyled" _focus={{
                                borderWidth: 0
                            }} icon={<CloseIcon size="3" />} _icon={{
                                color: "coolGray.600"
                            }} />
                        </HStack>
                        <Box pl="6" _dark={{
                            _text: {
                                color: "coolGray.600"
                            }
                        }}>
                            Your application has been received. We will review your
                            application and respond within the next 48 hours.
                        </Box>
                    </VStack>
                </Alert>
            </VStack>
        </Center>
    )
}
export default CheckoutScreen