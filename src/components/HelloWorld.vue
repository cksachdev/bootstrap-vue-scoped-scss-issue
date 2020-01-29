<template>
  <div>

    <h1>B-MODAL</h1>

      <div>
        <b-button id="show-btn" @click="showModal">Open Modal</b-button>

        <b-modal class="mymodal" title="BootstrapVue"
                    ref="my-modal"
                    @shown="showModal()">

            <b-card no-body>
                <b-tabs content-class="mt-3" justified small card   >
                    <b-tab title="Tab1" active>
                        <div class="item select list-items math-lib">
                            <div class="middle aligned content">
                                <div class="math-lib-header">Title 1</div>
                            </div>
                        </div>
                    </b-tab>
                    <b-tab title="Tab2" active>
                        <div class="item select list-items math-lib">
                            <div class="middle aligned content">
                                <div class="math-lib-header">Title 2</div>
                            </div>
                        </div>
                    </b-tab>
                    <b-tab title="Tab3" active>
                        <div class="item select list-items math-lib">
                            <div class="middle aligned content">
                                <div class="math-lib-header">Title 3</div>
                            </div>
                        </div>
                    </b-tab>
                </b-tabs>
            </b-card>
        </b-modal>
      </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  methods: {
    showModal () {
      this.$refs['my-modal'].show()
    },
    hideModal () {
      this.$refs['my-modal'].hide()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';

.mymodal {
  width: 500px;
}
</style>
