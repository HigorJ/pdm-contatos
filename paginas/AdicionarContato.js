import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import ListarContatos from '../components/ListarContatos';

const AdicionarContato = () => {
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
  }

  return (
    <View>
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

      <ListarContatos
        contatos={contatos}
      ></ListarContatos>
    </View>
  )
}

export default AdicionarContato

const styles = StyleSheet.create({
  container: {
    padding: 40
  },
  input: {
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    marginBottom: 12, 
    padding: 12 
  }
})