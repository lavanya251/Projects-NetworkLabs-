async function asyncFunction() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await response.json();
  console.log(data);
  data.forEach((element) => {
    console.log(element.email);
  });
}
asyncFunction();
