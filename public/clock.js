const clockDiv = document.querySelector('.clock');

const getTime = () => {
    const currentTime = new Date();
    let seconds = currentTime.getSeconds();
    let minutes = currentTime.getMinutes();
    let hours = currentTime.getHours();

    seconds = seconds < 10 ? "0" + seconds : seconds
    minutes = minutes < 10 ? "0" + minutes : minutes
    hours = hours < 10 ? "0" + hours : hours

    clockDiv.textContent = `${hours}:${minutes}:${seconds}`
}