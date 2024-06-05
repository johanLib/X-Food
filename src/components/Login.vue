<template>
    <div class="login" id="login">
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
                You do not have an account? <a href="#">Sign up</a>
            </p>
            <a href="#" class="login-forgot">
                You forgot your password
            </a>
            <button type="submit" class="login-button">Log In</button>
        </div>
        </form>
        <i class="bx bx-x login-close" id="login-close"></i>
    </div>
</template>

<script>
export default {
    name: 'LoginComponent'
}
</script>