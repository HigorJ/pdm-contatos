import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import BotaoCabecalho from '../components/BotaoCabecalho';


import AdicionarContato from '../paginas/AdicionarContato';
import Home from '../paginas/Home';

const Stack = createNativeStackNavigator();

const Container = (
    <NavigationContainer>
        <Stack.Navigator 
            initialRouteName='Home'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#03a1fc'
                },
                headerTintColor: 'white'
            }}
        >
            <Stack.Screen name="AdicionarContatos" component={AdicionarContato}></Stack.Screen>
            <Stack.Screen 
                name="Home" 
                component={Home}
                options={(props) => ({
                    headerRight: () => <HeaderButtons HeaderButtonComponent={BotaoCabecalho}>
                        <Item 
                            title='Adicionar'
                            iconName='md-add'
                            onPress={() => {
                                props.navigation.navigate('AdicionarContatos')
                            }}
                        />
                    </HeaderButtons>
                })}
            ></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
)

export default Container;