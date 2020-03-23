# 腾讯地图 
- Support the VUE
- It can be used on mobile phone or PC

### VUE usage
```
import TencentMap from "tencent-map";

<template>
    <div ref="tencentMap" style="height:600px"></div>
</template>

<script>
    export default {
        created() {
            this.$nextTick(() => {
                TencentMap.load(this.$refs.tencentMap, { mapKey: "key..." }).then(qq => {
                const myLatlng = new qq.maps.LatLng(-34.397, 150.644);
                const myOptions = {
                    zoom: 8,
                    center: myLatlng,
                    mapTypeId: qq.maps.MapTypeId.ROADMAP
                };
                new qq.maps.Map(TencentMap.elements, myOptions);
                });
            });
        }
    }
</script>
```