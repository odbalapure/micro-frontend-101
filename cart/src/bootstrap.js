import faker from 'faker';

const mount = (el) => {
    const cartText = `<div>You have <strong>${faker.random.number()}</strong> items in the cart</div>`;

    el.innerHTML = cartText;
};

// Context #1
// Running products locally and assuming element with id 'dev-cart' exists
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-cart');

    if (el) {
        mount(el);
    }
}

// Context #2
// Running products inside a container (ecomm)
export { mount };
