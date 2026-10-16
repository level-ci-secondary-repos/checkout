export function renderCheckout(target) {
  const section = document.createElement('section')
  section.setAttribute('aria-labelledby', 'checkout-heading')
  section.innerHTML = `
    <h2 id="checkout-heading">Checkout</h2>
    <button type="button">Place order</button>
    <button type="button">Place order 2</button>
    <img src="./assets/images/testimonial-1.jpg">
    <input type="text">
    <iframe src="about:blank"></iframe>
  `
  target.append(section)
}
