<template>
  <div class="home p-6 flex flex-col gap-15 justify-center w-full">
    <div
      v-for="post in posts"
      :key="post"
      class="flex flex-row w-full h-auto align-center mb-6"
    >
      <div
        class="
          w-full
          flex
          max-h-36
          rounded-lg
          border
          shadow-md
          flex-row
          border-gray-700 
          bg-regal-black 
          overflow-hidden
          cursor-pointer
        "
        id="shdowBox"
      >
        <img
          class="
            object-cover
            rounded-t-lg
            h-auto
            w-48
            md:rounded-none md:rounded-l-lg
          "
          :src="post.imageLink"
          alt=""
        />
        <div class="flex flex-col p-4 leading-normal overflow-y-scroll w-full">
          <h5
            class="
              mb-2
              text-2xl
              font-bold
              tracking-tight
              text-the-orange
              dark:text-white
            "
          >
            {{ post.title }}
          </h5>
          <p class="mb-3 font-normal text-white">
            {{ post.description }}
          </p>
        </div>
        <span id="specialShadow" class="rounded-lg"></span>
      </div>
      <button
        @click="pushTo(post.id)"
        class="
          max-h-12
          focus:outline-none
          text-white
          bg-the-orange
          hover:bg-red-800
          focus:ring-4 focus:ring-red-300
          font-medium
          rounded-lg
          text-sm
          px-5
          py-2.5
          ml-2
          mr-2
          mb-2
          dark:bg-the-orange
          dark:hover:bg-light-orange
          dark:focus:ring-light-orange
        "
      >
        <img class="max-w-[20px]" src="../assets/Frame2.png" alt="" />
      </button>
      <button
        @click="deleteData(post.id)"
        type="button"
        class="
          max-h-12
          focus:outline-none
          text-white
          bg-red-700
          hover:bg-red-800
          focus:ring-4 focus:ring-red-300
          font-medium
          rounded-lg
          text-sm
          px-5
          py-2.5
          mr-2
          mb-2
          dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900
        "
      >
        <img class="max-w-[20px]" src="../assets/Frame.png" alt="" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      // posts: [],
    };
  },
  mounted() {
    this.$store.dispatch('fetchPosts')
  },
  computed: {
    posts(){
      return this.$store.getters.getPosts
    }
  },
  methods: {
    pushTo(id) {
      this.$router.push(`/updatePost/${id}`);
    },
    deleteData(id) {
      if (confirm("are you sure you want to delete ?")) {
        this.$store.dispatch('deletePost', id)
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  h1 {
    color: #fff;
  }
}
#shdowBox {
  position: relative;
  img {
    z-index: 5;
  }
}
#specialShadow {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: linear-gradient(
    0deg,
    rgba(24, 24, 24, 1) 0%,
    rgba(255, 255, 255, 0) 25%,
    rgba(255, 255, 255, 0) 75%,
    rgba(24, 24, 24, 1) 100%
  );
  pointer-events: none;
}
</style>
