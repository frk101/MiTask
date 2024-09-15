import { useEffect } from 'react';
import { Text ,View} from 'react-native';
import BootSplash from 'react-native-bootsplash';

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
    <Text>123213</Text>
  </View>
  );
};

export default App;
