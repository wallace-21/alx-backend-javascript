export default function createIteratorObject(report) {
  const { allEmployees } = report;

  const employees = Object.values(allEmployees).flat();

  return employees[Symbol.iterator]();
}
