import React from "react";
import { TextInput, StyleSheet } from "react-native";
import {
  Center,
  NativeBaseProvider,
  VStack,
  Heading,
  Button
} from "native-base";

const Login = () => {
  return (
    <NativeBaseProvider>
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
        <VStack space={5} alignItems="center">
        <Heading size="lg">Inicio de Sesión</Heading>
        <TextInput
						style={styles.input}
						placeholder="Nombre de usuario"
					/>
        <TextInput
						style={styles.input}
						placeholder="Contraseña"
            secureTextEntry="true"
          />
          <Button colorScheme="danger" disabled>Ingresar</Button>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 35,
    margin: 2,
    borderWidth: 1,
    padding: 10,
  },
});

export default Login;