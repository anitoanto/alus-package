export async function downloadZip(uniqueId) {
  let url = "";
  await fetch("http://localhost:9000/download/zip?uniq_id=" + uniqueId, {
    method: "POST",
  })
    .then((response) => response.json())
    .then((data) => {
      url = data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  return url;
}
