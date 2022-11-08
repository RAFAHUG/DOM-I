const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!') ;

const container = document.querySelector(".container") ; 

console.log(container) ; 

const header = document.querySelector("header") ; 

console.log(header) ; 

const nav = header.querySelectorAll("nav a") ; 

console.log(nav) ; 

const headerImg = header.querySelector("#logo-img") ; 

console.log(headerImg) ; 

nav[0].textContent = "Services" ; 

nav[1].textContent = "Product" ;

nav[2].textContent = "Vision" ; 

nav[3].textContent = "Features" ; 

nav[4].textContent = "About" ;

nav[5].textContent = "Contact" ; 

headerImg.src = 'http://localhost:9000/img/logo.png' ; 

nav.forEach ( anchor => anchor.style.fontStyle = "italic" ) ; 

nav.forEach ( anchor => anchor.classList.add("italic") ) ; 

const seccionOne = document.querySelector(".cta") ;

console.log(seccionOne) ;

const h1 = seccionOne.querySelector("h1") ; 

console.log(h1) ; 

const button = seccionOne.querySelector("button") ;

console.log(button) ; 

const seccionImg = seccionOne.querySelector("#cta-img") ;

console.log(seccionImg) ; 

h1.textContent = "DOM Is Awesome" ; 

button.textContent = "Get Started" ; 

seccionImg.src = "http://localhost:9000/img/cta.png" ; 

const mainContent = document.querySelector(".main-content") ;

console.log(mainContent) ; 

const topContent = mainContent.querySelector(".top-content") ; 

console.log(topContent) ; 

const divTop = topContent.querySelector(".text-content") ;

console.log(divTop) ; 

const h4 = divTop.querySelector("h4") ;

const p = divTop.querySelector("p") ;

console.log(h4) ; 
console.log(p) ; 

h4.textContent = "Features" ;

p.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis." ; 

const divTopSecond = divTop.nextElementSibling ; 

console.log(divTopSecond) ; 

const h4Second = divTopSecond.querySelector("h4") ; 

const pSecond = divTopSecond.querySelector("p") ; 

console.log(h4Second, pSecond) ; 

h4Second.textContent = "About" ;

pSecond.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, ininterdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis." ; 

const mainContentImg = mainContent.querySelector("img") ; 
console.log(mainContentImg) ; 

mainContentImg.src = "http://localhost:9000/img/accent.png" ;

const bottomContent = mainContent.querySelector(".bottom-content") ; 

console.log(bottomContent) ; 

const divBottom = bottomContent.querySelector(".text-content") ;

console.log(divBottom) ; 

const h4Third = divBottom.querySelector("h4") ; 

const pThird = divBottom.querySelector("p") ;

h4Third.textContent = "Services" ; 
pThird.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis." ; 

const divBottomSecond = divBottom.nextElementSibling ; 

const h4Four = divBottomSecond.querySelector("h4") ; 
const pFour = divBottomSecond.querySelector("p") ;

h4Four.textContent = "Product" ; 
pFour.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis." ; 

const divBottomThird = divBottomSecond.nextElementSibling ; 

const h4Five = divBottomThird.querySelector("h4") ; 
const pFive = divBottomThird.querySelector("p") ; 

h4Five.textContent = "Vision" ; 
pFive.textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis." ; 

const contact = document.querySelector(".contact") ; 

console.log(contact) ; 

const h4Six = contact.querySelector("h4") ; 
const pSix = contact.querySelector("p") ;
const pSeven = pSix.nextElementSibling ; 
const pEigth = pSeven.nextElementSibling ; 

h4Six.textContent = "Contact" ; 
pSix.textContent = "123 Way 456 Street Somewhere, USA" ; 
pSeven.textContent = "1 (888) 888-8888" ; 
pEigth.textContent = "sales@greatidea.io" ; 

const footer = document.querySelector("footer") ; 
console.log(footer) ; 



const anchorFooter = footer.querySelector("a") ; 
console.log(anchorFooter) ; 

anchorFooter.textContent = "Copyright Great Idea! 2021 " ; 

anchorFooter.classList.add("bold") ; 



