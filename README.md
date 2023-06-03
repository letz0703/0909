🖥 WIP...
twitter link 수정 2023.06.01/목
[1][icanmart]


#31 detail page amount 0 problem

#56 Input 위치 조정 295eb37094c3fdc33d9f5993a512645419b5e111

#54 휴대폰서 구글 로그인 추가 하기 : 2023.05.24/수
https://arc.net/e/6DEED571-0F1C-45D9-9570-84D44EC1961D
[] https://www.notion.so/AI-ca797d27af4f4a1db59f5a40fabc1a59?pvs=4 ai 연습 ,,ai
[] input for addressTo, cellPhone
[] useRef적용


<!-- TODO -->

2023.03.30/목 useRef 복습 : https://bit.ly/40INJmm
이전 페이지 prev page

### public image

./imgs or ../imgs

<img src="./imgs/ic_barcode.svg"

> hide div
> className="hidden md:block"

> window.location.replace(document.referrer)
> [] store page 수정( 수량, 디테일 페이지 링크 )

---

# done & next

2023.02.25/토: list jorders
read and update delivery status
gh: https://bit.ly/3KASD06
→ 사용자가 자기 주문 보기

2023.02.13/월
jOrder RealTime DB

thinkwise: https://web.thinkwise.co.kr/map/49720/41480
firebase rdb : https://bit.ly/3jziZ7i
onenote(web): https://bit.ly/3wWYK6O

ellie : 14.16 cloudinary image file to FB
dones
⌣⌣⌣⌣
2023.02.07/화
ellie : image upload to cloudinary : https://academy.dream-coding.com/courses/player/react/lessons/1535
ellie : https://academy.dream-coding.com/courses/player/react/lessons/1536 form 입력

## Slider

https://youtu.be/SK9AlIbexOE?t=506 슬라이더 강의

### My Orders

<!-- HISTORY -->

## Detail : item detail 디테일

gh : https://github.com/letz0703/0909/commit/a8c952bb3dac45bd6ea3c4fca022b66059682f2d

### Detail sliding

2023.01.22/일 OK store open detail

# http://icanmart.netlify.com/

WDS : https://www.youtube.com/watch?v=lATafp15HWA&t=1546s
next to learn: Array filter method https://www.youtube.com/watch?v=2lgiV1urWQs 2023.01.08/일
PopCart.jsx : https://share.cleanshot.com/gXBnGNSG
isOpen : https://youtu.be/lATafp15HWA?t=2685
store image : https://youtu.be/lATafp15HWA?t=127결

## API folder

youtube.js
fakeYoutube : https://bit.ly/3FwoQ4v ellie le
refactor
gh: https://bit.ly/3PEpEZB

## AUTH

authorize domain @fireabse authentication : wizbox auth domain
onAuthStateChanged : keep session.
https://firebase.google.com/docs/auth/web/start#:~:text=%3D%20getAuth()%3B-,onAuthStateChanged(,-auth%2C%20(

FireBase : google auth
Realtime DB
yarn add firebase:
base : https://bit.ly/3v4mzZa

## Banner

14.20 gh: https://bit.ly/3PJhcIE
2022.12.22/목

## beta

- 🏡 react https://beta.reactjs.org/
  [] https://react-bootstrap.github.io/

### Boot Strap

🏡 https://react-bootstrap.github.io/getting-started/introduction

> npm install react-bootstrap bootstrap

@page : import "bootstrap/dist/css/bootstrap.min.css"

## Button

disable button

> disabled={isUploading}

gh:https://bit.ly/3FHIz1a
{user && <Button text={"logout"} onClick={handleLogout} />}
@src/component/ui/button.jsx

## Card

@VideoCard
type = 'list'
const isList = type === 'list'
className={isList? 'flex gap-1 m-2' :''}

## Cart

hook : useCart.jsx

## Caching

mutate : gh https://bit.ly/3hQcg8g

invalidate cache useMutation for invalidate and staleTime

```js
const addProduct = useMutation(
  ({ product, url }) => addNewProduct(product, url),
  {
    onSuccess: () => queryClient.invalidateQueries(["products"]),
  }
)
```

https://bit.ly/3BKkQvV

const {data: url} = useQuery(
["channel", id],
async () => youtube.channelImageURL(id),

```js
{
  staleTime: 1000 * 60 * 5
}
```

)

# Cart

CartDesign w/ border
gh:

CartItem.jsx

totalprcie :
SHIPPING

const totalPrice =
products &&
products.reduce((prev, cur) => prev + parseInt(cur.price) \* cur.quantity, 0)

````

Menubar Icon : gh : https://bit.ly/3hQeaWr
CartStatus component
top menu icon numbering : https://bit.ly/3Wm9p5X gh
Add to cart
gh: https://bit.ly/3vvrmU5

@firebase.js
afun getCart(userId)
afun addOrUpdateToCart
afun removeFromCart
gh: https://bit.ly/3Gewa6f

## Context

YoutubeApi
gh: https://bit.ly/3FxXTx3
lec: https://bit.ly/3uV3iJI

## Data

- stub // mock data https://bit.ly/3uRA6DE
- mock || real data https://bit.ly/3j4btkj
  const youtube = new Youtube() or new FakeYoutube

## Detail Page

youtube - https://bit.ly/3YoEZ4q
base : https://bit.ly/3v7KJSS gh
design:pic https://share.cleanshot.com/9fPLsp3d
gh: https://bit.ly/3Wib8cz

