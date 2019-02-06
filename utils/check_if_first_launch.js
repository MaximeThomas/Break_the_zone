import { AsyncStorage } from 'react-native';

const HAS_LAUNCHED = 'has_launched';

function set_launched_flag() {
  AsyncStorage.setItem('has_launched', 'true');
}

export default async function check_if_first_launch() {
    try {
        const has_launched = await AsyncStorage.getItem('has_launched');
        if (has_launched === null) {
			set_launched_flag();
			return true;
        }
        return false;
    } catch (error) {
        return false;
    }
}
