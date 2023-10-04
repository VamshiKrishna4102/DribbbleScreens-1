import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const DummyScreen = () => {
  return (
    <View style={styles.con}>
      <View style={styles.standby_main}>
        <Text style={styles.standby_text}>Standby Mode</Text>
      </View>
      <View style={styles.layer} />
      <View style={styles.layer2} />
      <View style={styles.layer3} />
      <View style={styles.layer4} />
    </View>
  );
};

export default DummyScreen;

const styles = StyleSheet.create({
  con: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  standby_main: {
    backgroundColor: 'white',
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: 'black',
    zIndex: 2,
  },
  standby_text: {
    zIndex: 1,
  },
  layer: {
    backgroundColor: 'rgba(255,255,255,0.4)',
    width: 220,
    height: 220,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  layer2: {
    backgroundColor: 'rgba(255,255,255,0.4)',
    width: 220,
    height: 220,
    borderRadius: 150,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  layer3: {
    backgroundColor: 'rgba(255,255,255,0.4)',
    width: 240,
    height: 240,
    borderRadius: 150,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  layer4: {
    backgroundColor: 'rgba(255,255,255,0.4)',
    width: 260,
    height: 260,
    borderRadius: 150,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
});
