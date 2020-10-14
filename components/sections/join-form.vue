<template>
  <form class="w-full max-w-lg">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="label" for="first-name"> First Name </label>
        <input id="first-name" class="input" type="text" />
        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label class="label" for="last-name"> Last Name </label>
        <input id="last-name" class="input" type="text" />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label class="label" for="email"> Email </label>
        <input id="email" class="input" type="email" />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label class="label" for="phone"> Phone Number </label>
        <input id="phone" class="input" type="phone" />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="label" for="city"> City </label>
        <input id="city" class="input" type="text" />
      </div>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="label" for="state"> State </label>
        <div class="relative">
          <select id="state" class="input">
            <option>New Mexico</option>
            <option>Missouri</option>
            <option>Texas</option>
          </select>
          <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
          >
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {};
</script>
