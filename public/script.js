const inbound = document.querySelector('.inbound');
const outbound = document.querySelector('.outbound');

const defaultStation = () => {
    fetch("/default")
        .then(res => res.json())
        .then(json => displayStationData(json))
}

const displayStationData = (data) => {
    console.log("default is working");
    console.log(data);
}

window.onload = defaultStation();