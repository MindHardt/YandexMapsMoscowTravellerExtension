let lonOffset = 0.35 * Math.random();
let latOffset = 0.35 * Math.random();

let lon = (37.50 + lonOffset).toString(10).substring(0, 8);
let lat = (55.55 + latOffset).toString(10).substring(0, 8);

let mapUrl = `https://yandex.ru/maps/213/moscow/?l=stv%2Csta&ll=${lon}%2C${lat}&panorama%5B` +
    `direction%5D=0.0%2C0.0&panorama%5Bfull%5D=true&panorama%5Bpoint%5D=${lon}%2C${lat}` +
    `&panorama%5Bspan%5D=99.608853%2C60.000000&z=100`;

chrome.tabs.create({ url: mapUrl });