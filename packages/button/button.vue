<template>
  <button type="button" class="y-btn" :class="type ? 'y-btn-' + type : ''">
    <span>
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: 'y-button',
  props: {
    value: {
      type: String,
      default: 'button'
    },
    type: String
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="less" scoped>
.y-btn {
  line-height: 1.499;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  box-shadow: 0 2px 0 rgba(0,0,0,.015);
  cursor: pointer;
  transition: all .3s cubic-bezier(.645,.045,.355,1);
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  touch-action: manipulation;
  height: 32px;
  padding: 0 15px;
  font-size: 14px;
  border-radius: 4px;
  color: rgba(0,0,0,.65);
  background-color: #fff;
  border: 1px solid #d9d9d9;
  outline: none;
}
.y-btn:focus, .y-btn:hover {
  color: #40a9ff;
  background-color: #fff;
  border-color: #40a9ff;
}
.y-btn-primary {
  color: #fff;
  background-color: #1890ff;
  border-color: #1890ff;
  text-shadow: 0 -1px 0 rgba(0,0,0,.12);
  box-shadow: 0 2px 0 rgba(0,0,0,.045);
}
.y-btn-primary:hover, .y-btn-primary:focus {
  color: #fff;
  background-color: #40a9ff;
  border-color: #40a9ff;
}
.y-btn-primary:active {
  color: #fff;
  background-color: #096dd9;
  border-color: #096dd9;
}

// 红色按钮
.y-btn-danger {
  color: #fff;
  background-color: #ff4d4f;
  border-color: #ff4d4f;
  text-shadow: 0 -1px 0 rgba(0,0,0,.12);
  box-shadow: 0 2px 0 rgba(0,0,0,.045);
}
.y-btn-danger:focus, .y-btn-danger:hover {
  color: #fff;
  background-color: #ff7875;
  border-color: #ff7875;
}
.y-btn-danger:active {
  color: #fff;
  background-color: #d9363e;
  border-color: #d9363e;
}
// 虚线框按钮
.y-btn-dashed {
  color: rgba(0,0,0,.65);
  background-color: #fff;
  border-color: #d9d9d9;
  border-style: dashed;
}
// 链接
.y-btn-link {
  color: #1890ff;
  background-color: transparent;
  border-color: transparent;
  box-shadow: none;
}
.y-btn-link:hover, .y-btn-link:focus {
  border-color: transparent;
}
</style>
