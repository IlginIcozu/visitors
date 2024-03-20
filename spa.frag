 #ifdef GL_ES
precision highp float;
#endif
#define PI 3.14159265359
const float PHI = 1.61803398874989484820459;
const float SEED = 43758.0;
varying vec2 vTexCoord;
uniform sampler2D randomTex;
uniform vec2 resolution;
uniform sampler2D img;
uniform float u_angleC;
uniform float u_radC;
uniform float u_dirR;
uniform float uScale;
uniform float uRound;
uniform float u_radC2;
uniform float u_tanC;
uniform float utime;
uniform float u_tanC2;
uniform float uPi;
uniform float u_circ;
uniform float u_gate;


float random(in vec2 co)
{return texture2D(randomTex, mod(co.xy/0.7,0.2) * PI).x;}

//  float random (vec2 st) {
//     return fract(sin(dot(st.xy,
//                          vec2(12.9898,78.233)))*
//         43758.5453123);
// }



float noise (in vec2 st) {
   vec2 i = floor(st);
   vec2 fu = fract(st);
   float a = random(i);
   float b = random(i + vec2(1.0, 0.0));
   float c = random(i + vec2(0.0, 1.0));
   float d = random(i + vec2(1.0, 1.0));
   vec2 u = fu * fu * (3.0 - 2.0 * fu);
   return mix(a, b, u.x) +(c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

vec3 rgb2hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

  float d = q.x - min(q.w, q.y);
  float e = 1.0e-10;
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}
vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main(  )
{
 vec2 st = gl_FragCoord.xy/resolution.xy;
 vec2 uv = vTexCoord;

 uv.y = 1.0 - uv.y;

 vec2 texelSize = 1.0 / resolution;

 vec2 offset;
 float scale = uScale;
 float offset2 = uRound;
 float angle;


  angle = noise(uv) * PI; 

float radius = offset2;


vec4 color = vec4(0.0);
float div;

color += texture2D(img, uv);

div = 0.45;




 if(u_circ == 1.0 || u_gate == 8.0){
  color -= texture2D(img, uv + noise(vec2(st.x, st.y)) / random(uv));// / random(uv));
  color /= div;
  
 }


     vec3 hsv = rgb2hsv(color.rgb);
    // hsv.y *= 1.05;
    hsv.y *= 1.1;
    color.rgb = hsv2rgb(hsv);
    

   
  if(u_circ == 0.0){
   color.rgb = ((color.rgb - vec3(0.5)) * 1.15 + vec3(0.5));
   color += vec4(0.03,0.03,0.03,1.0);  
  }else{
     color += vec4(-0.02,-0.02,-0.02,1.0);   
  }

      

      
 gl_FragColor = color;
 }
