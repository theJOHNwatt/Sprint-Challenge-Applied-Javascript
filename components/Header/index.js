// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const
        headerCont = document.createElement('div'),
        date = document.createElement('span'),
        title = document.createElement('h1'),
        temp = document.createElement('span');

    headerCont.appendChild(date);
    headerCont.appendChild(title);
    headerCont.appendChild(temp);

    headerCont.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    date.textContent = 'MARCH 28, 2019';
    title.textContant = 'Lambda Times';
    temp.textContent = '98°';

    return headerCont;
}

const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());