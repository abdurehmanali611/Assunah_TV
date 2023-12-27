import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Image } from 'react-native'
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';

const Home = ({navigation}) => {

    var menu_image = <Image 
    source={require('../assets/menu.png')}
    style = {styles.menu}
    />

    const [pages, setPages] = useState(false)

    const pressedin = () => {

        if (menu_image === <Image 
            source={require('../assets/menu.png')}
            style = {styles.menu}
            />){
                menu_image = null
                setPages(!pages)
            }else {
                menu_image = !menu_image
                setPages(!pages)
            }
        
    }

  return (
    <ScrollView>
    <View style = {styles.main}>
    <View style = {styles.topview}>
        <TouchableOpacity 
        onPress={pressedin}>
            {menu_image}
        </TouchableOpacity>
        {pages && (
            <View style = {styles.page}>
                <TouchableOpacity style = {styles.touches}
                onPress={() => setPages(!pages)}>
                    <Image 
                    source={require('../assets/back.png')}
                    style = {styles.menuicons}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('About')}>
                    <Text style = {styles.texts}>About Us</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
                    <Text style = {styles.texts}>Contacts</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Assunah')}>
                    <Text style = {styles.texts}>Assunah</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Kids')}>
                    <Text style = {styles.texts}>Assunah Kids</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Qirat')}>
                    <Text style = {styles.texts}>Assunah qirat center</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Extra')}>
                    <Text style = {styles.texts}>Extra things</Text>
                </TouchableOpacity>
            </View>
        )}
        <Text style = {styles.header}>Assunah TV</Text>
    </View>
    <View style = {styles.body}>
        <View>
        <Text style = {styles.moderate}>The Way of Moderation</Text>
        <Image 
        source={require('../assets/assunah.jpg')}
        style = {styles.main_image}
        />
        <Text style = {styles.downtext}>
            This is Assunah Tv official application that is the moderate that teached by our leader
            prophet mohammod peace be upon him and on the way scholars that follow him in the right 
            way that is islam
        </Text>
        <Text style = {styles.downtext}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur itaque cumque quas tenetur totam neque. Ipsa officia tenetur facere qui soluta quas velit, voluptatum quam similique. Corrupti soluta quis non.
        </Text>
        </View>
     </View>
     </View>
    </ScrollView>
  )
};

const randomRGB = () => {

    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red},${green},${blue})`
}

const styles = StyleSheet.create({

    menuicons: {
        width: 50, 
        height: 50,
        backgroundColor: `rgb(100,250,50)`
    },
    texts: {
        marginLeft: 30,
        marginVertical: 15
    },
    main: {
        marginTop: 30
    },
    icons: {
        width: 50, 
        height: 50,
        marginLeft: 72
    },
    main_image: {
        width: 354, 
        height: 400
    },
    ScrollView: {
       flexGrow: 1
    },
    body: {
        position: 'relative',
        zIndex: 1
    },
    downtext: {
        textAlign: 'center', 
        lineHeight: 19,
        marginTop: 20
    },
    page: {
        alignItems: 'flex-start', 
        justifyContent: 'flex-start', 
        position: 'absolute', 
        zIndex: 2,
        width: 180,
        height: 440
    },
    topview: {
        display: 'flex',
        flexDirection: 'row',
    },
    menu: {
        width: 50,
        height: 50
    },
    header: {
        marginLeft: 85,
        fontSize: 25
    },
    moderate: {
       textAlign: 'center',
       marginVertical: 15,
       fontSize: 23
    },
    globe: {
        width: 50,
        height: 50,
        marginLeft: 55
    }
})
export default Home