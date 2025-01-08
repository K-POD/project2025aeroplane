document.getElementById('checkFlight').addEventListener('click', async function() {
    const departure = document.getElementById('departure').value;
    const arrival = document.getElementById('arrival').value;
    const apiKey = 'b404445bde9262876906903618286fe9';
    const url = `https://aviationstack.com/v1/flights?acces_key=${apiKey}&dep_iata=${departure}&arr_iata=${arrival}`;
    try {
        const responce = await fetch(url);
        const data = await responce.json();
        if (data.data.length > 0) { 
            const flight = data.data[0];
            const flightTime = flight.flight_duration;
document.getElementById('result').innerText = `Время полета из ${departure} в ${arrival} составляет примерно ${flightTime}.`;
        } else {
document.getElementById('result').innerText = 'Рейсы не найдены для указанных городов.';
        }
    } catch (error) {
        console.error('Ошибка:', error);
document.getElementById('result').innerText = 'Произошла ошибка. Попробуйте снова.';
    }
});