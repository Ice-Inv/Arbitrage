import { View, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Padding } from '../../../../common';

const { width } = Dimensions.get('window');

export function Avatar() {
  return (
    <Padding>
      <LinearGradient
        colors={['rgba(252, 110, 149, 0.6)', 'rgba(217, 84, 19, 1)']}
        style={styles.avatar}
      >
        <LinearGradient
          colors={['rgba(212,118,166,1)', 'rgba(164,15,102,1))']}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={[styles.avatarHorn, styles.hornRight]}
        />
        <LinearGradient
          colors={['rgba(212,118,166,1)', 'rgba(164,15,102,1))']}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={[styles.avatarHorn, styles.hornLeft]}
        />
        <LinearGradient
          colors={['rgba(251, 197, 211, 1)', 'rgba(165, 21, 111, 1)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[styles.avatarBody, styles.avatarBodyRound]}
        >
          <LinearGradient
            colors={['rgba(253, 253, 253, 1)', 'rgba(250, 199, 152, 1)']}
            style={[styles.avatarEye, styles.eyeCenter]}
          >
            <LinearGradient
              colors={['rgba(251, 219, 181, 1)', 'rgba(213, 129, 56, 1)']}
              style={styles.avatarEyePupil}
            >
              <View style={styles.avatarEyePupilBlackThing}>
                <View style={styles.avatarEyePupilLightReflection}></View>
              </View>
            </LinearGradient>
          </LinearGradient>
        </LinearGradient>
      </LinearGradient>
    </Padding>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: width - 32,
    height: 150,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 50,
  },
  avatarBody: {
    position: 'relative',
    left: '9%',
    top: '-5%',
    width: width * 0.5,
    height: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 0,
    elevation: 10,
  },
  avatarBodyRound: {
    width: width * 0.75,
    height: 300,
    borderRadius: 9999,
  },
  avatarHorn: {
    position: 'absolute',
    left: '60%',
    top: '-20%',
    width: 25,
    height: 65,
    zIndex: 2,
  },
  hornRight: {
    borderTopLeftRadius: 9999,
  },
  hornLeft: {
    left: '30%',
    borderTopRightRadius: 9999,
  },
  avatarEye: {
    position: 'absolute',
    top: '5%',
    left: '50%',
    width: 130,
    height: 130,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  eyeCenter: {
    left: '26%',
    top: '17%',
  },
  avatarEyePupil: {
    position: 'absolute',
    width: '55%',
    height: '55%',
    left: '22%',
    top: '27%',
    zIndex: 10,
    borderRadius: 100,
  },
  avatarEyePupilBlackThing: {
    position: 'absolute',
    width: '55%',
    height: '55%',
    left: '23%',
    top: '25%',
    backgroundColor: 'rgba(44, 47, 50, 1)',
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  avatarEyePupilLightReflection: {
    position: 'absolute',
    width: 17,
    height: 17,
    left: '10%',
    top: '10%',
    backgroundColor: 'rgba(235, 235, 235, 1)',
    borderRadius: 100,
    zIndex: 11,
  },
});
