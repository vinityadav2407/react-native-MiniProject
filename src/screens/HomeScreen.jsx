import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import AllItems from './AllItems';
import CreateScreen from './CreateScreen';

const HomeScreen = () => {
  let [view, setView] = useState(0);
  let [data, setdata]=useState([
  { id: 1, name: 'Wheat', stock: 10, unit: 'kg' },
  { id: 2, name: 'Rice', stock: 25, unit: 'kg' },
  { id: 3, name: 'Sugar', stock: 15, unit: 'kg' },
  { id: 4, name: 'Salt', stock: 50, unit: 'kg' },
  { id: 5, name: 'Corn', stock: 12, unit: 'kg' },
  { id: 6, name: 'Peas', stock: 8, unit: 'kg' },
  { id: 7, name: 'Milk', stock: 20, unit: 'litre' },
  { id: 8, name: 'Oil', stock: 18, unit: 'litre' },
  { id: 9, name: 'Butter', stock: 5, unit: 'kg' },
  { id: 10, name: 'Ghee', stock: 7, unit: 'kg' },
  { id: 11, name: 'Lentils', stock: 22, unit: 'kg' },
  { id: 12, name: 'Beans', stock: 14, unit: 'kg' },
  { id: 13, name: 'Maida', stock: 30, unit: 'kg' },
  { id: 14, name: 'Besan', stock: 16, unit: 'kg' },
  { id: 15, name: 'Tea', stock: 9, unit: 'kg' },
  { id: 16, name: 'Coffee', stock: 6, unit: 'kg' },
  { id: 17, name: 'Chilli Powder', stock: 4, unit: 'kg' },
  { id: 18, name: 'Turmeric', stock: 3, unit: 'kg' },
  { id: 19, name: 'Onion', stock: 40, unit: 'kg' },
  { id: 20, name: 'Potato', stock: 35, unit: 'kg' }
]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      <View style={styles.btnContainer}>
        <Pressable style={[styles.btn,view===0?{backgroundColor:'#FF385C'}:null]} onPress={() => setView(0)}>
          <Text style={[styles.btnText, view===0?{color:'#fff'}:null]}>All Items</Text>
        </Pressable>
        <Pressable style={[styles.btn,view===1?{backgroundColor:'#FF385C'}:null]} onPress={() => setView(1)}>
          <Text style={[styles.btnText, view===1?{color:'#fff'}:null]}>Low Stock</Text>
        </Pressable>
        <Pressable style={[styles.btn,view===2?{backgroundColor:'#FF385C'}:null]} onPress={() => setView(2)}>
          <Text style={[styles.btnText, view===2?{color:'#fff'}:null]}>Create</Text>
        </Pressable>
      </View>

      {view === 0 ? <AllItems data={data}/> : null}
      {view === 1 ? <AllItems data={data.filter((item)=>item.stock<15)}/> : null}
      {view === 2 ? <CreateScreen data={data} setdata={setdata}/> : null}

    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    widht: '100%',
    padding: '4%',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color:'#FF385C'
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
    marginVertical: 10,
  },
  btn: {
    borderWidth: 0.8,
    borderRadius: 50,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderColor: '#FF385C',
  },
  btnText: {
    color: '#FF385C',
    fontSize:15.5
  },
});

