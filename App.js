import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MapView,{Marker} from "react-native-maps";


export default class App extends Component{
    constructor(props){
        super(props);
        this.state={
            region: {
                latitude: 10.744119,
                longitude: 106.687771,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
        }
    }
    render(){
        return(
            <MapView style={styles.map}
                onRegionChange={(region) => this.setState({region})}
                region={this.state.region}
            >
            <Marker
                coordinate={{latitude:10.744119,longitude:106.687771}}
                title={"title"}
                description={"description"}
            />
            </MapView>
        );
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"yellow"
    },
    map:{
        flex:1,
    }
});