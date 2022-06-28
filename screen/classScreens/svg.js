import React from 'react';
import {} from 'react-native';

import Svg, { Circle, Text ,Polygon, Polyline, LinearGradient ,Defs,Stop} from 'react-native-svg';

export default function  SvgImg(){return(

  
        
           <Svg
          
    width="100%"
    height={'100%'}
    style={{
      backgroundColor: 'white',
        height:40,
        width:50
    }}>
    {/* <Circle
      stroke="white"
       strokeWidth={'1'}
      fill="red"
      cx={90 }
      cy={150 }
      r={20}/> */}
     
     <Defs>
    <LinearGradient id="grad" x1="0" y1="0" x2="5" y2="0">
      <Stop offset="0" stopColor="royalblue" stopOpacity="1" />
      <Stop offset="2" stopColor="black" stopOpacity="1" />
      <Stop offset="4" stopColor="red" stopOpacity="1" />
    </LinearGradient>
  </Defs>
    <Polyline 
      points="60,120 20,80 40,180 95,220 140,180 160,80 120,120 60,120"
    // points="100,30 30,50 50,70 30,50 20,30 20,0" 
    stroke="white"
    strokeWidth={'2'}
    fill="url(#grad)"
   />
  </Svg>
);}