## ENV with VITE

const {VITE_keyname} = import.meta.env
netlify: pic. https://share.cleanshot.com/70qb8x

## Firebase

npm install firebase
src/api/firebase.js
amdin lecture : https://bit.ly/3BO1d6h
https://github.com/letz0703/0909/commit/861381b9bbaa02838322fde7eeb66be99247ca49

### Realtime Database

https://bit.ly/3V7hFoT
admins {"0":"uid"}

# Storage
DB 선택 : https://firebase.google.com/docs/database/rtdb-vs-firestore?hl=ko
FB vs Realtime


## hooks

useProduct : https://bit.ly/3BZmzOa gh

## image


tailwind image : https://tailwindcss.com/docs/object-fit#resizing-to-cover-a-container
cloudinary : https://bit.ly/3hD3SJd
upload presets : https://bit.ly/3je4mWq
Upload
https://api.clodunary.com/v1_1/<cloud name>/l<resource_type>/upload

## Intl
wds : https://youtu.be/4oGWpTAY_hc?t=136

## JSON

stringify : https://youtu.be/lATafp15HWA?t=1057 shopping items example

## Query

> yarn add @tanstack/react-query
> const queryClient = new QueryClient();

## React Query

<!-- TODO : Read ↓ -->

📃 https://tkdodo.eu/blog/practical-react-query#create-custom-hooks

## Route

- Protect : lecture : https://academy.dream-coding.com/courses/player/react/lessons/1537
  gh: https://bit.ly/3HQ1JEQ

```js //@main.jsx
<ProtectedRoute requireAdmin>
  <AllProducts />
</ProtectedRoute>
```

@ProtectedRoute.jsx

## Media

Cloudinary doc: https://cloudinary.com/documentation
lecture: https://bit.ly/3hLFXHx
netlify env : https://cli.netlify.com/commands/env/ doc
netlify cli > netlify env:import .env

## Navigation

- keyword change : https://bit.ly/3BAyXE8 gh
  <SearchHeader>
  el: https://bit.ly/3j0cF8k
  gh: https://bit.ly/3Pt9pyp

https://bit.ly/3PoIuUD <- react-router-dom
gh:https://bit.ly/3hnm21q
lecture:https://bit.ly/3VXQMFs - Detail
상세페이지, Dynamic Parameter - useParam()
@CanItemDetail.jsx

```js
const { itemName } = useParams()
```

## Netlify

Cli
npm install netlify-cli -g

https://cli.netlify.com/commands/env DOC

> netlify link 먼저 해줘야 에러 안남.
> 그런 후 netlify env:import .env

## New Product

image upload : https://bit.ly/3hLFXHx lecture 14.15
upload image to cloudinary gh : https://bit.ly/3HT5Cso
add to firebase
@firebase.js : Add Product, uuid
</SearchHeader>

### Offcanvas

Fix: close button not showing
paste below to index.css ↓↓
.btn-close {
background: transparent
url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e")
center/1em auto no-repeat;
}

## Search

narrow down search: youtube https://www.youtube.com/watch?v=xAqCEBFGdYk
gh : https://bit.ly/3ZjKwtD

## Split : Code-Spliting https://reactjs.org/docs/code-splitting.html

for slow site

### SSL OpenSSL

## Tanstack Query

> npm i @tanstack/react-query @tanstack/react-query-devtools

##### Timeout

```javascript
setTimeout(() => {
  setSuccess(null)
}, 4000)
```

# useRef : persist value between render

component : Notice.jsx
const nameRef = useRef('')

useEffect = () => {
nameRef.current.focus()
,[]}

# TOOLS

- prettier : youtube: https://youtu.be/DqfQ4DPnRqI?t=246

  - npm i --save-dev eslint-config-prettier

        - npx eslint-config-prettier script.js
        - package.json

  ```json
    "eslintConfig": {
    "extends": "react-app",
    "rules": {
    "no-unused-vars": [
    "warn",
    {
    "argsIgnorePattern": "^_",
    "varsIgnorePattern": "^_"
    }
    ]
    }
    },
  ```

```

```

- yarn add -D @tailwindcss/line-clamp 2줄 이상 금지

- yarn add timeago.js
  gh: https://bit.ly/3HGj42J
  import \* as timeago from 'timeago.js'
  format('2016-06-12','en_US'), format(publishedAt)
  locale
  import {format, register} from 'timeago.js'
  import koLocale from 'timeago.js/lib/lang/ko'
  register('ko', koLocale)
  <p>{format(publishedAt, 'ko')}</p>
- yarn add axios
  > gh : https://bit.ly/3Wl2kCh replace fetch w/ axios
- yarn add -D tailwindcss
- rapid api : youtube video https://www.youtube.com/watch?v=MTrj3tNf9jA
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

Tips

###### settings

- show color for tailwind : vscode setting -> "tailwindCSS.colorDecorators": true,

##### DESIGN

hover
transition-all hover:scale-105
https://bit.ly/3hwLpOh tailwind youtube

###### study later

- accessibility
- portal for insertin child to different location in DOM
- higher order component

###### ref

## router

- react blog : https://bit.ly/3I1Rv4b

# MUST

awesome components: https://github.com/brillout/awesome-react-components


[icanmart]: https://icanmart.co.kr
[1]: https://www.naver.com

