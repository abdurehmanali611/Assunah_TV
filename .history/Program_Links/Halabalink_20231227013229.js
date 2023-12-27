import React from "react";
import { View } from "react-native";

const Halabalink = () => {

    return <View>
    <Text style = {{marginVertical: 20,textAlign: 'center', fontSize: 19}}>Halaba language Programs</Text>
    <View>
        <Text style = {{marginVertical: 20,textAlign: 'center', fontSize: 19}}>Education</Text>
        <View>
            <TouchableOpacity
            style = {styles.somaliders}
            onPress={() => Linking.openURL('https://www.youtube.com/watch?v=NRCymX6dl5A&list=PLZaq281_mc40MJ-OfoWgf9LcRycxb8Eye&pp=iAQB')}
            >
                <Text>Ethio Somali Educations</Text>
            </TouchableOpacity>
        </View>
    </View>
    <View>
        <TouchableOpacity
        style = {styles.previoussomali}
        onPress={() => navigation.navigate('Somali')}
        >
            <Text>Previous</Text>
        </TouchableOpacity>
    </View>
</View>

}

export default Halabalink