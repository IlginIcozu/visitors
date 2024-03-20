precision mediump float;
 #define PI 3.14159265359
 varying vec2 vTexCoord;
 uniform sampler2D uTexture0;
 uniform sampler2D randomTex;
 uniform float u_time;
 uniform vec2 uResolution;
 uniform float u_amp;
 uniform float u_octave;
 uniform float u_fbmAmp;
 uniform float uvChooser;
 uniform float u_intensity;
 uniform float u_roundness;
 uniform float u_angleC;
 uniform float u_sqr;
 uniform float u_darkC;
 uniform float u_fbmC;
 const float PHI = 1.61803398874989484820459;
 const float SEED1 = 12.0;
 const float SEED2 = 78.0;
 const float SEED3 = 43758.0;
 
 float random (vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}
 float noise (in vec2 st) {
     vec2 i = floor(st);
     vec2 fu = fract(st);
     float a = random(i);
     float b = random(i + vec2(1.0, u_sqr));//1.0
     float c = random(i + vec2(0.0, 1.0));
     float d = random(i + vec2(1.0, 1.0));
     vec2 u = fu * fu * (3.0 - 2.0 * fu);
     return mix(a, b, u.x) +(c - a)* u.y * (1.0 - u.x) +(d - b) * u.x * u.y;
 }
 
 #define OCTAVES 24
 float fbm (in vec2 st) {
     float value = 0.0;
     float amplitude = 0.2;//u_amp;//0.1,0.24
     float frequency = 0.1;
     for (int i = 0; i < OCTAVES; i++) {
         value += amplitude * noise(st);
         st *= u_octave;
         amplitude *= .45; 
     }
     return value;
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
 
 
 float fbm6( in vec2 p )
 {
     vec2 q = vec2( fbm( p + vec2(0.0,0.0) ),
                    fbm( p + vec2(0.0,2.0) ) );
     vec2 r = vec2( fbm( p + 4.0*q + vec2(4.0,3.0)),
                    fbm( p + 4.0*q + vec2(0.0,0.0)));
     return fbm( p + 1.0 * r ); // 2.0, 6.0
 }
 
 void main() {
   vec2 st = gl_FragCoord.xy/uResolution.xy;
   vec2 uv = vTexCoord;
   uv.y = 1.0 - uv.y;
   vec2 texelSize = 1.0 / uResolution;
   vec2 offset;

   float scale = 0.1;
   float offset2 = 0.1;

   float angle;
   angle = noise(st / uv * 0.2) * PI * 1.0;

   float radius = offset2;
   st *= scale;

   offset = texelSize  * vec2(0.0,0.0) - fbm6(uv) + 0.15;

   vec4 color = vec4(0.0);
   float div;
   float mult = 1.0;
   color += texture2D(uTexture0, uv + vec2(offset.x, offset.y));

   color += texture2D(uTexture0, uv + vec2(offset.x, offset.y) * 4.0);
   mult = 1.5;//2.0

   
   color += fbm(uv*2.0);
   div = 1.1*mult;
   color /= div;

  //  color.rgb = ((color.rgb - vec3(0.5)) * 1.3 + vec3(0.5));

   color.rgb = ((color.rgb - vec3(0.5)) * 1.4 + vec3(0.5));

//    color += vec4(0.0,-0.01,-0.02,0.0);
   gl_FragColor = color;
   }
