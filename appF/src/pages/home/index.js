import { StyleSheet, Text, View, FlatList } from 'react-native';
import Balance from '../../components/Balance';
import Header from '../../components/Header'
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = 
 [ {
    id:1,
    label: 'boleto conta luz',
    value: '300,90',
    date: '17/09/2022',
    type:0 // despesas
  },
  {
    id:2,
  label:'pix cliente X',
  value: '2.500,00',
  date:'17/09/2022',
type: 1 // receita / entradas
  },
  {
    id:3,
label:'Salário',
value:'7.200,00',
date:'17/09/2022',
type:1 // receitas / entradas
  }
]




export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="João"/>
        
       <Balance saldo="1.220,00" gastos="-1.300,00"/>

       <Actions/>

<Text style={styles.title}>Últimas movimentações</Text>

<FlatList
style={styles.listitem}
data={list}
keyExtractor={(item) => String(item.id)}
showsVerticalScrollIndicator={false}
renderItem={ ({ item }) => <Movements data={item}/> }
/>

    </View>
  );
}

const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:'#fafafa'

},
title:{
  fontsize:18,
  fontWeight:'bold',
  margin:14,
},
listitem:{
  marginLeft:14,
  marginRight:14,
}
})

