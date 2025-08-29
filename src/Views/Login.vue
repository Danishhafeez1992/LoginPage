<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

// Vue Router instance
const router = useRouter()

// Form fields
const email = ref('') // changed from username → email
const password = ref('')
const errMsg = ref('') // for error messages

// Login function
const login = async () => {
  const auth = getAuth()

  try {
    // Firebase login with email & password
    let response = await signInWithEmailAndPassword(auth, email.value, password.value)

    // API response → logged in user
    console.log('Successful Signed in ')
    console.log(auth.currentUser)
    // Success alert
    alert('Successfully Logged In ✅')
    router.push('homeview') // redirect to home page
  } catch (error) {
    const errorMessages = {
      'auth/invalid-email': 'Invalid email',
      'auth/user-not-found': 'No account found with this email',
      'auth/wrong-password': 'Incorrect password',
      'auth/invalid-credential': 'Incorrect email or password',
    }

    // sirf error code match karo
    errMsg.value = errorMessages[error.code] || 'Something went wrong'
  }
}
</script>

<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a
        href="#"
        class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img
          class="w-8 h-8 mr-2"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
          alt="logo"
        />
        Flowbite
      </a>
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Sign in to your account
          </h1>

          <form class="space-y-4 md:space-y-6" @submit.prevent="login">
            <!-- Email -->
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                v-model="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required
              />
            </div>

            <!-- Password -->
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                v-model="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <div>
              <p class="text-red-700" v-if="errMsg">{{ errMsg }}</p>
            </div>

            <!-- Remember + Forgot password -->
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                </div>
              </div>
              <a
                href="#"
                class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Forgot password?
              </a>
            </div>

            <!-- Login Button -->
            <button
              type="submit"
              class="w-full text-white focus:outline-none bg-red-700 font-medium rounded-lg text-lg px-5 py-2.5 text-center"
            >
              Sign in
            </button>

            <!-- Register link -->
            <RouterLink to="/register">
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?
                <span class="font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Sign up
                </span>
              </p>
            </RouterLink>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
