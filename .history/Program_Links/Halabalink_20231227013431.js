import React from "react";
import { View } from "react-native";

const Halabalink = () => {

    return <View>
    <Text style = {{marginVertical: 20,textAlign: 'center', fontSize: 19}}>Halaba language Programs</Text>
    <View>
        <Text style = {{marginVertical: 20,textAlign: 'center', fontSize: 19}}>Education</Text>
        <View>
            <TouchableOpacity
            style = {styles.halabaders}
            onPress={() => Linking.openURL('https://www.youtube.com/watch?v=PPQQwckW6Xw&list=PLZaq281_mc40K05Q7emOAJqkZpt8JyHh2&pp=iAQB')}
            >
                <Text>Halabgna Educations</Text>
            </TouchableOpacity>
        </View>
    </View>
    <View>
        <TouchableOpacity
        style = {styles.previoussomali}
        onPress={() => navigation.navigate('Halaba')}
        >
            <Text>Previous</Text>
        </TouchableOpacity>
    </View>
</View>

}

export default Halabalink