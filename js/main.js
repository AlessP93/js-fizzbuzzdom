// Scrivi un programma che stampi in console i numeri da 1 a 100
const list = document.querySelector(".list")
for (let i = 1; i <= 100; i++){
    // const element = `<li>${i}</li>`;
    // list.innerHTML = list.innerHTML + element;
    const element = document.createElement("li");
    element.classList.add("item");
    element.innerHTML = i;
    list.append(element);
}

// Per i multipli di 3 stampi “Fizz” al posto del numero.
// Per i multipli di 5 stampi "Buzz" al posto del numero.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.