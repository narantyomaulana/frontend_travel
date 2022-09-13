export default number => {
  const formatNumbering = new Intl.NumberFormat("id-ID");// Api Browser
  return formatNumbering.format(number);
}