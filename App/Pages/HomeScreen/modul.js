import * as React from 'react';
import {
    View,
    Text, 
    SafeAreaView, 
    StyleSheet,
    StatusBar, 
    Image,
    TouchableOpacity
} from 'react-native';

export default HomeScreen = ({navigation}) => {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
                    barStyle="light-content"
                    animated={true}
                    backgroundColor="#ffffff" />

        <View style={styles.content}>
            <Text style={styles.textHeader}>Info</Text>
            <Text style={styles.textBody}>Module Dalam Pengembangan</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')}>
            <Text style={styles.text2}>Ok</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#00000066',
      padding:30,
      justifyContent:'center',
      alignContent:'center',
    },
    content:{
        borderWidth:1,
        borderRadius:10,
        backgroundColor:'#ffffff',
    },
    textHeader:{
        fontSize:18,
        color:'black',
        marginLeft:20,
        marginTop:10
    },
    textBody:{
        textAlign:'center',
        fontSize:16,
        color:'#8A8A8A',
        marginRight:40
    },
    text2:{
        textAlign:'right',
        marginRight:20,
        marginBottom:10,
        fontSize:18
    }
});