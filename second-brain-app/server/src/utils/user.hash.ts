export default function generateHash() {
  const options =
    "ad5adf4868aab9986e890dc7730abb895ee7f21271c5568cf0e2f2e21eca9719569f183750106959445929910103ce04a4856b2cb15836a0f3b5b631137424a6";
  let hash = "";

  for (let i = 0; i < 10; i++) {
    hash += options[Math.floor(Math.random() * options.length)];
  }

  return hash;
}
