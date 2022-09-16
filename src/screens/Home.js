import React, { useState } from "react";

import {
	Text,
	Heading,
	NativeBaseProvider,
	VStack,
	Button
} from "native-base";

const Home = ({ navigation }) => {
	const [user, setUser] = useState('');
	return (
		<NativeBaseProvider>
				<VStack space={5} alignItems="center">
					<Heading size="lg">¡Bienvenido!</Heading>
						<Text>Edita tu proyecto y guárdalo para volver a cargar.</Text>
					<Button colorScheme="success" onPress={() => navigation.navigate('Login')}>Iniciar sesión</Button>
				</VStack>
		</NativeBaseProvider>
	);
}

export default Home;