import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("orange");

  const colors = [
    "blue",
    "pink",
    "purple",
    "black",
    "gray",
    "orange",
    "yellow",
    "brown"
  ]

  const myVar = {hello: 2, test: 5, colors: colors, defaultColor: "red"}

  const updateColor = () => {
    if(count < colors.length && count >= 0){
      setColor(colors[count])
    } else if (count < 0){
      setColor("red")
    } else {
      setColor("green")
    }
  }
  const colorFlipper = () => {
    setColor(colors[Math.floor(Math.random() * colors.length)]);

    //Math.round nearest integer
    //Math.floor nearest small number
    //Math.ceil nearest big number
    

    //color === "red" ? setColor("orange") : setColor("red");
  
  }

  const Increment = () => {
    setCount(count + 1)
    updateColor();
    //alert(count);
  }

  const Decrement = () => {
    setCount(count - 1)
    updateColor();
    //alert(count);
  }

  const Reset = () => {
    setCount( 0 )
    updateColor();
    //alert(count);
  }

  
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Color Flipper & Counter</Text>
      <Text style={{
        backgroundColor: color,
        color: "white",
        padding: 20,
      }}>My color will be random. Number:  {count}</Text>
      <Button 
      onPress={colorFlipper}
      style={styles.button} 
      title="Color Flip"
      />
      <Button 
      onPress={Increment}
      style={styles.button} 
      title="Increment"
      />

    <Button 
      onPress={Decrement}
      style={styles.button} 
      title="Decrement"
      />

<Button 
      onPress={Reset}
      style={styles.button} 
      title="Reset"
      />
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    backgroundColor: "blue",
    color: "white",
    fontSize: 20,
    padding: 20,
  },
  button: {
    margin: 10
  }

});
