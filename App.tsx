import { useEffect } from 'react';
import { Text ,View} from 'react-native';
import BootSplash from 'react-native-bootsplash';
import { Fonts } from './src/constants';
const App = () => {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log('BootSplash has been hidden successfully');
    });
  }, []);


  return (
     <View style={{flex:1}}>
    <Text style={{fontFamily:Fonts.BOLD}}>BOLD</Text>
    <Text style={{fontFamily:Fonts.EXTRABOLD}}>EXTRABOLD</Text>
    <Text style={{fontFamily:Fonts.LIGHT}}>LIGHT</Text>
    <Text style={{fontFamily:Fonts.REGULAR}}>REGULAR</Text>
    <Text style={{fontFamily:Fonts.SEMIBOLD}}>SEMIBOLD</Text>
  </View>
  );
};

export default App;
