import { useState } from 'react';
import { StyleSheet, TextInput, Text, View, Button, FlatList } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [contatos, setContatos] = useState([]);

  const adicionarContato = () => {
    setContatos([{
      key: contador,
      nome,
      telefone
    }, ...contatos]);

    setNome("");
    setTelefone("");
    setContador(contador + 1);
    console.log(contatos)
  }

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder='Nome'
          value={nome}
          onChangeText={setNome}
          style={styles.input}
        />
        <TextInput
          placeholder='Telefone'
          value={telefone}
          onChangeText={setTelefone}
          style={styles.input}
        />
        <Button
          disabled={nome.length == 0 || telefone.length == 0}
          title="Adicionar Contato"
          onPress={adicionarContato}
        />
      </View>

      <FlatList 
        data={contatos}
        renderItem={contato => (
          <View key={contato.item.key} style={styles.listItem}>
            <Text style={styles.textItem}>{contato.item.nome} - {contato.item.telefone}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40
  },
  input: {
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    marginBottom: 4, 
    padding: 12 
  },
  listItem: {
    padding: 12,
    backgroundColor: '#03a5fc',
    borderColor: '#03a5dd',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 8
  },
  textItem: {
    color: '#eee'
  }
});
