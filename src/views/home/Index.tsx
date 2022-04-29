import { ref } from "vue";
import { Button, Badge } from 'vant';
let v = ref<string>("");

export default () => {
  return (
    <>
      <input v-model={v.value} type="text" />
      <div>{v.value}</div>
      <Button />
      <Badge dot>
  <p>12321</p>
</Badge>
    </>
  )
}
