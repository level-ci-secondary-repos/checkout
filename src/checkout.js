export function renderCheckout(target) {
  const section = document.createElement('section')
  section.setAttribute('aria-labelledby', 'checkout-heading')
  section.innerHTML = `
    <h2 id="checkout-heading">Checkout</h2>
    <button type="button">Place order</button>
  `
  target.append(section)
}
