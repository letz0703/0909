const CURRENCY_FORMATER = new Intl.NumberFormat(undefined, {
  currency: "KRW",
  style: "currency"
})

export default function FormatCurrency(number) {
  return CURRENCY_FORMATER.format(number)
}
