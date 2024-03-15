import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import styles from './LoginCardStyles';
import { Dispatch } from 'react';

interface LoginCardProps {
  onPressButton: () => void;
  onLinkPress: () => void;
  email: string;
  setEmail: Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<React.SetStateAction<string>>;
}

export function LoginCard({
  onPressButton,
  onLinkPress,
  setEmail,
  setPassword,
}: LoginCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={'Email'}
          onChangeText={(input) => setEmail(input)}
        />
        <TextInput
          style={styles.input}
          placeholder={'Password'}
          secureTextEntry={true}
          onChangeText={(input) => input}
        />
      </View>
      <View style={styles.inputContainer}>
        <Pressable style={styles.button} onPress={onPressButton}>
          <Text style={styles.text}>Logg inn</Text>
        </Pressable>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.linkContainer}>
          <Text style={styles.question}>Har du ikke en bruker?</Text>
          <TouchableOpacity onPress={onLinkPress}>
            <Text style={styles.link}>Registrer deg</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
