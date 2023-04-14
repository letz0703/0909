import { use } from "react"

export const UseFetchUrl = ({ url, shouldFetch }) => {
  let data = "Default Data"
  if (shouldFetch) {
    data = use(fetch(url).then((res) => res.json()))
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

// usehook 사용하는 곳에 다음 추가
//<ErrorBoundary fallback={<div>Error</div>}>
//<Suspense fallback={<div>Loaing...</div>}>
//<Data url={url} shouldFetch />
