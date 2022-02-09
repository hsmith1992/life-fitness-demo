export const formatCurrency = (amount, currency) => {
  const amountFloat = Number(amount).toFixed(2)
  const currencySymbols = {
    USD: '$', // US Dollar
    EUR: '€', // Euro
    CRC: '₡', // Costa Rican Colón
    GBP: '£', // British Pound Sterling
    ILS: '₪', // Israeli New Sheqel
    INR: '₹', // Indian Rupee
    JPY: '¥', // Japanese Yen
    KRW: '₩', // South Korean Won
    NGN: '₦', // Nigerian Naira
    PHP: '₱', // Philippine Peso
    PLN: 'zł', // Polish Zloty
    PYG: '₲', // Paraguayan Guarani
    THB: '฿', // Thai Baht
    UAH: '₴',
    VND: '₫',
  }

  return (
    `${currencySymbols[currency]}` +
    amountFloat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  )
}
