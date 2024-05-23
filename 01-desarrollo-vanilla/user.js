export async function getRandomUser() {
  const radonmInt = Math.floor(Math.random() * 100) + 1;
  
  const response = await fetch(`https://dummyjson.com/users/${radonmInt}`);

  const user = await response.json();

  return filterData(user);
}

function filterData({
  id,
  firstName,
  lastName,
  email,
  age,
  gender,
  birthDate,
  image,
}) {
  return { id, firstName, lastName, email, age, gender, birthDate, image };
}
