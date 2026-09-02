// app/products/layout.js — metadata for /products/ (the page itself is a client component and
// cannot export metadata). Product detail pages under /products/[slug]/ define their own.

export const metadata = {
  title: 'Digital Products for Accounting Pros & Sellers',
  description:
    'Templates and calculators from a working practice: tax prep onboarding, capacity and rate calculators, FBA reimbursement and quarterly tax tools.',
}

export default function ProductsLayout({ children }) {
  return children
}
