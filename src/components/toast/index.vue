<template>
    <div class="alert">
        <div class="alert-main" v-for="item in notices" :key="item.name">
            <div class="alert-content">{{ item.content }}</div>
        </div>
    </div>
</template>

<script>
    let seed = 0;

    function getUuid() {
        return 'alert_' + (seed++);
    }

    export default {
        data() {
            return {
                notices: []
            }
        },
        methods: {
            add(notice) {
                const name = getUuid();

                let _notice = Object.assign({
                    name: name
                }, notice);

                this.notices.push(_notice);

                // 定时移除，单位：秒
                const duration = notice.duration;
                setTimeout(() => {
                    this.remove(name);
                }, duration * 1000);
            },
            remove(name) {
                const notices = this.notices;

                for (let i = 0; i < notices.length; i++) {
                    if (notices[i].name === name) {
                        this.notices.splice(i, 1);
                        break;
                    }
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .alert 
        position absolute
        top 50%
        left 50%
        width 193px
        height 70px
        z-index 99999
        border 1px solid red
        transform translate(-50%)
</style>