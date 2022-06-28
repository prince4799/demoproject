import React, {useRef} from 'react';
import {View,ImageBackground,Button,PermissionsAndroid,Image,Dimensions,ScrollView} from "react-native"
import DocumentPickerResponse from "react-native-document-picker"
import { BarChart } from 'react-native-chart-kit';
import ToggleDrawer from './toggleDrawer';
export default class Last extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imgLoc:" ",
            name:"abcd",
        }
    }

    render() {

      return (
        <>
          <ToggleDrawer />
            <ScrollView style={{flex: 1, }}
            horizontal={true}>
          <BarChart
    data={{
      labels: ["Jan", "Feb", "Mar", "Apr", "May", ],
      datasets: [
        {
          data: [
            1,2,3,4,5
          ]
        }
      ]
    }}
    width={10*50} // recommended to use formula (never less than actual no. of labels but can be more than no. of labels)labels*50
    height={200}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // recommended to  use 0.8 interval for better clarity
    chartConfig={{
      backgroundColor: "red",
      backgroundGradientFrom: "royalblue",
      backgroundGradientTo: "blue",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `white`, // color for grid and line graph
      labelColor: (opacity = 1) => `white`, //color for x-y axis labels
      
      propsForDots: {
        r: "2",
        strokeWidth: "8",
        stroke: "grey"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16,
    }}
  />
               
            </ScrollView>
            </>
        )
    }
}