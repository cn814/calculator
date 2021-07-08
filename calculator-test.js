
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 10000,
    years: 8,
    rate: 5.8,
  };
  expect(calculateMonthlyPayment(values)).toEqual('130.44');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 10043,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('131.00')
});

it('should calculate very small interest loans', function() {
  const values={
    amount:100,
    years:5,
    rate:0.1
};
expect(calculateMonthlyPayment(values)).toEqual('1.67')
});