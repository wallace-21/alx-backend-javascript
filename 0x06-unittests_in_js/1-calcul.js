const calculateNumber = (type, a, b) => {

  if (type === "SUM") {
    const sum = Math.round(a) + Math.round(b)
    return (sum);
  } else if (type === "SUBTRACT") {
      const sub = Math.round(b) - Math.round(a)
      return (sub);
  } else if (type === "DIVIDE") {
      const div = Math.round(a) / Math.round(b)
      if (Math.round(b) === 0) {
         return ("Error");
      }
      return (div);
  }
};

module.exports = calculateNumber;
