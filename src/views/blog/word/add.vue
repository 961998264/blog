<template>
  <div class='main-wrap'>
    <h3 class="title">新增周报</h3>
    <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }"
      @submit="handleSubmit">
      <a-form-item label="周报时间">
        <a-date-picker v-decorator="['date-time-picker', config]" show-time
          format="YYYY-MM-DD HH:mm:ss" />
      </a-form-item>
      <a-form-item label="本周工作总结">

        <m-word :content="form.content" @changeConten='changeConten'
          v-decorator="['content',{rules:[{required:true,message:'请填写本周工作总结'}]}]"></m-word>
      </a-form-item>
      <a-form-item label="需协调与帮助">
        <m-word></m-word>
      </a-form-item>
      <a-row>
      </a-row>
      <a-form-item :wrapper-col="{ span: 24 }">
        <div style="display:flex;justify-content:center;">
          <a-button type="primary" html-type="submit" style="margin-right:24px">
            Submit
          </a-button>
          <a-button type="primary" html-type="submit">
            reset
          </a-button>
        </div>
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
import mWord from '@/components/word/word.vue'
export default {
  components: {
    mWord
  },
  data () {
    return {
      from: {
        content: "",
      },
      config: {
        rules: [{ type: 'object', required: true, message: '请选择周报日期' }],
      },
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    };
  },
  methods: {
    changeConten (val) {
      this.form.content = val
    },
    handleSubmit (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    handleSelectChange (value) {
      console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
      });
    },
  },
};
</script>

<style lang='stylus' scoped>
.main-wrap {
  padding: 20px;

  .title {
    position: relative;
    margin-left: 30px;

    &::before {
      content: '';
      width: 4px;
      height: 80%;
      bottom: 50%;
      transform: translateY(50%);
      background: red;
      position: absolute;
      left: -10px;
      border-radius: 5px;
    }
  }
}

.test {
  margin-right: 500px;
}
</style>
