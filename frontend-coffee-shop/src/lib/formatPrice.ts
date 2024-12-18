export function formatPrice(price: number) {
  const priceFormated = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  })

  const formated = priceFormated.format(price);

  return formated;
}