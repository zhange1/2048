<template>
  <div>
    <div class="btnGroup">
      <!-- <div class="btn" @click="start">开始</div> -->
      <span>最高分:{{game.historyMax || 0}}</span>
      <el-button type="primary" size="small" @click="reStart" round>重新开始</el-button>
    </div>
    <div class="content">
      <div class="row" v-for="(items,indexs) in arr" :key="indexs">
        <!-- 行 -->
        <div class="item" :style="{background:[ item.value == 2 ? '#eee4da' :
          item.value == 0 ? 'rgba(147,201,235,0.5)':
          item.value == 4 ? '#ede0c8' :
          item.value == 8 ? '#f2b179' :
          item.value == 16 ? '#f59563' :
          item.value == 32 ? '#f67e5f' :
          item.value == 64 ? '#f65e3b' :
          item.value == 128 ? '#edcf72' :
          item.value == 256 ? '#edcc61' :
          item.value == 512 ? '#9c0' :
          item.value == 1024 ? '#33b5e5' :
          item.value == 2048 ? '#09c' :
          item.value == 4096 ? '#a6c' :
          item.value == 8192 ? '#93c' :
          'red']
        }" v-for="(item) in items" :key="item.id">
          <!-- 列 -->
          {{item.value}}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
  import Game from '../assets/Game.js';
  export default {
    name: 'HelloWorld',
    data() {
      return {
        game: {},
        arr: [
          [{id:'1',value:0},{id:'2',value:0},{id:'3',value:0},{id:'4',value:0}],
          [{id:'5',value:0},{id:'6',value:0},{id:'7',value:0},{id:'8',value:0}],
          [{id:'9',value:0},{id:'10',value:0},{id:'11',value:0},{id:'12',value:0}],
          [{id:'13',value:0},{id:'14',value:0},{id:'15',value:0},{id:'16',value:0}]
        ],
        max:[2]
      }
    },
    methods: {
      start() {
        console.log('this',this)
        this.game = new Game()
        this.game.newItem(this.arr)
      },
      reStart(){
        let initArr = [
          [{id:'1',value:0},{id:'2',value:0},{id:'3',value:0},{id:'4',value:0}],
          [{id:'5',value:0},{id:'6',value:0},{id:'7',value:0},{id:'8',value:0}],
          [{id:'9',value:0},{id:'10',value:0},{id:'11',value:0},{id:'12',value:0}],
          [{id:'13',value:0},{id:'14',value:0},{id:'15',value:0},{id:'16',value:0}]
        ]
        this.game = null
        // this.$set(this,this.arr,initArr)
        this.arr = Object.assign([],this.arr,initArr)
        this.start()
      }
    },
    mounted() {
      this.start()
      window.vm = this
    }
  }
  window.onkeydown = function (e) {
    switch (e.keyCode) {
      case 37:
        console.log('left',window.vm)
        window.vm.game.moveLeft(window.vm.arr)
        break;
      case 38:
        // console.log('top')
        window.vm.game.moveTop(window.vm.arr)
        break;
      case 39:
        // console.log('right')
        window.vm.game.moveRight(window.vm.arr)
        break;
      case 40:
        // console.log('down')
        window.vm.game.moveDown(window.vm.arr)
        break;
    }
  }

</script>

<style scoped>
  .btnGroup{
    margin-left: 20px;
    width: 220px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
  }
  .content {
    box-sizing: border-box;
    /* background: #dd9900; */
    overflow: hidden;
    width: 270px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 10px;
    border: 6px double #00cc00;
    border-radius: 8px;
  }

  .row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .item {
    width: 40px;
    height: 40px;
    margin: 10px;
    border-radius: 6px;
    /* background: #c1c1c1; */
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>
