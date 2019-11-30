const ctx = "readings";

document.getElementById("start").addEventListener("click", () => {
  axios.get("http://localhost:3000/start");
});

document.getElementById("stop").addEventListener("click", () => {
  axios.get("http://localhost:3000/stop");
});

let chart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Thrust",
        backgroundColor: "rgba(0,0,0,0)",
        borderColor: "rgb(255, 99, 132)",
        data: []
      },
      {
        label: "Temp",
        backgroundColor: "rgba(0,0,0,0)",
        borderColor: "rgba(255, 206, 86, 1)",
        data: []
      }
    ]
  }
});

const addReading = reading => {
  chart.data.datasets[0].data.push(reading);
  chart.data.datasets[1].data.push(reading);
  chart.data.labels.push(reading);

  chart.update();
};
// Socket.io setup
const PORT = 3000;
var socket = io.connect(`http://localhost:${PORT}`);

socket.on("data", data => console.log(data));
