---
title: Fees
---

The protocol collects fees using the following mechanisms:

- An origination fee of 0.5% (governable), which is added as debt to a trove but minted to governance.
- A refinancing fee, which operates like the origination fee.
- Simple, fixed interest on the principal of the loan.

There is a global, governable interest rate that all new troves use when they are opened but after that, changes to the global interest rate do not impact any existing troves. At any time, a user is allowed to refinance to the global rate.

Simple interest is non-compounding. As an example, when a user owes a principal of $10,000 at a 3% annual interest rate, the user owes $300 in interest after a year. After another year without paying, the users owes $600 in interest.