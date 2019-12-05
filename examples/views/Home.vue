<template>
  <div class="home">
    <Row v-for="(item, index) in dataList">
      <Col v-for="(item2, index2) in item" span="8">
        <div class="showBox">
          <component :is="item2.name" /></div
      ></Col>
    </Row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList: [
        [
          {
            name: "waterRipper"
          },
          {
            name: "waterRipper"
          },
          {
            name: "waterRipper"
          }
        ],
        [
          {
            name: "waterRipper"
          },
          {
            name: "waterRipper"
          },
          {
            name: "waterRipper"
          }
        ],
        [
          {
            name: "waterRipper"
          },
          {
            name: "waterRipper"
          },
          {
            name: "waterRipper"
          }
        ]
      ]
    };
  }
};
</script>
<style lang="less"scoped>
.home {
  .showBox {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    border: 1px solid limegreen;
  }
}
</style>
