const calculateNumber = (type, a, b) => {

  if (type === "SUM") {
    sum = Math.round(a) + Math.round(b)
    return (sum);
  } else if (type === "SUBTRACT") {
      sub = Math.round(b) - Math.round(a)
      return (sub);
  } else if (type === "DIVIDE") {
      div = Math.round(a) / Math.round(b)
      if (Math.round(b) === 0) {
         return ("Error");
      }
      return (div);
  }
};

module.exports = calculateNumber;
