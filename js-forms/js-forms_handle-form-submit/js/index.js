console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);
  event.target.reset();
  console.log(data.firstName);

  // ## Bonus: Calculate and log the age-badness-sum 🤷‍♀️
  console.log(
    `The age-badness-sum of ${data.firstName} is: `,
    Number(data.age) + Number(data.badness)
  );
});
