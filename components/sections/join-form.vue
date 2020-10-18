<template>
  <form
    class="w-full max-w-lg"
    name="join"
    action="/join-thanks"
    method="POST"
    netlify
    netlify-honeypot="bot-field"
  >
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="label required" for="first-name"> First Name </label>
        <input
          id="first-name"
          name="first-name"
          class="input"
          type="text"
          required
        />
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label class="label required" for="last-name"> Last Name </label>
        <input
          id="last-name"
          name="last-name"
          class="input"
          type="text"
          required
        />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label class="label required" for="email"> Email </label>
        <input id="email" name="email" class="input" type="email" required />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label class="label" for="phone"> Phone Number </label>
        <input id="phone" name="phone" class="input" type="phone" />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-10">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="label" for="city"> City </label>
        <input id="city" name="phone" class="input" type="text" />
      </div>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="label" for="state"> State </label>
        <div class="relative">
          <select id="state" name="state" class="input">
            <option value="" disabled selected>Choose</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
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
    <div class="mb-6">
      <input
        type="submit"
        class="cursor-pointer text-white py-3 px-8 uppercase tracking-widest rounded-sm bg-blue transition hover:bg-blue-light"
        value="Submit"
      />
    </div>
  </form>
</template>

<script>
export default {};
</script>
