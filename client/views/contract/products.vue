<template>
    <div>
        <div class="heading">
            <h2 class="title">{{ total }}条数据</h2>
            <form class="search el-icon-search" @submit.prevent="handleSearch">
                <input type="text" placeholder="搜索" v-model="search">
            </form>
        </div>
        <!-- 表格 -->
        <el-table :data="contract" style="width: 100%">
            <el-table-column prop="transaction_id" label="交易编号">
            </el-table-column>
            <el-table-column prop="customer" label="姓名">
            </el-table-column>
            <el-table-column prop="client_init_principal" label="名义本金">
            </el-table-column>
            <el-table-column prop="product_status" label="状态">
            </el-table-column>
        </el-table>
        <!-- 表格 end -->
    </div>
</template>
<script>
    export default {
        name: 'products',
        data() {
            return {
                total: 0,
                search: '',
                contract: []
            };
        },
        created() {
            this.initdata();
        },
        methods: {
            initdata() {
                this.$services.Contract.get('product')
                    .then(res => {
                        this.total = res.data.result.length;
                        this.contract = res.data.result;
                    })
                    .catch(err => {
                        console.error(err);
                    });
            },
            handleSearch() {
                this.initdata();
            }
        }
    };
</script>
