import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, TextInput, Button, FlatList } from "react-native";
// Para Expo
import * as SQLite from 'expo-sqlite';

import { styles } from './styles'
 
const db = SQLite.openDatabase("compras.db");
 
const App = () => {
  const [qtd, setQtd] = useState("");
  const [produto, setProduto] = useState("");
  const [compras, setCompras] = useState([]);
 
  const createTables = async () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS compras (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(20), qtd VARCHAR(5))`,
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
 
  const incluirItem = async () => {
    if (!qtd && !produto) {
      alert("Informe os campos corretamente");
      return false;
    }

    if (!qtd) {
      alert("Informe uma quantidade");
      return false;
    }

    if (!produto) {
      alert("Informe um produto");
      return false;
    }
 
    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO compras (nome, qtd) VALUES (?, ?)`,
        [produto, qtd],
        (sqlTxn, res) => {
          console.log(`Produto adicionado com sucesso!`);
          getCompras();
          setProduto("");
          setQtd("");
        },
        error => {
          console.log("Erro ao inserir um Produto ", error);
        },
      );
    });
  };
 
  const getCompras = async () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM compras ORDER BY id DESC`,
        [],
        (sqlTxn, res) => {
          console.log("Compras lidas com sucesso!");
          let len = res.rows.length;
 
          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, nome: item.nome, qtd: item.qtd });
            }
 
            setCompras(results);
          }
        },
        error => {
          console.log("Erro ao obter Compras " + error.message);
        },
      );
    });
  };
 
  const renderList = ({ item }) => {
    return (
      <View style={{
        width: '100%',
        flexDirection: "row",
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: "#DDD"
      }}>
        <Text style={{ marginRight: 9 }}>{item.id}</Text>
        <Text style={{ marginRight: 9 }}>{item.nome}</Text>
        <Text style={{ marginRight: 9 }}>{item.qtd}</Text>
      </View>
    );
  };
 
  useEffect(() => {
    async () => {
      await createTables()
      await getCompras()
    }
  }, []);
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Lista de Compras </Text>
      <StatusBar backgroundColor="#222" />
 
      <View style={styles.inputs}>
        <TextInput
          placeholder="Informe a quantidade"
          value={qtd}
          onChangeText={setQtd}
          style={styles.input_2}
        />

        <TextInput
          placeholder="Informe o produto"
          value={produto}
          onChangeText={setProduto}
          style={styles.input}
        />
      </View>

 
      <Button title="Incluir" onPress={incluirItem} />
 
      <FlatList
        data={compras}
        renderItem={renderList}
        key={t => t.id}
      />
    </View>
  );
};
 
export default App;