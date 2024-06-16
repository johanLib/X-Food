<template>
    <div :style="placeholderStyle" class="placeholder">
      &nbsp;
    </div>
  </template>
  
  <script>
  export default {
    name: 'AnimatedPlaceholder',
    props: {
      width: {
      type: String,
      default: '100px'
      },
      height: {
        type: String,
        default: '100px'
      },
      borderRadius: {
        type: String,
        default: '0px'
      }
    },
    computed: {
      placeholderStyle() {
        return {
          width: this.width,
          height: this.height,
          borderRadius: this.borderRadius,
          background: 'linear-gradient(to right, #d6d7d8 0%, #e2e3e4 10%, #d6d7d8 20%, #d6d7d8 100%)',
          backgroundSize: '200% 100%',
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
          animation: 'pulse 1.2s linear infinite'
        };
      }
    }
  }
  </script>