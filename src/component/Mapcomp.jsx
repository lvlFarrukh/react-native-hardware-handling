import * as React from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Location from 'expo-location';


export default function Mapcomp() {

    const [location, setLocation] = React.useState(null);
    location && console.log(Location.reverseGeocodeAsync({
        latitude: location ? location.coords.latitude : 24.871202,
            longitude: location ? location.coords.longitude : 67.1844088,
    }))

    React.useEffect(() => {
        (async () => {
          let { status } = await Location.requestPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
        })();
      }, []);
    

  return (
    <View style={styles.container}>
      <MapView style={styles.map}
        initialRegion={{
            latitude: 24.871202,
            longitude: 67.1844088,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}
      >
          <Marker
            coordinate={{
                latitude: location ? location.coords.latitude : 24.871202,
                longitude: location ? location.coords.longitude : 67.1844088,
            }}
          />
      </MapView>
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
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});