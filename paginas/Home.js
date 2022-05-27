import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ListarContatos = () => {
  const [contatos, setContatos] = useState([]);
  
  return (
    <View>
      <FlatList 
        data={contatos}
        renderItem={contato => (
          <View key={contato.item.key} style={styles.listItem}>
            <Text style={styles.textItem}>{contato.item.nome} - {contato.item.telefone}</Text>
          </View>
        )}
      />
    </View>
  )
}

export default ListarContatos;

const styles = StyleSheet.create({
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
})