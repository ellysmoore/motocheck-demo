import { View, Text, StyleSheet, SafeAreaView, StatusBar, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../constants/color'
import { Ionicons } from "@expo/vector-icons";
import { Fonts } from '../constants/font';


const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.MainContainer}>
            <StatusBar barStyle={'dark-content'} />
            <ScrollView scrollEnabled contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
                {/* header  */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => { console.log('clicked'); navigation.toggleDrawer() }}>
                        <Ionicons name={'menu-outline'} size={Fonts.h1} color={Colors.black} />
                    </TouchableOpacity>
                    <Ionicons name={'person-outline'} size={Fonts.p1} color={Colors.black} />
                </View>

                {/* welcome text  */}
                <Text style={styles.welcomeText}>Welcome Back,Imani 👋🏽 </Text>
                <Text style={styles.subText}>It is a long established fact lorem. </Text>

                {/* searcch bar  */}
                <View style={styles.searchBox}>
                    <TextInput placeholder='Search lorem ipsum' style={{ paddingVertical: 15, paddingHorizontal: 26 }} />
                </View>

                {/* recent checklist  */}
                <View>
                    <View style={styles.headerRow}>
                        <Text style={styles.RecentText}>Recent Checklist</Text>
                        <Text style={styles.subRecentText}>View all </Text>
                    </View>
                    <View style={styles.recentBox}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <Text style={{ color: Colors.black, fontSize: Fonts.p1, fontWeight: '400' }}>Mr. Joseph Agunbiade</Text>
                                <Text style={{ color: '#999999', fontSize: Fonts.p4, fontWeight: '400', marginTop: 8 }}>Benz 2014 EClass</Text>
                            </View>
                            <View style={{ backgroundColor: 'rgba(220, 44, 16, 0.06)', height: 22, width: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 2 }}>
                                <Text style={{ color: Colors.red, fontSize: Fonts.p4, fontWeight: '400' }}>Pending</Text>
                            </View>
                        </View>
                        <View style={{ borderWidth: 0.5, borderColor: '#EEEEEE', marginVertical: 18 }} />
                        <View style={{ flexDirection: 'row' }}>
                            <Ionicons name={'time-outline'} size={Fonts.p2} color={'#CCCCCC'} />
                            <Text style={{ color: Colors.black, fontSize: Fonts.p3, fontWeight: '300', paddingLeft: 14 }}>14 July, 4:00pm - 7:00pm</Text>
                        </View>
                    </View>

                    <View style={styles.recentBox}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <Text style={{ color: Colors.black, fontSize: Fonts.p1, fontWeight: '400' }}>Mr. Joseph Agunbiade</Text>
                                <Text style={{ color: '#999999', fontSize: Fonts.p4, fontWeight: '400', marginTop: 8 }}>Benz 2014 EClass</Text>
                            </View>
                            <View style={{ backgroundColor: 'rgba(220, 44, 16, 0.06)', height: 22, width: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 2 }}>
                                <Text style={{ color: Colors.green, fontSize: Fonts.p4, fontWeight: '400' }}>Ready</Text>
                            </View>
                        </View>
                        <View style={{ borderWidth: 0.5, borderColor: '#EEEEEE', marginVertical: 18 }} />
                        <View style={{ flexDirection: 'row' }}>
                            <Ionicons name={'time-outline'} size={Fonts.p2} color={'#CCCCCC'} />
                            <Text style={{ color: Colors.black, fontSize: Fonts.p3, fontWeight: '300', paddingLeft: 14 }}>14 July, 4:00pm - 7:00pm</Text>
                        </View>
                    </View>
                </View>


                {/* services  */}
                <View>
                    <View style={[styles.headerRow]}>
                        <Text style={[styles.RecentText, { fontSize: 20 }]}>Services</Text>
                    </View>
                    <View style={[styles.recentBox, { justifyContent: 'center', alignItems: 'center', paddingVertical: 27, paddingHorizontal: 22 }]}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                            <Ionicons name={'time-outline'} size={Fonts.p2} color={'#CCCCCC'} style={{ justifyContent: 'center', alignSelf: 'center' }} />
                            <View style={{ marginLeft: 24 }}>
                                <Text style={{ color: Colors.black, fontSize: 16, fontWeight: '400' }}>Inspection</Text>
                                <Text style={{ color: '#555555', fontSize: Fonts.p4, fontWeight: '300', textAlign: 'center', marginTop: 10 }}>Contrary to popular belief, Lorem Ipsum dior</Text>
                            </View>
                            <Ionicons name={'arrow-forward-outline'} size={Fonts.p2} color={'#CCCCCC'} style={{ justifyContent: 'center', alignSelf: 'center', marginLeft: 20 }} />
                        </View>
                    </View>

                    <View style={[styles.recentBox, { justifyContent: 'center', alignItems: 'center', paddingVertical: 27, paddingHorizontal: 22 }]}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                            <Ionicons name={'time-outline'} size={Fonts.p2} color={'#CCCCCC'} style={{ justifyContent: 'center', alignSelf: 'center' }} />
                            <View style={{ marginLeft: 24 }}>
                                <Text style={{ color: Colors.black, fontSize: 16, fontWeight: '400' }}>Maintenance</Text>
                                <Text style={{ color: '#555555', fontSize: Fonts.p4, fontWeight: '300', textAlign: 'center',marginTop: 10 }}>Contrary to popular belief, Lorem Ipsum dior</Text>
                            </View>
                            <Ionicons name={'arrow-forward-outline'} size={Fonts.p2} color={'#CCCCCC'} style={{ justifyContent: 'center', alignSelf: 'center', marginLeft: 20 }} />
                        </View>
                    </View>
                </View>



            </ScrollView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    container: {
        flex: 1,
        paddingHorizontal: 24
    },
    header: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'space-between'
    },
    welcomeText: {
        fontSize: Fonts.h1,
        fontWeight: '600',
        color: Colors.black,
        marginTop: 38
    },
    subText: {
        fontSize: Fonts.p2,
        fontWeight: '300',
        color: Colors.duroSG,
        marginTop: 12
    },
    searchBox: {
        backgroundColor: Colors.white,
        width: '100%',
        justifyContent: 'center',
        // alignItems: 'center',
        marginTop: 20,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#EEEEEE'
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
        alignItems: 'center'
    },
    RecentText: {
        fontSize: Fonts.h1,
        fontWeight: '600',
        color: Colors.black,
    },
    subRecentText: {
        fontSize: Fonts.p2,
        fontWeight: '300',
        color: Colors.duroSG,
    },
    recentBox: {
        width: '100%',
        padding: 22,
        backgroundColor: Colors.white,
        borderRadius: 2,
        marginTop: 30
    }
})

export default Home

