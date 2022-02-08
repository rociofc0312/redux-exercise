const url = "http://localhost:8080/candidates";

export async function getCandidates() {
  return await fetch(url)
    .then((response) => {
      if (response.ok) return response.json();
      throw response;
    })
    .catch((error) => {
      console.log("Error fetching: ", error);
    });
}
