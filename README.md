# http://icanmart.netlify.com/

## Navigation

https://bit.ly/3PoIuUD <- react-router-dom
gh:https://bit.ly/3hnm21q
lecture:https://bit.ly/3VXQMFs - Detail
상세페이지, Dynamic Parameter - useParam()
@CanItemDetail.jsx

```js
const {itemName} = useParams()
```

- TOOLS
  - .gitignore
  - .vscode
  - yarn add react-router-dom : {CreateBrewserRouter} - https://bit.ly/3ho7XRp //2022.12.13/화
  - yarn add tanstack-react-query: 2022.12.14/수
  - yarn add @tanstack/react-query-devtools
    - gh : https://bit.ly/3uM0IWs <- set interval and refetch
    - option : staleTime
    - https://bit.ly/3Px8nla
      > up: import {ReactQueryDevtools} from "@tanstack/react-query-devtools"
      > down: <ReactQueryDevtools initialIsOpen={true} />
    - invalidate query: refetch right after adding new product with tanstack
    ```js
    <button
      onClick={() => {
        client.invalidateQueries(["products", false])
      }}
    >
      updated!
    </button>
    ```
