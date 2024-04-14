async function fetchData() {
  let inputText = document.getElementById("inputtext").value;
  let response = await fetch(`https://api.github.com/users/${inputText}`);
  let data = await response.json();
  console.log(data);
  const img1 = document
    .querySelector("img")
    .setAttribute("src", data.avatar_url);
}
document.getElementById("btn2").addEventListener("click", fetchData);
