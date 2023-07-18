const gridList = document.querySelector('.grid__list')
// const author = document.querySelector('.grid__author-link')
const API_LINK = 'https://api.unsplash.com/photos/random'
const API_KEY = '?client_id=7c511c48c59d892d7a703f33e465470c3958fbbbc57a5f32c5cf1320f4f72e11&count=10'

const URL = API_LINK + API_KEY

// fetch(URL)
// .then(res => res.json())
// .then(res => console.log(res));

// showPhotos()

async function test() {
    try {
         const res = await fetch(URL)
         const data = await res.json() 
        console.log(data);
        renderPhotos(data)

    } catch {
        console.log('nope');
    }
    
}

test()





function renderPhotos(data) {

    data.forEach(element => {

        const listElement = document.createElement("li")
        gridList.appendChild(listElement)
        listElement.classList.add("grid__element")

        const linkElement = document.createElement("a")
        listElement.appendChild(linkElement)
        linkElement.setAttribute("href", element.links.html)
        linkElement.setAttribute("alt", element.alt_description)
        linkElement.classList.add('grid__element-link')

        const authorInfo = document.createElement("div")
        listElement.appendChild(authorInfo)
        
        const authorElement = document.createElement("a")
        authorInfo.appendChild(authorElement)
        authorElement.setAttribute("href", element.user.links.html)
        authorElement.textContent = element.user.name
        authorElement.classList.add("grid__author-link")
        authorInfo.classList.add("grid__author-info")

        const imageElement = document.createElement("img")
        linkElement.appendChild(imageElement)
        imageElement.setAttribute("src", element.urls.regular)
        imageElement.classList.add('grid__element-image')

        
    });
    
 
}



