<template>
  <div class="main">
    <a-card title="查询">
      <a-form-model layout="inline" :model="form" labelAlign="left">

        <a-row>
          <a-col :span="6">
            <a-form-model-item label="周报名称" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
              <a-input v-model="form.fieldA" placeholder="input placeholder" size="large"
                style="width: 200px" />
            </a-form-model-item>
          </a-col>
          <a-col :span="6">
            <a-form-model-item label="周报 id" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
              <a-input v-model="form.fieldA" placeholder="input placeholder" size="large"
                style="width: 200px" />
            </a-form-model-item>
          </a-col>
          <a-col :span="6">
            <a-form-model-item label="开始时间" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
              <a-input v-model="form.fieldA" placeholder="input placeholder" size="large"
                style="width: 200px" />
            </a-form-model-item>
          </a-col>
          <a-col :span="6">
            <a-form-model-item label="结束时间" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
              <a-input v-model="form.fieldA" placeholder="input placeholder" size="large"
                style="width: 200px" />
            </a-form-model-item>
          </a-col>
        </a-row>
        <a-form-model-item :wrapper-col="buttonItemLayout.wrapperCol">
          <a-button type="primary">
            Submit
          </a-button>
        </a-form-model-item>

      </a-form-model>
    </a-card>

    <div style="margin-top:48px">
      <a-button type="primary" style="margin-bottom:28px">新增</a-button>

      <a-card>
        <a-table :columns="columns" :dataSource="data" bordered></a-table>
      </a-card>
    </div>
  </div>
</template>
<script>
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: { customRender: 'tags' },
  },
  {
    title: 'Action',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  },
];
export default {
  data () {
    return {
      data,
      columns,
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 10 },
      },
      form: {
        layout: 'horizontal',
        fieldA: '',
        fieldB: '',
      },
    };
  },
  computed: {
    formItemLayout () {
      const { layout } = this.form;
      return layout !== 'horizontal'
        ? {
          labelCol: { span: 8 },
          wrapperCol: { span: 14 },
        }
        : {};
    },
    buttonItemLayout () {
      const { layout } = this.form;
      return layout === 'horizontal'
        ? {
          wrapperCol: { span: 14, offset: 4 },
        }
        : {};
    },
  },
};
</script>

<style lang="stylus" scoped>
.main {
}
</style>