precision highp float;

#define PI 3.14159265359

varying vec2 vTexCoord;
uniform sampler2D uTexture0;

uniform vec2 uResolution;
uniform sampler2D randomTex;
uniform vec2 uCenter;
uniform float uRad;
uniform float uAngle;
uniform float uTick;
uniform float uShape;
uniform float uDir;
uniform float utime;
uniform float uRadMult;
uniform float u_gate;
uniform float u_circ;



void main() {

    float effectRadius = uRad/uRadMult;
    float effectAngle = uAngle * uDir ;//uAngle * PI * uDir;

    vec2 center = uCenter.xy / uResolution.xy;
    vec2 uv = gl_FragCoord.xy / uResolution.xy - center;

    float len = length(uv * vec2(uResolution.x / uResolution.y, 1.)) ;

   float angle;



    if(u_gate == 0.0){
      angle = atan(uv.x, uv.y) + effectAngle * smoothstep(effectRadius, uTick, len);
    }else if(u_gate == 1.0){
       angle =  1./atan(uv.y/uv.x, uv.y*uv.x) * 1./atan(uv.x, uv.y) + effectAngle * smoothstep(effectRadius, uTick, len);
    }else if(u_gate == 2.0){
      angle =  sin(uv.x) + tan(uv.y) + effectAngle * smoothstep(effectRadius, uTick, len);
    }else if(u_gate == 3.0){
      angle =  sin(uv.y) + tan(uv.x) + effectAngle * smoothstep(effectRadius, uTick, len);
    }else if(u_gate == 4.0){
      angle =  atan(uv.y) + tan(uv.x) + effectAngle * smoothstep(effectRadius, uTick, len);
    }else if(u_gate == 5.0){
      if(u_circ == 0.0){
      angle =  atan(uv.x, uv.y) / tan(uv.y) + effectAngle * smoothstep(effectRadius, uTick, len);
      }else{
      angle =  atan(uv.x, uv.y) / tan(uv.y) + effectAngle / smoothstep(effectRadius, uTick, len);
      }
    }else if(u_gate == 6.0){
       if(u_circ == 0.0){
        angle =  atan(uv.x, uv.y) / tan(uv.x) + effectAngle * smoothstep(effectRadius, uTick, len);
      }else{
         angle =  atan(uv.x, uv.y) / tan(uv.x) + effectAngle / smoothstep(effectRadius, uTick, len);
      }
    }else if(u_gate == 7.0){
      if(u_circ == 0.0){
        angle =  1./atan(uv.x, uv.y) / tan(uv.x) + effectAngle * smoothstep(effectRadius, uTick, len);
      }else{
        angle =  1./atan(uv.x, uv.y) / tan(uv.x) + effectAngle / smoothstep(effectRadius, uTick, len);
      }
    }else if(u_gate == 8.0){
      angle =  1./atan(uv.x, uv.y) / tan(uv.y) + effectAngle * smoothstep(effectRadius, uTick, len);
    }else if(u_gate == 9.0){
      if(u_circ == 0.0){
       angle =  1./atan(uv.x, uv.y) / mod(uv.y, uv.x) + effectAngle * smoothstep(effectRadius, uTick, len);
      }else{ 
        angle =  1./atan(uv.x, uv.y) / mod(uv.y, uv.x) + effectAngle / smoothstep(effectRadius, uTick, len);
      }
   }else if(u_gate == 10.0){
      if(u_circ == 0.0){
        angle =  1./atan(uv.x, uv.y) / mod(uv.x, uv.y) + effectAngle * smoothstep(effectRadius, uTick, len);
      }else{
         angle =  1./atan(uv.x, uv.y) / mod(uv.x, uv.y) + effectAngle / smoothstep(effectRadius, uTick, len);
      }
   }else if(u_gate == 11.0){
      if(u_circ == 0.0){
       angle =  atan(uv.x, uv.y) / mod(uv.y, uv.x) + effectAngle * smoothstep(effectRadius, uTick, len);
      }else{
       angle =  atan(uv.x, uv.y) / mod(uv.y, uv.x) + effectAngle / smoothstep(effectRadius, uTick, len);
      }
   }else if(u_gate == 12.0){
      if(u_circ == 0.0){
       angle =  atan(uv.x, uv.y) / mod(uv.x, uv.y) + effectAngle * smoothstep(effectRadius, uTick, len);
      }else{
       angle =  atan(uv.x, uv.y) / mod(uv.x, uv.y) + effectAngle / smoothstep(effectRadius, uTick, len);
      }
   }else if(u_gate == 13.0){
     angle =  sin(uv.y) / tan(uv.x) + effectAngle * smoothstep(effectRadius, uTick, len);
   }else if(u_gate == 14.0){
       if(u_circ == 0.0){
       angle =  sin(uv.y/uv.x) / tan(uv.x + uv.y) + effectAngle * smoothstep(effectRadius, uTick, len);
      }else{
        angle =  sin(uv.y/uv.x) / tan(uv.x + uv.y) + effectAngle / smoothstep(effectRadius, uTick, len);
      }
   }else if(u_gate == 15.0){
      if(u_circ == 0.0){
       angle =  sin(uv.y/uv.x) / tan(uv.x + uv.y) / effectAngle + smoothstep(effectRadius, uTick, len);
      }else{
        angle =  sin(uv.y/uv.x) / tan(uv.x + uv.y) / effectAngle / smoothstep(effectRadius, uTick, len);  
      }
   }else if(u_gate == 16.0){
    angle =  sin(uv.y/uv.x) / tan(uv.x + uv.y) * effectAngle + smoothstep(effectRadius, uTick, len);
   }else if(u_gate == 17.0){
       if(u_circ == 0.0){
       angle =  1./tan(uv.y/uv.x) - tan(uv.x + uv.y) + effectAngle * smoothstep(effectRadius, uTick, len);
      }else{
       angle =  1./tan(uv.y/uv.x) - tan(uv.x + uv.y) + effectAngle / smoothstep(effectRadius, uTick, len);
      }
   }else if(u_gate == 18.0){
       angle =  sin(uv.y/uv.x) * cos(uv.x + uv.y) + effectAngle / smoothstep(effectRadius, uTick, len);  /////yuvarlak yapıyo
   }else if(u_gate == 19.0){
      angle =  sin(uv.x + uv.y) / sin(uv.x + uv.y) * effectAngle * smoothstep(effectRadius, uTick, len);
   }else if(u_gate == 20.0){
      if(u_circ == 0.0){
       angle = atan(uv.x, uv.y) / effectAngle * smoothstep(effectRadius, uTick, len); // effectAngle'ı bölünce fract gibi oluyo
      }else{
        angle = atan(uv.x, uv.y) / effectAngle / smoothstep(effectRadius, uTick, len); // effectAngle'ı bölünce fract gibi oluyo
      } 
   }else if(u_gate == 21.0){
      if(u_circ == 0.0){
      angle = 1./tan(uv.x * uv.y) + effectAngle * smoothstep(effectRadius, uTick, len);//basic tan efekt, full noise ortaya doğru motion
      }else{
        angle = 1./tan(uv.x * uv.y) + effectAngle / smoothstep(effectRadius, uTick, len);
      }   
   }else if(u_gate == 22.0){
    angle = 1./tan(uv.x / uv.y) + effectAngle * smoothstep(effectRadius, uTick, len); // yukardakinin uv.x / uv.y hali
   }else if(u_gate == 23.0){
    angle = tan(uv.x / uv.y) + effectAngle * smoothstep(effectRadius, uTick, len); // collision in noiselu perspectif hali
   }else if(u_gate == 24.0){
      if(u_circ == 0.0){
      angle = tan(uv.x / uv.y) / effectAngle * smoothstep(effectRadius, uTick, len);
      }else{
      angle = tan(uv.x / uv.y) / effectAngle / smoothstep(effectRadius, uTick, len);
      }
   }else if(u_gate == 25.0){
      if(u_circ == 0.0){
      angle = 1./mod(uv.x, uv.y) + effectAngle * smoothstep(effectRadius, uTick, len); //fract halinde fulll noise boyama
      }else{
      angle = 1./mod(uv.x, uv.y) + effectAngle / smoothstep(effectRadius, uTick, len);  
      }
   }else if(u_gate == 26.0){
      if(u_circ == 0.0){
       angle = 1./mod(uv.x, uv.y) * cos(uv.x / uv.y) + effectAngle * smoothstep(effectRadius, uTick, len);
      }else{
        angle = 1./mod(uv.x, uv.y) * cos(uv.x / uv.y) + effectAngle / smoothstep(effectRadius, uTick, len);
      }
   }else if(u_gate == 27.0){
      if(u_circ == 0.0){
      angle = 1./mod(uv.x, uv.y) / cos(uv.x / uv.y) + effectAngle * smoothstep(effectRadius, uTick, len);
      }else{
       angle = 1./mod(uv.x, uv.y) / cos(uv.x / uv.y) + effectAngle / smoothstep(effectRadius, uTick, len);
      }
   }else if(u_gate == 28.0){
     if(u_circ == 0.0){
     angle = cos(uv.x) / mod(uv.x, uv.y) + effectAngle * smoothstep(effectRadius, uTick, len);  // yukardakinin başka formülü
      }else{
        angle = cos(uv.x) / mod(uv.x, uv.y) + effectAngle / smoothstep(effectRadius, uTick, len); 
      }
   }else if(u_gate == 29.0){
    angle = tan(uv.x) / sin(uv.y) + effectAngle * smoothstep(effectRadius, uTick, len);
   }else if(u_gate == 30.0){
    angle = tan(uv.x) / mod(uv.x, uv.y) + effectAngle * smoothstep(effectRadius, uTick, len);
   }else if(u_gate == 31.0){
    angle = tan(uv.x) / mod(uv.x, uv.y) + effectAngle * smoothstep(effectRadius, uTick, len);
   }else if(u_gate == 32.0){
      if(u_circ == 0.0){
      angle = tan(uv.y) / mod(uv.x, uv.y) + effectAngle * smoothstep(effectRadius, uTick, len); //üsttekinin tan(uv.y) değişiği
      }else{
    angle = tan(uv.y) / mod(uv.x, uv.y) + effectAngle / smoothstep(effectRadius, uTick, len); //üsttekinin tan(uv.y) değişiği
      }
    
       
   }else if(u_gate == 33.0){
    angle = tan(uv.y) / 1./mod(uv.y, uv.x) + effectAngle * smoothstep(effectRadius, uTick, len);
   }else if(u_gate == 34.0){
        if(u_circ == 0.0){
       angle = 1./tan(uv.y) / 1./mod(uv.y, uv.x) + effectAngle * smoothstep(effectRadius, uTick, len);
      }else{
        angle = 1./tan(uv.y) / 1./mod(uv.y, uv.x) + effectAngle / smoothstep(effectRadius, uTick, len);
      }
   }else if(u_gate == 35.0){
      if(u_circ == 0.0){
       angle = cos(uv.x) / atan(uv.x + uv.y) + effectAngle * smoothstep(effectRadius, uTick, len);
      }else{
        angle = cos(uv.x) / atan(uv.x + uv.y) + effectAngle / smoothstep(effectRadius, uTick, len);
      } 
   }else if(u_gate == 36.0){
    angle = 1./ cos(uv.x) + 1./atan(uv.x / uv.y) + effectAngle * smoothstep(effectRadius, uTick, len);
   }else if(u_gate == 37.0){
    angle = 1./ cos(uv.x) / 1./tan(uv.x / uv.y) + effectAngle * smoothstep(effectRadius, uTick, len);
   }else if(u_gate == 38.0){
    angle = mod(uv.x, uv.y) / tan(uv.x + uv.y) + effectAngle * smoothstep(effectRadius, uTick, len);
   }else if(u_gate == 39.0){
    angle = atan(uv.x + (cos(uv.x) * 1./sin(uv.y))) + effectAngle * smoothstep(effectRadius, uTick, len);
   }else if(u_gate == 40.0){
    angle =  atan(uv.x / uv.y) / tan(uv.x) + effectAngle * smoothstep(effectRadius, uTick, len);
   }else if(u_gate == 41.0){
        if(u_circ == 0.0){
     angle =  atan(uv.y / uv.x) / tan(uv.x) + effectAngle * smoothstep(effectRadius, uTick, len);
      }else{
      angle =  atan(uv.y / uv.x) / tan(uv.x) + effectAngle / smoothstep(effectRadius, uTick, len);
      }
   }else if(u_gate == 42.0){
     angle =  atan(uv.x / uv.y) / tan(uv.y) + effectAngle * smoothstep(effectRadius, uTick, len);
   }else if(u_gate == 43.0){
      if(u_circ == 0.0){
      angle =  1./atan(uv.x / uv.y) / tan(uv.x) + effectAngle * smoothstep(effectRadius, uTick, len);
      }else{
        angle =  1./atan(uv.x / uv.y) / tan(uv.x) + effectAngle / smoothstep(effectRadius, uTick, len);
      }
   }else if(u_gate == 44.0){
      if(u_circ == 0.0){
       angle =  1./atan(uv.y + sin(uv.x)) / tan(uv.y) + effectAngle * smoothstep(effectRadius, uTick, len);
      }else{
        angle =  1./atan(uv.y + sin(uv.x)) / tan(uv.y) + effectAngle / smoothstep(effectRadius, uTick, len);
      }    
   }else if(u_gate == 45.0){
      if(u_circ == 0.0){
      angle =  1./atan(uv.y - sin(uv.x)) / tan(uv.y + cos(uv.x)) + effectAngle * smoothstep(effectRadius, uTick, len);
      }else{
      angle =  1./atan(uv.y - sin(uv.x)) / tan(uv.y + cos(uv.x)) + effectAngle / smoothstep(effectRadius, uTick, len);  
      }

   }
   
// angle =  1./atan(uv.y ) / tan(uv.y + cos(uv.x)) + effectAngle * smoothstep(effectRadius, uTick, len);

// angle =  1./atan(uv.x,uv.y ) / tan(uv.y + sin(uv.x)) + effectAngle * smoothstep(effectRadius, uTick, len);
 
// angle =  1./atan(cos(uv.x),sin(uv.y)) + effectAngle / smoothstep(effectRadius, uTick, len);
   
  //  angle =  atan(tan(uv.x),atan(uv.y))/tan(uv.x) + effectAngle * smoothstep(effectRadius, uTick, len);

  //  angle =  1./atan(tan(uv.x),atan(uv.y))/cos(uv.x/uv.y) + effectAngle * smoothstep(effectRadius, uTick, len);

// angle =  1./atan(cos(uv.x),atan(uv.y))/sin(uv.x/uv.y) + effectAngle * smoothstep(effectRadius, uTick, len);

// angle =  atan(1./atan(cos(uv.x),fract(uv.y)),atan(uv.x/uv.y)) + effectAngle * smoothstep(effectRadius, uTick, len);

// angle =  1./atan(1./atan(uv.x,uv.y),cos(uv.y))/tan(uv.x) + effectAngle * smoothstep(effectRadius, uTick, len);



  //  angle =  atan(uv.y/uv.x, uv.y*uv.x) / tan(uv.x - uv.y) + effectAngle * smoothstep(effectRadius, uTick, len);

  //  angle =  atan(uv.y/uv.x, uv.y*uv.x) * atan(uv.x, uv.y) + effectAngle * smoothstep(effectRadius, uTick, len);

    //

    // angle =  atan(uv.x, uv.y) - cos(uv.y/uv.x) + effectAngle * smoothstep(effectRadius, uTick, len);



  //  angle =  1./atan(uv.x, uv.y) / fract(uv.x) + effectAngle * smoothstep(effectRadius, uTick, len);

   // angle =  1./atan(uv.x, uv.y) / fract(uv.y) + effectAngle * smoothstep(effectRadius, uTick, len);

  //  angle =  atan(uv.x, uv.y) / fract(uv.y) + effectAngle * smoothstep(effectRadius, uTick, len);

// angle =  atan(uv.x, uv.y) / tan(uv.y) - effectAngle / smoothstep(effectRadius, uTick, len);



    float radius = length(uv);

    vec4 color = vec4(0.0);

    if(uShape == 0.0){
    color = texture2D(uTexture0, vec2(radius * sin(angle), radius / tan(angle)) + center);
    }else if(uShape == 1.0){
    color = texture2D(uTexture0, vec2(radius * sin(angle), radius / cos(angle)) + center);
    }else if(uShape == 2.0){
    color = texture2D(uTexture0, vec2(radius * sin(angle), radius *  mod(cos(angle), 0.5)) + center);
    }else if(uShape == 3.0){
     color = texture2D(uTexture0, vec2(radius / sin(angle), radius * tan(angle)) + center); //dörde bölüyo gibi ama ?
    }else if(uShape == 4.0){
    color = texture2D(uTexture0, vec2(radius / cos(angle), radius * cos(angle)) + center);
    }else if(uShape == 5.0){
    color = texture2D(uTexture0, vec2(radius * cos(angle), radius * tan(angle)) + center); //ters çeviriyo
    }else if(uShape == 6.0){
     color = texture2D(uTexture0, vec2(radius / cos(angle), radius / atan(angle, uv.y)) + center);
    }else if(uShape == 7.0){
     color = texture2D(uTexture0, vec2(radius * sin(angle), radius * cos(angle + tan(angle))) + center);
    }else if(uShape == 8.0){
     color = texture2D(uTexture0, vec2(radius * mod(angle,tan(angle)), radius * cos(angle)) + center);
    }

   // 

   
   //   color = texture2D(uTexture0, vec2(radius * sin(angle), radius * cos(angle)) + center);



        color += vec4(0.06,0.06,0.06,1.0);   

        // color += vec4(0.4,0.4,0.4,1.0); 
         gl_FragColor = color;

}

