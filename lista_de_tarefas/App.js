import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, TextInput, Button, FlatList } from "react-native";
// Para Expo
import * as SQLite from 'expo-sqlite';

import { styles } from './styles'
 
const db = SQLite.openDatabase("tarefas.db");
 
const App = () => {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);
 
  const createTables = async () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS tarefas (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(20))`,
        [],
        (sqlTxn, res) => {
          console.log("Tabela criada com sucesso!");
        },
        error => {
          console.log("error on creating table " + error.message);
        },
      );
    });
  };
 
  const incluirTarefa = async () => {
    if (!tarefa) {
      alert("Informe uma tarefa");
      return false;
    }
 
    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO tarefas (nome) VALUES (?)`,
        [tarefa],
        (sqlTxn, res) => {
          console.log(`${tarefa} Tarefa adicionada com sucesso!`);
          getTarefas();
          setTarefa("");
        },
        error => {
          console.log("Erro ao inserir uma Tarefa " + error.message);
        },
      );
    });
  };
 
  const getTarefas = async () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM tarefas ORDER BY id DESC`,
        [],
        (sqlTxn, res) => {
          console.log("Tarefas lidas com sucesso!");
          let len = res.rows.length;
 
          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, nome: item.nome });
            }
 
            setTarefas(results);
          }
        },
        error => {
          console.log("Erro ao obter Tarefas " + error.message);
        },
      );
    });
  };
 
  const renderTarefa = ({ item }) => {
    return (
      <View style={{
        flexDirection: "row",
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: "#DDD",
      }}>
        <Text style={{ marginRight: 9 }}>{item.id}</Text>
        <Text style={{ marginRight: 9 }}>{item.nome}</Text>
        {/* <Button 
          color="red"
          title="Excluir" 
          onPress={() => deleteTarefa(item.id)} 
        /> */}
      </View>
    );
  };
 
  useEffect(() => {
    async () => {
      await createTables()
      await getTarefas()
    }
  }, []);
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Lista de Tarefas </Text>
      <StatusBar backgroundColor="#222" />
 
      <TextInput
        placeholder="Informe uma tarefa"
        value={tarefa}
        onChangeText={setTarefa}
        style={styles.input}
      />
 
      <Button title="Incluir" onPress={incluirTarefa} />
 
      <FlatList
        data={tarefas}
        renderItem={renderTarefa}
        key={t => t.id}
      />
    </View>
  );
};
 
export default App;