<template>
    <div class="login" v-if="showLogin">
        <form action="" class="login-form">
        <h2 class="login-title">Log In</h2>
        <div class="login-group">
            <div>
                <label for="email" class="login-label">Email</label>
                <input type="email" placeholder="Write your email" id="email" class="login-input">
            </div>
            <div>
                <label for="password" class="login-label">Password</label>
                <input type="password" placeholder="Enter your password" id="password" class="login-input">
            </div>
        </div>
        <div>
            <p class="login-signup">
                You do not have an account? <span class="signup-btn" @click="toggleForm">Sign up</span>
            </p>
            <a href="#" class="login-forgot">
                You forgot your password
            </a>
            <button type="submit" class="login-button">Log In</button>
        </div>
        </form>
        <i class="bx bx-x login-close" @click="toggle"></i>
    </div>


    <div class="signup" v-else>
      <form action="" class="signup-form">
        <h2 class="signup-title">Sign Up</h2>
        <div class="signup-group">
          <div>
            <label for="signup-email" class="signup-label">Email</label>
            <input type="email" placeholder="Write your email" id="signup-email" class="signup-input">
          </div>
          <div>
            <label for="signup-password" class="signup-label">Password</label>
            <input type="password" placeholder="Enter your password" id="signup-password" class="signup-input">
          </div>
          <div>
            <label for="signup-confirm-password" class="signup-label">Confirm Password</label>
            <input type="password" placeholder="Confirm your password" id="signup-confirm-password" class="signup-input">
          </div>
        </div>
        <div>
          <p class="login-signup">
            Already have an account? <span @click="toggleForm" class="login-btn">Log in</span>
          </p>
          <button type="submit" class="signup-button">Sign Up</button>
        </div>
      </form>
      <i class="bx bx-x signup-close" @click="toggle"></i>
    </div>
</template>

<script>
export default {
    name: 'LoginComponent',
    props: ['toggle'],
    data() {
        return {
            showLogin: true
        }
    },
    methods: {
        toggleForm() {
            this.showLogin = !this.showLogin
        }
    }
}
</script>