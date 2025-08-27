import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'


const Index = () => {
  return (
    <View style={styles.appContainer}>
      {/* <HomeScreen /> */}
      <View>
        <View>
          <TextInput placeholder='Your First goal' />
          <Button title='Add Goal' />
        </View>
        <View>
          <Text>List of goals........</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50
  }

})

export default Index
