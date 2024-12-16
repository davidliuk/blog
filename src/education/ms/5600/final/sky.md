# Procedural Sky

Can be milestone 3

```glsl
in vec2 fs_UV;

out vec4 out_Col;

struct Ray {
    vec3 origin;
    vec3 direction;
}

const vec3 sunset[5] = {}

Ray raycast() {
    vec3 ref = eye + F;
    vec3 V = U * 1 * tan(radians(22.5));
    vec3 H = R * 1 * tan(radians(22.5)) * aspect;
    
    float sx = fs_UV.x * 2 - 1;
}

vec3 sunsetLerp(float t) {
    
}

void main() {
    Ray ray = raycast();
    float t = clamp(dot(ray.direction, vec3(0, 1, 0)), 0, 1);
}
```

