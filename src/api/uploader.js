export async function uploadImage(file) {
  const {VITE_CLOUDINARY_PRESET, VITE_CLOUDINARY_URL} = import.meta.env

  const data = new FormData()
  data.append("file", file)
  data.append("upload_preset", VITE_CLOUDINARY_PRESET)
  return fetch(VITE_CLOUDINARY_URL, {
    method: "POST",
    body: data
  })
    .then(res => res.json())
    .then(data => data.url)
}
