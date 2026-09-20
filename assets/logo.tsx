import React from 'react'
import Svg,{Path} from 'react-native-svg'

export const PulseLogo = ({ size = 39, color = '#FE7F2D' }) => (
  <Svg width={size} height={size} viewBox="0 0 510 412" fill="none">
    <Path
      d="M64 256H160L208 144L288 384L352 192L400 256H448"
      stroke={color}
      strokeWidth="33"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);