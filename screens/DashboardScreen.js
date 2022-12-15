import { StyleSheet, Text, View, ImageBackground, Image, SafeAreaView, ScrollView } from 'react-native';

import portfolio from "../data/portfolio.json";
import user_info from "../data/user_info.json";

import image from "../assets/bg.jpg";
import homeIcon from "../assets/home.png";

export default function Dashboard() {

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textHeader}>WELCOME BACK</Text>
                <Text style={styles.textName}>Ivan</Text>
            </View>
            <View style={styles.sectionBody}>
                <Text style={styles.textHeader}>Current Portfolio Value</Text>
                <Text style={styles.numberValue}>$27</Text>
                <Text style={styles.numberChange}>+0.77%</Text>
            </View>
            <View style={styles.sectionAssets}>
            
                
                <Text style={styles.textHeader}>Current Portfolio Assets</Text>
                    {portfolio.map(item => {
                        return (
                            <View style={styles.containerAsset} key={item.id}>
                    
                            <View style={styles.rowSetup}>
                                <Text style={styles.textTicker}>{item.ticker}</Text>
                                <Text style={styles.textTicker}>{item.price}$</Text>
                            </View>
                            <View style={styles.rowSetup}>
                                <Text style={styles.textTickerName}>{item.name}</Text>
                                <Text style={styles.textTicker}>{item.change}%</Text>
                            </View>
                        </View>     
                        )
                    })}
                     
                    
            </View>


           {/*  <View style={styles.sectionAssets}>
                <Text style={styles.textHeader}>Current Portfolio Assets</Text>
                <View style={styles.containerAsset}>
                    
                    <View style={styles.rowSetup}>
                        <Text style={styles.textTicker}>$PINS</Text>
                        <Text style={styles.textTicker}>27.30$</Text>
                    </View>
                    <View style={styles.rowSetup}>
                        <Text style={styles.textTickerName}>Pinterest</Text>
                        <Text style={styles.textTicker}>+1.09%</Text>
                    </View>
                </View>
            </View> */}
            
            <View style={styles.test}>
            <View style={styles.sectionBottomBar}>
                {/* <View style={styles.icon}>
                    <Image
                        style={styles.icon}
                        source={homeIcon}
                    />
                    <Image
                        style={styles.icon}
                        source={homeIcon}
                    />
                    <Image
                        style={styles.icon}
                        source={homeIcon}
                    />
                </View> */}
                <Text style={styles.bottomBarItem}>home</Text>
                <Text style={styles.bottomBarItem}>assets</Text>
                <Text style={styles.bottomBarItem}>settings</Text>
            </View>
            </View>
        </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  
    container: {
        height: '100%',
        width: '100%',
    },
    header: {
        marginTop: 30,
        marginLeft: 15,
    },
    textHeader: {
        fontSize: 30,
        fontWeight: "200",
        color: "white",
    },
    textName: {
        fontSize: 25,
        fontWeight: "300",
        color: "white",
    },
    sectionBody: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
    },
    numberValue: {
        fontSize: 25,
        fontWeight: "300",
        color: "white",
        paddingTop: 10,
    },
    numberChange: {
        fontSize: 25,
        fontWeight: "300",
        color: "#60a26b",
        paddingTop: 10,
    },
    sectionAssets: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
    },
    containerAsset: {
        marginTop: 15,
        borderColor: "black",
        borderWidth: 1,
        flexDirection: "column",
        borderBottomEndRadius: 12,
        borderBottomStartRadius: 12,
        backgroundColor: "transparent",
        shadowColor: '#171717',
        shadowOffset: {width: 2.5, height: 2.5},
        shadowOpacity: 2.5,
        shadowRadius: 2.5,
    },
    rowSetup: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    textTicker: {
        fontSize: 15,
        fontWeight: "300",
        color: "white",
        paddingHorizontal: 15,
    },
    textTickerName: {
        fontSize: 15,
        fontWeight: "200",
        color: "white",
        paddingHorizontal: 15,
    },
    sectionBottomBar: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "50%",
        marginTop: 15,
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 24,
        backgroundColor: "transparent",
    },
    bottomBarItem: {
        color: "white",
        fontWeight: "200",
    },
    test: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: "center",
        paddingBottom: 20,
    },
    icon: {
        width: 25,
        height: 25,
        flexDirection: "row",
    },
    scrollView: {
        marginHorizontal: 20,
      },
});
