const imgItem = document.querySelector('.images-block img');
const imageCount = 9;

const getRandomImage = () => {
    const randomIndexImg = Math.floor(Math.random() * imageCount) + 1;
    return `img/images${randomIndexImg}.jpeg`;
}

imgItem.src = getRandomImage();


const btnChange = document.querySelector('.btn');

btnChange.addEventListener('click', (e) => {
    e.preventDefault();
    imgItem.src = getRandomImage();
});
