export default `
products(first: 5, filter: { categories: $categories }) {
  edges {
    node {
      id
      name
      slug
      description
      pricing {
        priceRange {
          start {
            gross {
              amount
              currency
            }
          }
        }
        discount {
          gross {
            amount
            currency
          }
        }
        priceRangeUndiscounted {
          start {
            gross {
              amount
              currency
            }
          }
        }
      }
      thumbnail(size: 510) {
        url
      }
      images {
        url
      }
    }
  }
}
`;
