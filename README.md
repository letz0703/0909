# http://icanmart.netlify.com/

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

## Caching

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

Add to cart
gh:

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

### show-Icons - only for Admin

```js
{
  user && user.isAdmin && (
    <Link to="/product/new" className="2xl">
      <BsFillPencilFill />
    </Link>
  )
}
```

## image

cloudinary : https://bit.ly/3hD3SJd
upload presets : https://bit.ly/3je4mWq
Upload
https://api.clodunary.com/v1_1/<cloud name>/l<resource_type>/upload

## Query

> yarn add @tanstack/react-query
> const queryClient = new QueryClient();

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
const {itemName} = useParams()
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

### SSL OpenSSL

##### Timeout

```javascript
setTimeout(() => {
  setSuccess(null)
}, 4000)
```

- TOOLS

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
