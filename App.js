import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const CoverPage = () => {
  return (
    <View style={styles.container}>
      <Image

      
              source={require("../assets/icons/Logo.png")}
              style={{ width: 200, height: 200, marginBottom: 20 }}
            />
             <Image
              source={require("../assets/images/image.Png")}
              style={{ width: 200, height: 200}}
            />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});

export default CoverPage;
