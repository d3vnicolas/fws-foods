export const currencyBrazil = (value: Number): String => {
  const formatValue = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return formatValue;
};
