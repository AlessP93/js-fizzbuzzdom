// Scrivi un programma che stampi in console i numeri da 1 a 100.
const list = document.querySelector(".list")
for (let i = 1; i <= 100; i++){
    // const element = `<li>${i}</li>`;
    // list.innerHTML = list.innerHTML + element;
    const element = document.createElement("li");
    element.classList.add("item");
    element.innerHTML = i;
    list.append(element);
}