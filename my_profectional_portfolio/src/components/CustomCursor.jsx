import React from 'react';
import AnimatedCursor from 'react-animated-cursor';

export default function CustomCursor() {
  return (
    <AnimatedCursor
      innerSize={9}          // Size of the small inner dot
      outerSize={39}         // Size of the larger outer circle
      color='255, 255, 255'  // RGB Color of the cursor (White)
      outerAlpha={0.25}      // Transparency/Opacity of the outer circle
      innerScale={1.2}       // Scale of the inner dot when clicked
      outerScale={2.0}       // Scale of the outer circle when hovering over links/buttons
      
      showSystemCursor={false} 
      
      clickables={[
        'a',
        'input',
        'label',
        'select',
        'textarea',
        'button',
        '.cursor-pointer'
      ]}
      trailingSpeed={4}
    />
  );
}