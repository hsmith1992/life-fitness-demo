const { postToShopify } = require('./postToShopify')

// Creates a cart with a single item
exports.createCart = async () => {
  try {
    const response = await postToShopify({
      query: `
        mutation createCart($cartInput: CartInput) {
          cartCreate(input: $cartInput) {
            cart {
              id
              checkoutUrl
              createdAt
              updatedAt
            }
          }
        }
      `,
      variables: {},
    })

    return response
  } catch (error) {
    console.log(error)
  }
}
