export async function get_ml_out(uniq_id) {
  let results = [];

  await fetch("http://localhost:9000/request/ml_out?uniq_id=" + uniq_id, {
    method: "POST",
  })
    .then((response) => response.json())
    .then((data) => {
      results = data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  return results;
}
