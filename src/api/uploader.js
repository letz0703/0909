export async function uploadImage(file) {
  const {NEXT_PUBLIC_CLOUDINARY_PRESET, NEXT_PUBLIC_CLOUDINARY_URL} = process.env

  const data = new FormData()
  data.append("file", file)
  data.append("upload_preset", NEXT_PUBLIC_CLOUDINARY_PRESET)
  return fetch(NEXT_PUBLIC_CLOUDINARY_URL, {
    method: "POST",
    body: data
  })
    .then(res => res.json())
    .then(data => data.url)
}
