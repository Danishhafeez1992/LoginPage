<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const email = ref('')
const password = ref('')
const router = useRouter()

//// Sign up function

const register = async () => {
  const auth = getAuth()

  try {
    let response = await createUserWithEmailAndPassword(auth, email.value, password.value)

    // API ka response
    console.log({ response: response })

    // Success alert
    alert('User added successfully')
    router.push('/') // login page par redirect
  } catch (e) {
    console.log('Error occur', e)
    alert('Registration failed')
  }
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
      <h1 class="text-2xl font-bold text-center text-gray-800 mb-6">Sign Up</h1>

      <form class="space-y-5">
        <!-- Email -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            v-model="email"
            id="email"
            type="email"
            placeholder="Enter your email"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <!-- Password -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1"
            >Password</label
          >
          <input
            v-model="password"
            id="password"
            type="password"
            placeholder="Enter your password"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <!-- Submit Button -->
        <button
          @click="register"
          type="button"
          class="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition duration-200"
        >
          Sign Up
        </button>
      </form>

      <!-- Footer -->
      <p class="mt-6 text-center text-sm text-gray-600">
        Already have an account?
        <a href="/login" class="text-blue-600 hover:underline">Log in</a>
      </p>
    </div>
  </div>
</template>
