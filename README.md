# Components

- `npx create-react-app hello-world-utkal` Uses create react app with npx 
- `npm start` Starts the development server
- `npm run build` Bundles the app into static files for production
- `npm test` Starts the test runner
- `npm run eject` Removes this tool and copies build dependencies, configuration files and scripts into the app directory. If you do this, you can’t go back!


# Contribute
- Declare function name with Capitalcase, this is a convention used by React in the same page
- Function can be declared lower case if this is exported at the end and used somewhere else
- VS Code Extensions recommended 
  - Add Extension - **Prettier** for formatting. Change settings for format to format on save and paste
  - Add following the (User) settings.json  `"emmet.includeLanguages": {"javascript": "javascriptreact"}` 
  - Add Extension - **ES7+ React/Redux/React-Native/JS snippets** . This allows to create boiler plate code by just typing `rafce` in an empty js file. [More Formats](https://github.com/chillios-ts/vscode-react-javascript-snippets/blob/185bb91a0b692c54136663464e8225872c434637/docs/Snippets.md) 




## JSX Best practice
- Remember to return only one item as return value from the js function
- Follow HTML semantics or use `React.Fragment`
- Use camelCase for html attribute, this is **mandatory**
