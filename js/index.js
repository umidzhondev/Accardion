class Accardion {
    constructor(options) {
        this.title = options.title;
        this.description = options.description;
    }
    render(){
        const newAccardion = document.createElement("div");
        newAccardion.innerHTML  = `
        <div class="accardion__header d-flex align-items-center justify-content-between">
            <h1 class="accardion__header-title text-white">${this.title}</h1>
            <i class="fas text-white fa-2x fa-chevron-down"></i>
        </div>
        <div class="accardion__body">
            <p class="accardion__body-description">
             ${this.description}
            </p>
    </div>
        `
        newAccardion.classList.add("accardion")
        document.querySelector(".accardion__box").append(newAccardion)
    }
}

const acccardion1 = new Accardion({
    title: "What is your name ?",
    description: "My name is Umidjon , Surename is Karabaev ."
}).render()
const acccardion2 = new Accardion({
    title: "Where do you live ?",
    description: "I live in Kyrgyzstan , Osh region"
}).render()
const acccardion3 = new Accardion({
    title: "What do you work ?",
    description: 'I am Front-end developer and CEO & Founder at "Muslim Coders" '
}).render()
const acccardion4 = new Accardion({
    title: "You're Frontend skills ? ",
    description: "HTML5, CSS3, BOOTSTRAP(4/5), SCSS(SASS), TAILWIND CSS3, JAVASCRIPT(ADVANCED+)"
}).render()


const btns = document.querySelectorAll(".accardion__header");
btns.forEach((btn)=>{
    btn.addEventListener('click',() => {
    btn.nextElementSibling.classList.toggle("visible")        
    btn.lastElementChild.classList.toggle("rotate-180")
    btn.classList.toggle("inset")        
    });
})