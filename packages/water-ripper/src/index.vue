/*
 * @Author: lujing 
 * @Date: 2019-12-03 19:25:43 
 * @Last Modified by: lujing
 * @Last Modified time: 2019-12-03 19:50:30
 * @Desc:  水波纹组件
 */
<template>
  <div class="dot">
    <div class="dot2">
      <div class="dot3"><img :src="src"/></div>
    </div>
  </div>
</template>

<style type="text/css">
  .dot {
    animation: sploosh 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .dot2 {
    animation: sploosh2 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .dot3 {
    animation: sploosh3 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .dot,.dot2,.dot3{
    height: 60px;
    width: 60px;
    font-size: 20px;
    color: #fff;
    /* line-height: 60px;
    text-align: center; */
    border-radius: 100%;
    position: absolute;
    z-index: 10;
    animation-iteration-count:infinite;
    background: transparent;
  }
  @keyframes sploosh {
    0% {
      box-shadow: 0 0 0 0px rgba(89,224,218, 0.7);
      background: rgba(89,224,218, 0.7);
    }
    100% {
      box-shadow: 0 0 0 30px rgba(89,224,218, 0);
      background: rgba(89,224,218, 0);
    }
  }
  @keyframes sploosh2 {
    0% {
      box-shadow: 0 0 0 0px rgba(89,224,218, 0.7);
      background: rgba(89,224,218, 0.7);
    }
    100% {
      box-shadow: 0 0 0 20px rgba(89,224,218, 0);
      background: rgba(89,224,218, 0.3);
    }
  }
  @keyframes sploosh3 {
    0% {
      box-shadow: 0 0 0 0px rgba(89,224,218, 0.7);
      background: rgba(89,224,218, 0.7);
    }
    100% {
      box-shadow: 0 0 0 10px rgba(89,224,218, 0);
      background: rgba(89,224,218, 1);
    }
  }
</style>

<script>
  export default {
    name:'waterRipper',
    components: {

    },
    props: {
      // 图标地址
      src: {
        type: String,
        default: ""
      }
    },
    data() {

      return {

      };
    },
    mounted() {

    },
    methods: {

    }
  };
</script>
