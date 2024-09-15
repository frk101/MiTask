import {ActivityIndicator, Image, StyleSheet, View} from 'react-native';
import { Images,Colors } from '@constants';
// import {Colors, Images} from '../constants';
// import {wp} from '../utils';
// import {AppDispatch, RootState} from '../business/store';
// import {useDispatch, useSelector} from 'react-redux';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/navigation/types';
import React = require('react');
import { wp } from '@utils';
// import {RootStackParamList} from '../navigation/types';
// import {useUser} from '../hooks';
// import {getAllContent} from '../business/actions/content.actions';

type Props = NativeStackScreenProps<RootStackParamList, 'Loading'>;

const LoadingScreen: React.FC<Props> = ({navigation}) => {
    console.log('LoadingScreen',navigation);
//   const {completed} = useSelector((state: RootState) => state.onBoarding);
//   const dispatch: AppDispatch = useDispatch();

//   const {isLoggedIn} = useUser();
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     if (completed !== undefined && isLoggedIn !== undefined) {
//       setIsLoaded(true);
//     }
//   }, [completed, isLoggedIn]);

//   useEffect(() => {
//     const loadData = async () => {
//       if (isLoaded) {
//         try {
//           if (completed) {
//             if (isLoggedIn) {
//               await dispatch(getAllContent());
//               navigation.reset({
//                 index: 0,
//                 routes: [{name: 'BottomStack'}], // Adjust 'MainStack' to your main screen stack name
//               });
//             } else {
//               setTimeout(() => {
//                 navigation.reset({
//                   index: 0,
//                   routes: [{name: 'AuthStack'}],
//                 });
//               }, 1000);
//             }
//           } else {
//             setTimeout(() => {
//               navigation.reset({
//                 index: 0,
//                 routes: [{name: 'OnBoarding'}],
//               });
//             }, 1000);
//           }
//         } catch (error) {
//           console.error('Error loading content:', error);
//           // Handle error (e.g., show an error message)
//         }
//       }
//     };

//     loadData();
//   }, [isLoaded, completed, isLoggedIn, navigation, dispatch]);

  return (
    <View style={styles.container}>
      <Image source={Images.LOGO} style={styles.image} />
      <ActivityIndicator size={'large'} color={Colors.BLUE} />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'contain',
    width: wp('100%'),
    height: wp('100%'),
  },
});
