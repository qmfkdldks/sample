# Maum

E-commerce site built on [Next.js](https://nextjs.org/)
Interacts with [Saleor](https://saleor.io/) backend using GraphQL

# Tech stack

## [maum](https://github.com/qmfkdldks/maum)

Frontend app which customers visit and order. React server side rendered app Powered by GraphQL

Built with:

- framework: next.js react.js
- style: styled-component storybook
- test: jest cypress
- lint: eslint prettier
- deploy: zeit

# Setup

1. Install NVM (node version manager)
2. Install Node +10
3. Install yarn
```sh
git clone git@github.com:qmfkdldks/maum.git
yarn
yarn dev
```

# Folder structure convention

### Page:

...

### Component:

When you create new component
Every component should have following files

```
new-component
├── component.jsx
├── index.js(x)
├── story.jsx
└── test.js should import component
```
component.jsx 
shouldn't interact with api or external sources directly. Always get callbacks as props. This makes super easy to test the component

index.js:
here we preprocess necessary data and inject data as props to the component. Here we disconnect dependency between external data source with the vidual component

style.js:
export all styled object generated from styled-component. `component.jsx` imports styled objects. This way we no longer will have direct tag use in `component.jsx`

story.jsx:
component specific storybook implementation. You should add different stories for the component to simulate different situations. Highly recommended to use [addons](https://storybook.js.org/addons/)

# Lint

We recommend you to use `yarn lint` before pushing new feature branch to remote git server

# Workflow CI/CD

1. Create new issue or ticket describing the goal and tecnical detail
2. Create new feature branch from master and start adding relevant commits in local git
3. When new feature is complete, push new branch to remote git. Create new pull request from github site
4. [Zeit](https://vercel.com/docs/v2/introduction#) automatically builds and deploy new feature branch app (preview app). You should test newly added feature or style
5. Merge pull request then master branch will be deployed in production
