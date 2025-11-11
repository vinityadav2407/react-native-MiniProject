import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { use, useState } from 'react';

const CreateScreen = ({data,setdata}) => {

  let [item, setItem] = useState('');
  let [stockQnt, setStockQnt] = useState('');
  let [isEdit,setIsEdit]=useState(false);
  let [editItmeId,setEditItemId]=useState(null);

  let addItemHandler = ()=>{
    let newItem={
      id:Date.now(),
      name:item,
      stock:stockQnt
    }
    setdata([...data,newItem])
    setItem('')
    setStockQnt('')
    setIsEdit(false)
  }

  let deleteItemHandler=(id)=>{
    setdata(data.filter((item)=>item.id!==id));
  }
  
  let editItemHandler=(item)=>{
    setIsEdit(true)
    setItem(item.name);
    setEditItemId(item.id);

  }

  let updateItemHandler=()=>{
       setdata(data.map((items)=>(
        items.id === editItmeId ? {...items,name:item,stock:stockQnt}:items
       )))
       setStockQnt('')
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter an item name.."
        value={item}
        onChangeText={item => setItem(item)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter item quantity"
        value={stockQnt}
        onChangeText={itemQnt => setStockQnt(itemQnt)}
         keyboardType="number-pad"
      />
      <Pressable style={styles.addButton} onPress={()=> isEdit?updateItemHandler():addItemHandler()}>
        <Text style={styles.btnText}>{isEdit?'EDIT ITEM IN STOCK': 'ADD ITEM IN STOCK'}</Text>
      </Pressable>

      <View style={{flex:1,marginVertical:10}} >

          <Text style={styles.headingText}>All items in the stock</Text>
      
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View
              style={[
                styles.itemContainer,
                { backgroundColor: item.stock < 15 ? '#ffcccc' : '#d7f6bfff' },
              ]}
            >
              <Text style={styles.itemText}>{item.name}</Text>

              <View style={{flexDirection:"row",gap:20}}>

                 <Text style={styles.itemText}>{item.stock}</Text>

                 <Pressable onPress={()=>editItemHandler(item)}>
                 <Text style={styles.itemText}>Edit</Text>
                 </Pressable>

                 <Pressable onPress={()=>deleteItemHandler(item.id)}>
                 <Text style={styles.itemText}>Delete</Text>
                 </Pressable>

              </View>
            </View>
          )}
          contentContainerStyle={{ gap: 10 }}
        ></FlatList>
      </View>
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: '4%',
    gap: 10,
    flex:1
  },
  input: {
    borderWidth: 1.5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 7,
    borderColor: '#ffcccc',
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#cabfeeff',
    // backgroundColor: "#ffcccc",
    borderRadius: 8,
  },
  btnText: {
    fontWeight: '600',
    fontSize: 15,
    color: 'white',
  },

  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  headingText: {
    fontWeight: '500',
    fontSize: 15,
    marginVertical: 10,
    // color:'#FF385C'
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 11,
    paddingVertical: 10,
    borderRadius: 9,
  },
  itemText: {
    fontSize: 13,
    fontWeight: '400',
  },
});
