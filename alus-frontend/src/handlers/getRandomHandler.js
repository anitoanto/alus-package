export async function getRandomImg(uniqueId, filename) {
  let seg = [];
  let normal = [];
  let objTag = [];

  await fetch(
    "http://localhost:9000/request/random?uniq_id=" +
      uniqueId +
      "&video_file_name=" +
      filename,
    {
      method: "POST",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      [seg, normal, objTag] = data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  return [seg, normal, objTag];
}
