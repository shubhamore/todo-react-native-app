import { StyleSheet, Text, View, StatusBar, Dimensions, Image } from 'react-native';
const { width } = Dimensions.get('window')

export default function TaskDetail() {
  return (
    <View>
      <Text style={styles.heading}>Task Details</Text>
      <View>
        <Text style={styles.subheading}>Task Title</Text>
        <Text style={{ fontWeight: "bold", color: '#1D2939', fontSize: width / 20 }}>NFT Web App Prototype</Text>
      </View>
      <View>
        <Text style={styles.subheading}>Description</Text>
        <Text style={{ color: '#111322', fontSize: width / 28, fontWeight: '500' }}>Last year was a fantastic year for NFTs, with the market reaching a $40 billion valuation for the first time. In addition, more than $10 billion worth of NFTs are now sold every week – with NFT..</Text>
      </View>
      <View style={{ flexDirection: 'row', marginVertical: 20 }}>
        <Image style={{ position: 'relative', right: 0 * 10 }} source={require('../../assets/Avatar.png')} />
        <Image style={{ position: 'relative', right: 1 * 10 }} source={require('../../assets/Avatar(1).png')} />
        <Image style={{ position: 'relative', right: 2 * 10 }} source={require('../../assets/Avatar(2).png')} />
        <Image style={{ position: 'relative', right: 3 * 10 }} source={require('../../assets/Avatar(3).png')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 24,
    fontSize: width / 25,
    textAlign: 'center',
    marginVertical: 20,
    color: '#111322'
  },
  subheading: {
    fontWeight: 500,
    fontSize: width / 26,
    lineHeight: 20,
    color: '#5D6B98',
    marginVertical: 20,
  },
});
