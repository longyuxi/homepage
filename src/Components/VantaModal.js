import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import RINGS from "vanta/src/vanta.rings";
import TOPOLOGY from "vanta/src/vanta.topology";
import * as THREE from "three";

export const VantaModal = (props) => {
    const { children } = props;
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(

        RINGS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00
        })

        // TOPOLOGY({
        //     el: vantaRef.current,
        //     THREE: THREE,
        //     mouseControls: true,
        //     touchControls: true,
        //     gyroControls: false,
        //     minHeight: 200.00,
        //     minWidth: 200.00,
        //     scale: 1.00,
        //     scaleMobile: 1.00
        // })

        // BIRDS({
        //   el: vantaRef.current,
        //   THREE: THREE,
        //   mouseControls: true,
        //   touchControls: true,
        //   gyroControls: false,
        //   minHeight: 600.0,
        //   minWidth: 600.0,
        //   scale: 1.0,
        //   scaleMobile: 1.0,
        //   color1: "#ff0000",
        //   color2: "#00ff00"
        // })

      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div ref={vantaRef}>
        {children}
    </div>
  );
};
