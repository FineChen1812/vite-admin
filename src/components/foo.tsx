import { defineComponent, ref } from 'vue';

interface PropType {
  msg: string
}

export default defineComponent({
  // options API
  // props: {
  //   msg: {
  //     type: String,
  //     require: true
  //   }
  // },
  // render() {
  //   return (
  //     <div>{this.msg}</div>
  //   )
  // }

  // 组合式API
  props: {
    msg: {
      type: String,
      require: true
    }
  },
  setup() {
    const count = ref(0)
    return (props:PropType) => (
      <div>
        {props.msg}{count.value}
      </div>
    )
  }
})