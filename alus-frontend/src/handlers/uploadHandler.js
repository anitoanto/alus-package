export async function uploadToServer(files) {
  let [uploadStatus, uniqueId, count] = ["", "", 0];
  let formData = new FormData();
  for (let i = 0; i < files.length; i++) {
    formData.append("files", files[i]);
  }

  await fetch("http://localhost:9000/upload/videos", {
    body: formData,
    method: "POST",
  })
    .then((response) => response.json())
    .then((data) => {
      [uploadStatus, uniqueId, count] = data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  if (uploadStatus == "success") {
    return [uniqueId, count];
  } else {
    console.log("upload failed");
  }
}
