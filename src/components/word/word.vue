<template>
  <div class="tinymce-container editor-container">
    <textarea :id="tinymceId" class="tinymce-textarea" />
    </div>
</template>
<script>
// import docx from './docx'
import plugins from './plugin'
import toolbar from './toolbar'
// docx()
export default {
  name: 'Tinymce',
  props: {
    tid: {
      type: String,
      default: 'my-tinymce-' + new Date().getTime() + parseInt(Math.random(100))
    },
    content: {
      type: String,
      default: ''
    },
    menubar: { // 菜单栏      
      type: String,
      default: 'file edit insert view format table'
    },
    toolbar: { // 工具栏     
      type: Array,
      required: false,
      default () {
        return []
      }
    },
    height: {
      type: Number,
      required: false,
      default: 260
    }
  },
  data () {
    return {
      tinymceId: this.tid,
      config: {
        language: 'zh_CN',
        height: this.height,
        menubar: this.menubar, //菜单:指定应该出现哪些菜单        
        toolbar: this.toolbar.length > 0 ? this.toolbar : toolbar, // 分组工具栏控件        
        plugins: plugins, // 插件(比如: advlist | link | image | preview等)        
        object_resizing: false, // 是否禁用表格图片大小调整        
        end_container_on_empty_block: true, // enter键 分块        
        powerpaste_word_import: 'merge', // 是否保留word粘贴样式  clean | merge        
        code_dialog_height: 450, // 代码框高度 、宽度        
        code_dialog_width: 1000,
        advlist_bullet_styles: 'square' // 无序列表 有序列表      
      }
    }
  },
  mounted () {
    this.initTinymce()
  },
  methods: {
    initTinymce () {
      window.tinymce.init({
        selector: `#${this.tinymceId}`,
        ...this.config,
        content_style: 'img {max-width:100% !important }', // 初始化赋值        
        init_instance_callback: editor => {
          if (this.content) {
            editor.setContent(this.content)
          }
          this.finishInit = true
          editor.on('NodeChange Change SetContent KeyUp', () => {
            this.hasChanged = true
          })
        }, // 上传图片
        images_upload_handler: (blobInfo, success, failure) => {
          const formData = new FormData();
          formData.append('file', blobInfo.blob());
          uploadFile(formData).then(res => {
            if (res.data.code == 0) {
              let file = res.data.data;
              success(file.filePath);
              return
            }
            failure('上传失败')
          }).catch(() => {
            failure('上传出错')
          })
        }
      })
    }
  }}
</script>