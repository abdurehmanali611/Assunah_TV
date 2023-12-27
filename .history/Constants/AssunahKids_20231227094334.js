import { View, Text, Linking } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ScrollView } from 'react-native'
import { StyleSheet } from 'react-native'

const AssunahKids = ({navigation}) => {
  return (
    <ScrollView>
      <Text style = {{marginVertical: 20, textAlign: 'center', fontSize: 19}}>Assunah Kids program schedules</Text>
      <View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity 
          onPress={() => Linking.openURL('https://www.youtube.com/watch?v=D_4lOten7H8&list=PLwZxGSijka5RAakdQyfc_x205aIEsbtsq&pp=iAQB')}
          style = {styles.kidstouch}
          >
            <Text>Story</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => Linking.openURL('https://www.youtube.com/watch?v=-eGR3KQ869k&list=PLwZxGSijka5STt32aVaIy35wZrPHKprG3&pp=iAQB')}
          style = {styles.kidstouch}
          >
            <Text>Animal's world</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity
          onPress={() => Linking.openURL('https://www.youtube.com/watch?v=5r0eGQfyS1o&list=PLwZxGSijka5TuLfYh7oZ7-CMzBSn8bfS0&pp=iAQB')}
          style = {styles.kidstouch}
          >
            <Text>Animation</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => Linking.openURL('https://www.youtube.com/watch?v=paDs95QFWhw&list=PLwZxGSijka5QA_4jSG70H8SJtClgzq-pv&pp=iAQB')}
          style = {styles.kidstouch}
          >
            <Text>Hand craft</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity
          onPress={() => Linking.openURL('https://www.youtube.com/watch?v=Ptq-9OnDHZY&list=PLwZxGSijka5Sl72aq7F3VRysileObliA4&pp=iAQB')}
          style = {styles.kidstouch}
          >
            <Text>our time</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => Linking.openURL('https://www.youtube.com/watch?v=6YVCO5H5qZI&list=PLwZxGSijka5SjBsdfZFrFU-j1XymqAAx6&pp=iAQB')}
          style = {styles.kidstouch}
          >
            <Text>science's world</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity
          onPress={() => Linking.openURL('https://www.youtube.com/watch?v=b4I0KE8151U&list=PLwZxGSijka5TzY73rzfj9J8d5E7ntAikB&pp=iAQB')}
          style = {styles.kidstouch}
          >
            <Text>quran's story by Animation</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => Linking.openURL('https://www.youtube.com/watch?v=BD7jfUSsAXY&list=PLwZxGSijka5TETQwMHC96KSFqrPavHe80&pp=iAQB')}
          style = {styles.kidstouch}
          >
            <Text>Alif</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity
          onPress={() => Linking.openURL('https://www.youtube.com/watch?v=DY9QmxU45fw&list=PLwZxGSijka5SBHfzoQ_dAQGxTLrypnsVb&pp=iAQB')}
          style = {styles.kidstouch}
          >
            <Text>Education</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => Linking.openURL('https://www.youtube.com/watch?v=hb2jCYhWdKU&list=PLwZxGSijka5R3AhwhVWYUdUpZP5U2fGAb&pp=iAQB')}
          style = {styles.kidstouch}
          >
            <Text>Drawing</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity
          onPress={() => Linking.openURL('https://www.youtube.com/watch?v=j6TmO2XfXUg&list=PLwZxGSijka5SJGboXzw91vSEYAPHQab_e&pp=iAQB')}
          style = {styles.kidstouch}
          >
            <Text>Promotion</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => Linking.openURL('https://www.youtube.com/watch?v=EaK7vNC7l6w&list=PLwZxGSijka5RjHvbLGWwn2YU1k-PzrK9Z&pp=iAQB')}
          style = {styles.kidstouch}
          >
            <Text>shorts</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity
          onPress={() => Linking.openURL('https://www.youtube.com/watch?v=EaK7vNC7l6w&list=PLwZxGSijka5RPBODqep1Y4GDfvpIZ9scg&pp=iAQB')}
          style = {styles.kidstouch}
          >
            <Text>shorts</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => Linking.openURL('https://www.youtube.com/watch?v=HCHnZAOSFlU&list=PLwZxGSijka5TA07LkZtgrPfHfm_XANb_H&pp=iAQB')}
          style = {styles.kidstouch}
          >
            <Text>Mewlid</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity
          onPress={() => Linking.openURL('https://www.youtube.com/watch?v=5GmVvXsmdSk&list=PLwZxGSijka5RvEUZVL9Y4Ok4EbN1-jbM5&pp=iAQB')}
          style = {styles.kidstouch}
          >
            <Text>Arafa</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => Linking.openURL('https://www.youtube.com/watch?v=zyzMs6IRWXw&list=PLwZxGSijka5QVX36ffqIsnx84yEFGAPjJ&pp=iAQB')}
          style = {styles.kidstouch}
          >
            <Text>Let's learn</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity
          onPress={() => Linking.openURL('https://www.youtube.com/watch?v=QzfaKpfYYcc&list=PLwZxGSijka5QuaqSej28JoEFxfXdhWvzL&pp=iAQB')}
          style = {styles.kidstouch}
          >
            <Text>Food by kids</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => Linking.openURL('https://www.youtube.com/watch?v=3IKVc7HwFkM&list=PLwZxGSijka5Re5gaeK6zv_A-zg7xVCtZN&pp=iAQB')}
          style = {styles.kidstouch}
          >
            <Text>Drawing</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity
          onPress={() => Linking.openURL('https://www.youtube.com/watch?v=a7L8v6iGWlo&list=PLwZxGSijka5QudFni-QEJwOEWvSjM7b8K&pp=iAQB')}
          style = {styles.kidstouch}
          >
            <Text>words by languages</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => Linking.openURL('https://www.youtube.com/watch?v=lduE0PgMyaA&list=PLwZxGSijka5TeH__ulpxtIkkY0uPUoWXk&pp=iAQB')}
          style = {styles.kidstouch}
          >
            <Text>Do don't Do by Imran</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity
          onPress={() => Linking.openURL('https://www.youtube.com/watch?v=5T-V9MO0olQ&list=PLwZxGSijka5REQ3mBiDzMD-NKczZ00sc8&pp=iAQB')}
          style = {styles.kidstouch}
          >
            <Text>Playing's before</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => Linking.openURL('https://www.youtube.com/watch?v=Gfy3mQykAMs&list=PLwZxGSijka5TJNHbVvkEG6jlYpG3AfiHm&pp=iAQB')}
          style = {styles.kidstouch}
          >
            <Text>Knowing the holy's</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity
          onPress={() => Linking.openURL('https://www.youtube.com/watch?v=j5MYcP8Wgb8&list=PLwZxGSijka5SVzcWaB6IUlRbm9-maNl9g&pp=iAQB')}
          style = {styles.kidstouch}
          >
            <Text>In our house</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => Linking.openURL('https://www.youtube.com/watch?v=kBEvZgwCxko&list=PLwZxGSijka5TKQVQ9hgV9zVUEZsAcPHjO&pp=iAQB')}
          style = {styles.kidstouch}
          >
            <Text>Let's know Arabic</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity
          onPress={() => Linking.openURL('https://www.youtube.com/watch?v=UnBxzw08jNU&list=PLwZxGSijka5StyoRjPZi8tej9EmU58Zhk&pp=iAQB')}
          style = {styles.kidstouch}
          >
            <Text>Remedan holy month</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => Linking.openURL('https://www.youtube.com/watch?v=SqXU6eYuZqI&list=PLwZxGSijka5Rp82Lmg07cJy4Xvpbx_OCA&pp=iAQB')}
          style = {styles.kidstouch}
          >
            <Text>Quran reciting</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity
          onPress={() => Linking.openURL('https://www.youtube.com/watch?v=5my5aBqZqzg&list=PLwZxGSijka5TDhHYBDDj2Go1_N43UYY2p&pp=iAQB')}
          style = {styles.kidstouch}
          >
            <Text>Learnable Neshidas</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => Linking.openURL('https://www.youtube.com/watch?v=BHN99GpAFaQ&list=PLwZxGSijka5SZgTuUY5KLclCNraFwqb7I&pp=iAQB')}
          style = {styles.kidstouch}
          >
            <Text>special question and answer</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity
          onPress={() => Linking.openURL('https://www.youtube.com/watch?v=JJcM8c27790&list=PLwZxGSijka5SMsQ9qvxmompJ7ltxJqZws&pp=iAQB')}
          style = {styles.kidstouch}
          >
            <Text>Azkar</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => Linking.openURL('https://www.youtube.com/watch?v=5Cq_53riXNg&list=PLwZxGSijka5RVf4KKhtGb-8IxutkK4vW_&pp=iAQB')}
          style = {styles.kidstouch}
          >
            <Text>kids Example</Text>
          </TouchableOpacity>
        </View>
        <View style = {{alignItems: 'center'}}>
          <TouchableOpacity
          onPress={() => Linking.openURL('https://www.youtube.com/watch?v=XoJMO3Btmcw&list=PLwZxGSijka5R4C0pNAjn_mpcKzgmwXKQR&pp=iAQB')}
          style = {styles.kidstouch}
          >
            <Text>Neshidas</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style = {styles.previoushome}
          >
            <Text>Previous</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const randomRGB = () => {

  const red = Math.floor(Math.random() *256)
  const green = Math.floor(Math.random() *256)
  const blue = Math.floor(Math.random() *256)

  return `rgb(${red},${green},${blue})`
}

const styles = StyleSheet.create ({
     kidstouch: {
      marginVertical: 20,
      backgroundColor: randomRGB(),
      width: 170,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 10,
      borderTopRightRadius: 30,
      borderBottomLeftRadius: 30
     },
     previoushome: {
      marginVertical: 20,
      backgroundColor: randomRGB(),
      width: 160,
      height: 70,
      alignItems: 'center',
      justifyContent: 'center',
      borderTopStartRadius: 30,
      borderBottomStartRadius: 30
     }
})

export default AssunahKids