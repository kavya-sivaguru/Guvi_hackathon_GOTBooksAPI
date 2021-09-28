const booksApiUrl = "https://www.anapioficeandfire.com/api/books";

let charApi = [];
let characters = ""

const getBookData = async () => {
    try {
        const resp = await fetch(booksApiUrl);
        const data = await resp.json();
        showTableData(data)
    } catch (error) {
        console.log(error);
    }

}
getBookData();

let showTableData = (data) => {
    const tbody = document.getElementById("tbody")
    let count = 1;

    data.forEach((e) => {


        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        td1.innerHTML = count++;
        const td2 = document.createElement("td");
        td2.innerHTML = e.name;
        const td3 = document.createElement("td");
        td3.innerHTML = e.isbn;
        const td4 = document.createElement("td");
        td4.innerHTML = e.numberOfPages
        const td5 = document.createElement("td");
        td5.innerHTML = e.authors;
        const td6 = document.createElement("td");
        td6.innerHTML = e.publisher;
        const td7 = document.createElement("td");
        td7.innerHTML = e.released;
        const td8 = document.createElement("td");

        tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
        tbody.append(tr);

        for (let i = 0; i < 5; i++) {
            charApi[i] = e.characters[i];
        }

        for (let i = 0; i < 5; i++) {

            let getCharData = async () => {
                try {
                    const resp = await fetch(charApi[i]);
                    const data = await resp.json();
                    characters += data.name + " ";
                    td8.innerHTML = characters + ".";

                } catch (error) {
                    console.log(error);
                }
            }
            getCharData();
        }

    })

}