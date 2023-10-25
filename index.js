const btns = document.querySelector('.btns');
const content = document.querySelector('.content');

fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => paginate(json,1))


function paginate(data,index){
    const itemsPerPage = 10;
    let start = index * itemsPerPage;
    let end = start + itemsPerPage;
    const numberOfPage = data.length / itemsPerPage;

    btns.innerHTML = ''
    for(let i = 0; i < numberOfPage; i++){
        const btn = document.createElement('button');
        btn.innerText = i + 1;
        btns.appendChild(btn);
    }
    showContent(data.slice(start, end))

    const allbtn = document.querySelectorAll('button');
    allbtn.forEach((btn, idx) => {
        btn.addEventListener('click', (e) => {
            paginate(data, idx + 1)
        })
    })


}

function showContent(data){
    content.innerHTML = ''
    data.forEach(element => {
        const paragraph = document.createElement('p');
        paragraph.innerText = element.title;
        content.appendChild(paragraph);
    });
}