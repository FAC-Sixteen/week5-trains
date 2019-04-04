const clockDiv = document.querySelector('.clock');

const getTime = () => {
    const currentTime = new Date();
    const seconds = currentTime.getSeconds();
    const minutes = currentTime.getMinutes();
    const hours = currentTime.getHours();

    clockDiv.textContent = `${hours}:${minutes}:${seconds}`
}