export default `
  categories(first: 30) {
    edges {
      node {
        backgroundImage {
          url
        }
        id
        name
        description
      }
    }
  }
`;
