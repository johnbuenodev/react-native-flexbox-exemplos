import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  return (
    <View style={styles.containerRowStretch}>
      <View style={{width:'100px', height:'50px', backgroundColor: 'green'}}></View>
      <View style={{width:'50px', height:'50px', backgroundColor: 'purple'}}></View>
      <View style={{width:'50px', height:'50px', backgroundColor: 'yellow'}}></View>
    </View>
  );
}

/*

    <View style={styles.containerRowCenter}>
      <View style={{width:'50px', height:'50px', backgroundColor: 'green'}}></View>
      <View style={{width:'50px', height:'50px', backgroundColor: 'purple'}}></View>
      <View style={{width:'50px', height:'50px', backgroundColor: 'yellow'}}></View>
    </View>

    <View style={styles.containerRowStretch}>
      <View style={{width:'100px', height:'50px', backgroundColor: 'green'}}></View>
      <View style={{width:'50px', height:'50px', backgroundColor: 'purple'}}></View>
      <View style={{width:'50px', height:'50px', backgroundColor: 'yellow'}}></View>
    </View>

*/

const styles = StyleSheet.create({
  containerRowSpaceBetween: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row', 
    justifyContent:'space-between'
  },
  containerRowCenter: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  containerRowStretch: {
    flex: 1,
    backgroundColor: '#fff',
    //start center end
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'stretch',
  }
});

