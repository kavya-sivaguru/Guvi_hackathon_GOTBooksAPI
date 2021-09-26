const booksApiUrl = "https://www.anapioficeandfire.com/api/books";
const charApiUrl = "https://www.anapioficeandfire.com/api/characters";
let char = [];


const getBookData = async () => {
    try {
        const resp = await fetch(booksApiUrl);
        const data = await resp.json();

        // console.log(data[0].name)
        showTableData(data)
    } catch (error) {
        console.log(error);
    }

}
getBookData();

const getCharData = async () => {
    try {
        const resp = await fetch(charApiUrl);
        const data = await resp.json();

        console.log(data)
        // showTableData(data)
    } catch (error) {
        console.log(error);
    }

}
getCharData();


const showTableData = (data) => {
    const tbody = document.getElementById("tbody")
    let count = 1;

    data.forEach((e) => {
        for (let i = 0; i < 5; i++) {
            char[i] = e.characters[i];
            // console.log(char[1]);
        }
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
        td8 = document.createElement("td");
        tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
        tbody.append(tr);

    })

}
