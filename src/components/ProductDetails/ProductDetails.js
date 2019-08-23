import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, Button } from 'react-native';

export default class PizzaTranslator extends Component {
  state = {
    prodDetails: []
  };


  productSubmitHandler = () => {
    alert(pName);
  };
  

  render() {
    return (
      
      <View style={styles.container}>

      
        <View style={styles.midCont}>
          <View style={{alignItems: 'center', padding:15}}>
            <TextInput 
              style={{borderRadius: 10, borderWidth: 1, height: 100, width: 100, padding: 5}}
              placeholder='Upload Image'
            />
          </View>
          <View style={styles.viewItem}>
            <Text style={styles.textStyle}>
              Product Name
            </Text>
            <TextInput

              style={styles.input}
              placeholder="Product Name"
              onChangeText={(pName)=> this.setState({pName})}
              value={this.state.pName}
            />
          </View>
            <View style={styles.viewItem}>
            <Text style={styles.textStyle}>
              Category
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Category"
              onChangeText={(pCat)=> this.setState({pCat})}
              value={this.state.pCat}
            />
          </View>
          <View style={styles.viewItem}>
            <Text style={styles.textStyle}>
              Headline
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Headline"
              onChangeText={(headline)=> this.setState({headline})}
              value={this.state.headline}
            />
          </View>
          <View style={styles.viewItem}>
            <Text style={styles.textStyle}>
              Address
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Address"
              onChangeText={(address)=> this.setState({address})}
              value={this.state.address}
            />
          </View>
          <View style={styles.viewItem}>
            <Text style={styles.textStyle}>
              Area
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Area"
              onChangeText={(area)=> this.setState({area})}
              value={this.state.area}
            />
          </View>
          <View style={styles.viewItem}>
            <Text style={styles.textStyle}>
              Price
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Price"
              onChangeText={(price)=> this.setState({price})}
              value={this.state.price}
            />
          </View> 
        </View>


        <View style={styles.viewButton}>
          <Button
          style={styles.button}
          title='Add'
          color='purple'
          onPress={this.productSubmitHandler}
          /> 
        </View>


      </View>
    );
  }
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
    paddingTop: 24
  },

  header: {
    padding: 0,
    backgroundColor: '#BA55D3',
    width: 420,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'black',
    borderWidth: 1,
    height: '10%'

  },
  midCont: {
    height:'80%',
    flexDirection: 'column',
    padding:5,
  },

  textStyle:{
    fontSize: 20,
    padding: 5
  },
  
  input: {
    borderWidth: 1,
    borderColor: 'black',
    width: 200,
    padding: 10,
    
  },

  viewItem: {
    flexDirection: 'row',
    padding:5,
    justifyContent: 'space-between',
    alignItems: 'center'
  },


  viewButton: {
    height: '10%'
  },
  buttonSize: {
    width: 50
  },

  footer: {
    backgroundColor: '#BA55D3',
    width: 420,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: 'black',
    borderWidth: 1,
    height:'10%'
    
  }
 
  
});
