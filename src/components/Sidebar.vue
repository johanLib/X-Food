<template>
    <aside class="cart-container">
        <div class="cart">
          <h1 class="cart-title spread">
              Cart
            <button @click="toggle" class="cart-close">
              <i class='bx bx-x'></i>
            </button>
          </h1>

          <div class="cart-body">
            <table class="cart-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                  <th><span>Actions</span></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(quantity, key, i) in cart" :key="i">
                  <td>{{ key }}</td>
                  <td>${{ getPrice(key) }}</td>
                  <td class="center">{{ quantity }}</td>
                  <td>${{ quantity * getPrice(key) }}</td>
                  <td class="center">
                    <button @click="remove(key)" class="btn x-btn">
                      <i class='bx bxs-trash-alt'></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

            <p class="empty-message" v-if="!Object.keys(cart).length"><em>No items in cart</em></p>
            <div class="spread">
              <span><strong>Total:</strong> <span class="total">${{ calculateTotal() }}</span></span>
              <button class="btn checkout-btn">Checkout</button>
            </div>
          </div>
        </div>
      </aside>
</template>

<script>
    export default {
        props: ['toggle','cart','inventory','remove'],
        methods: {
            getPrice(name) {
              const product = this.inventory.find((p) => {
                  return p.name === name
              })
              return product.price.USD
            },
            calculateTotal() {
            const total = Object.entries(this.cart).reduce((acc, curr) => {
                return acc + (curr[1] * this.getPrice(curr[0]))
            }, 0)
            return total.toFixed(2)
            }
        }
    }
</script>

<style scoped>
.cart-container {
    position: fixed;
    top: 0;
    right: 0;
    width: 40%;
    box-shadow: -2px 0px 10px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
    z-index: 1000;
    border-radius: 0.8rem;
    border: 1px solid #ddd;
  }
.cart {
  background-color: var(--bgcart-color);
  overflow: hidden;
}

.cart-title {
  background-color: var(--main-color);
  color: #fff;
  padding: 5px 15px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart-close {
  font-size: 2rem;
  background: none;
  border: none;
  outline: none;
  color: white;
  cursor: pointer;
}
.empty-message {
  text-align: center;
  margin: 2rem 0;
}
.cart-body {
  padding: 15px;
}

.cart-table {
  width: 100%;
  border-collapse: collapse;
}

.cart-table th,
.cart-table td {
  padding: 12px;
  text-align: left;
}

.cart-table th {
  background-color: var(--th-color);
}

.cart-table td.center {
  text-align: center;
}

.x-btn{
  background: none;
  border: none;
  color: rgb(70, 67, 67);
  font-size: 1.7rem;
  padding: 0;
  cursor: pointer;
}

/* Total and Checkout Styles */
.spread {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.spread strong {
  margin-right: 8px;
}
.spread .total {
  color: #22A699;
  font-size: 1rem;
}
.checkout-btn {
  border: none;
  outline: none;
}
</style>
