import { FlatList, StyleSheet, Text, View } from 'react-native';

const ListarContatos = ({ contatos }) => {
    return (
        <FlatList 
            data={contatos}
            renderItem={(contato) => (
                <View style={styles.contatoItem}>
                    <Text style={styles.titulo} key={ contato.item.contador }>
                        { contato.item.nome }
                    </Text>
                    <Text key={ contato.item.contador }>
                        { contato.item.telefone }
                    </Text>
                </View>
            )}
        />
    )
}

export default ListarContatos;

const styles = StyleSheet.create({
    contatoItem: {
        padding: 8,
        margin: 4,
        borderColor: '#03a1fc',
        borderWidth: 1,
        textAlign: 'center',
        borderRadius: 4
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})