<template>
  <div class="container">
    <div class="btn">
      <button class="btn btn-primary" @click.prevent="onClick">
        Modal box
      </button>
    </div>
    <div class="input" v-if="showModal">
           <div
      class="modal"
      id="edit"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editLabel">Edit Product</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label>Product Name</label>
              <input
                class="form-control"
                type="text"
                placeholder="Event Name .."
              />
            </div>
            <div class="form-group">
              <label>Company Name</label>
              <input
                class="form-control"
                type="text"
                placeholder="Event Name .."
              />
            </div>
            <div class="form-group">
              <label>For</label>
              <input
                class="form-control"
                type="text"
                placeholder="Event Name .."
              />
            </div>
            <div class="form-group">
              <label>Description</label>
              <textarea class="form-control"></textarea>
            </div>
            <div class="form-group my-4 upload">
              <label>Upload Image</label>
              <input type="file" />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="updateProduct()"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    onClick() {
      this.showModal = true;
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 150px;
  margin-bottom: 50px;
}
.input {
  margin-top: 20px;
 
}
.modal{
    display: block;
}

</style>