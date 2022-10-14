<template>
  <div>
    <div class="text-white text-center pt-6">Add post</div>

    <form @submit.prevent="sendData" class="p-6">
      <div class="mb-6">
        <label
          for="title"
          class="block mb-2 text-sm font-medium text-white dark:white"
          >Title</label
        >
        <input
          v-model="post.title"
          type="text"
          class="
            shadow-sm
            border border-gray-300
            text-sm
            rounded-lg
            block
            w-full
            p-2.5
            bg-regal-black
            border-gray-600
            placeholder-gray-400
            text-white
            focus:ring-the-orange focus:border-the-orange
          "
          placeholder="Title..."
          required
        />
      </div>
      <div class="mb-6">
        <label for="title" class="block mb-2 text-sm font-medium text-white"
          >Link to project</label
        >
        <input
          v-model="post.link"
          type="text"
          class="
            shadow-sm
            border border-gray-300
            text-sm
            rounded-lg
            block
            w-full
            p-2.5
            bg-regal-black
            border-gray-600
            placeholder-gray-400
            text-white
            focus:ring-the-orange focus:border-the-orange
          "
          placeholder="Link..."
          required
        />
      </div>
      <div class="mb-6">
        <label
          class="
            block
            mb-2
            text-sm
            font-medium
            text-gray-300
          "
          for="user_avatar"
          >Upload file</label
        >
        <input
          class="
          block
            w-full
            p-2.5
            text-sm text-gray-900
            rounded-lg
            border
            cursor-pointer
            text-gray-400
            focus:outline-none
            bg-regal-black
            border-gray-600
            placeholder-gray-400
          "
          aria-describedby="user_avatar_help"
          id="user_avatar"
          type="file"
          @change="previewImage"
          accept="image/*"
        />
        <div
          class="
            mt-6
            block
            p-2.5
            w-full
            text-sm text-gray-400
            bg-regal-black
            rounded-lg
            border border-gray-600
          "
          :class="imagePreview ? 'flex justify-center' : ''"
        >
          <p v-if="imagePreview === false" class="text-gray-400">
            Image preview here...
          </p>
          <img class="rounded-lg max-w-[150px]" id="preview" />
        </div>
      </div>
      <div class="mb-6">
        <label
          for="description"
          class="
            block
            mb-2
            text-sm
            font-medium
            text-gray-300
          "
          >Description</label
        >
        <textarea
          v-model="post.description"
          id="message"
          rows="4"
          class="
          block
            p-2.5
            w-full
            text-sm
            rounded-lg
            border
            focus:ring-the-orange focus:border-the-orange
            bg-regal-black
            border-gray-600
            text-white
            placeholder-gray-400
          "
          placeholder="Your description..."
        ></textarea>
      </div>
      <div class="flex justify-center">
        <button
          type="submit"
          class="
          py-2.5
            px-5
            mr-2
            mb-2
            text-sm
            font-medium
            focus:outline-none
            rounded-lg
            border
            hover:text-the-orange
            focus:z-10 focus:ring-4 focus:ring-gray-200
            dark:focus:ring-gray-700
            bg-regal-black
            text-gray-400
            border-gray-600
            hover:bg-gray-700
          "
        >
          submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import {
  getStorage,
  uploadBytesResumable,
  ref as storageReference,
  getDownloadURL,
} from "firebase/storage";

export default {
  data() {
    return {
      post: {
        title: "",
        imageLink: "",
        link: "",
        description: "",
      },
      imagePreview: false,
      selectedImage: [],
      imageName: "",
      progress: 0,
    };
  },
  methods: {
    previewImage(event) {
      this.imagePreview = true;
      this.progress = 0;
      this.selectedImage = null;
      if (event.target.files.length > 0) {
        var src = URL.createObjectURL(event.target.files[0]);
        var preview = document.getElementById("preview");
        preview.src = src;
        preview.style.display = "block";

        this.selectedImage = event.target.files[0];
        this.imageName = event.target.files[0].name;
      }
    },
    sendData() {
      const storage = getStorage();
      const storageRef = storageReference(storage, "posts/" + this.imageName);
      this.uploadTask = uploadBytesResumable(storageRef, this.selectedImage);
      this.uploadTask.on(
        "state_changed",
        (snapshot) => {
          this.progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        () => {
          getDownloadURL(this.uploadTask.snapshot.ref).then((downloadUrl) => {
            this.post.imageLink = downloadUrl;

            this.$store.dispatch('addPost', this.post)
          });
        }
      );
    },
  },
};
</script>

<style>
</style>