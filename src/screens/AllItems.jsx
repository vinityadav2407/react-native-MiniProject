import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AllItems = ({data}) => {
  return (
    <View>
      <View style={styles.headingContainer}> 
        <Text style={styles.headingText}>Items</Text>
        <Text style={styles.headingText}>Quantity</Text>
      </View>

      <FlatList
      data={data}
      keyExtractor={(item)=> item.id}
      style={{marginBottom:20}}
      renderItem={({item})=>
        <View style={[styles.itemContainer,{backgroundColor:item.stock<15?'#ffcccc':'#d7f6bfff'}]}>
        <Text style={styles.itemText}>{item.name}</Text>
        <Text style={styles.itemText}>{item.stock}</Text>
        </View>
    }
    contentContainerStyle={{gap:10}}
      ></FlatList>
    </View>
  )
}

export default AllItems

const styles = StyleSheet.create({
    headingContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:10
    },
    headingText:{
        fontWeight:'500',
        fontSize:15,
        marginVertical:10,
        // color:'#FF385C'
    },
    itemContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:11,
        paddingVertical:10,
        borderRadius:9
    },
    itemText:{
        fontSize:13,
        fontWeight:'400'
    }
})