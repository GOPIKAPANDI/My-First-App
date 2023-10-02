import React ,{useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('Style Test')  
  const onClickHandler = () => { 
    setName('Style Test is Done!')   
  }
  return (
    <View style={styles.body}> 
      <View style={styles.row}>  
        <View style={styles.view1}>
          <Text style={styles.text}>1</Text>  
        </View>
        <View style={styles.view2}>
          <Text style={styles.text}>2</Text>  
        </View>
        <View style={styles.view3}>
          <Text style={styles.text}>3</Text>   
        </View>
      </View>
      <View style={styles.view4}>
        <Text style={styles.text}>4</Text>  
      </View>
      <View style={styles.view5}>
        <Text style={styles.text}>5</Text>  
      </View>
      <View style={styles.bigrow}>  
        <View style={styles.view6}>
          <Text style={styles.text}>6</Text>  
        </View>
        <View style={styles.view7}>
          <Text style={styles.text}>7</Text>  
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body :{
    flex: 1,
    flexDirection: 'column',
    backgroundColor : '#ffffff', 
  },
  row: {
    flexDirection: 'row', 
    backgroundColor: '#0000ff',   
    alignItems: 'flex-start',  
    justifyContent: 'center',  
  },
  view1:{
    flex: 1,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  view2:{
    flex: 2, 
    backgroundColor: '#ff00ff',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  view3:{
    flex: 3, 
    backgroundColor: '#ffff00', 
    alignItems: 'center',
    justifyContent: 'center', 
  },
  view4:{
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  view5:{
    backgroundColor: '#7fff00',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  bigrow: {
    flex: 1,
    flexDirection: 'row',  
    alignItems: 'stretch',  
    justifyContent: 'center',  
    backgroundColor : '#ffffff',
  },
  view6:{
    flex: 1,
    backgroundColor: '#ffffff', 
    alignItems: 'center',
    justifyContent: 'center', 
  },
  view7:{
    flex: 1,
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  text: {
    color: '#000000',
    fontSize: 40, 
    fontStyle:'italic',
    margin: 10,  
  },
});

export default App;