<template>
  <nav class="p-3 rounded border-gray-200 bg-regal-black dark:border-gray-700">
    <div class="container flex justify-between items-center mx-auto">
      <a href="#" class="flex items-center">
        <img
          src="../assets/logo_petit-blanc.png"
          class="mr-3 h-6 sm:h-10"
          alt="Flowbite Logo"
        />
        <span
          class="
            self-center
            text-xl
            font-semibold
            whitespace-nowrap
            dark:text-white
          "
          >- Admin</span
        >
      </a>

      <div class="w-full block w-auto" id="navbar-solid-bg">
        <ul
          class="
            flex
            mt-4
            rounded-lg
            flex-row
            space-x-8
            mt-0
            text-sm
            font-medium
            border-0
          
            bg-transparent
          "
        >
          <li>
            <router-link
              to="/"
              class="
              block
                text-gray-700
                rounded
                hover:bg-gray-100
                border-0
                p-0
                text-gray-400
                dark:hover:bg-gray-700 hover:text-light-orange
                hover:bg-transparent
              "
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              to="/addPost"
              class="
                block
                text-gray-700
                rounded
                hover:bg-gray-100
                border-0
                p-0
                text-gray-400
                dark:hover:bg-gray-700 hover:text-light-orange
                hover:bg-transparent
              "
              >Add Post</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>