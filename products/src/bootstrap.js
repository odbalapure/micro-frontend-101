import faker from 'faker';

const mount = (el) => {
    let products = '';

    for (let i = 0; i < 5; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }

    console.log(products);
    el.innerHTML = products;
};

// Context #1
// Running products locally and assuming element with id 'dev-products' exists
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products');

    if (el) {
        mount(el);
    }
}

// Context #2
// Running products inside a container (ecomm)
export { mount };
