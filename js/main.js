// Scrivi un programma che stampi in console i numeri da 1 a 100
const list = document.querySelector(".list")
for (let i = 1; i <= 100; i++) {
    // const element = `<li>${i}</li>`;
    // list.innerHTML = list.innerHTML + element;
    const element = document.createElement("li");
    element.classList.add("item");
    element.innerHTML = i;
    list.append(element);

    // Per i multipli di entrambi stampi "FizzBuzz".
    // if (i % 3) == 0 && (i % 5) == 0 {
    //     element.classList.add("fizzbuzz");
    //     console.log ("element");
    // }
    
    // Per i multipli di 3 stampi “fizz” al posto del numero.
    if  (i % 3 == 0 && i % 5 == 0) {
        element.classList.add("fizzbuzz");
    }

    else if (i % 3 == 0) {
        element.classList.add("fizz");
    }

    else if (i % 5 == 0) {
        element.classList.add("buzz");
    } 
    
    else {
        element.innerHTML = i
        console.log (i)
    }
    
    
}



