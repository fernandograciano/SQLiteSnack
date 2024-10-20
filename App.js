import React, { Component } from 'react';
import {
  TextInput,
  Button,
  View,
  Text,
  Alert,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      idade: '',
      pessoas: [],
    };
  }

  render() {
    return (
      <SafeAreaView style={css.container}>
        <View style={css.linha}>
          <Text>Nome:</Text>
          <TextInput
            style={css.input}
            value={this.state.nome}
            onChangeText={(nome) => this.setState({ nome })}
            placeholder="Digite o nome"
          />

          <Text>Idade:</Text>
          <TextInput
            style={css.input}
            keyboardType="numeric"
            value={this.state.nome}
            onChangeText={(nome) => this.setState({ nome })}
            placeholder="Digite a idade"
          />

          <Button title={'Salvar'} onPress={this.cadastrarOuEditarPessoa} />

          <Text style={css.titulo}>Pessoas Cadastradas:</Text>

          <FlatList
            data={this.state.pessoas}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={css.linhaLista}>
                <View>
                  <Text>ID: {item.id}</Text>
                  <Text>Nome: {item.nome}</Text>
                  <Text>Idade: {item.idade}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity
                    style={css.btnEditar}
                    onPress={() => this.iniciarEdicao(item)}>
                    <Text style={{ color: 'white' }}>Editar</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={css.btnExcluir}
                    onPress={() => this.excluirPessoa(item.id)}>
                    <Text style={{ color: 'white' }}>Excluir</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const css = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  linha: {
    padding: 20,
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
    backgroundColor: '#fff',
  },
  titulo: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  linhaLista: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnEditar: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  btnExcluir: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
});
