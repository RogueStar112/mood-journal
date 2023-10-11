// retrieve the data from localstorage
const chartData = JSON.parse(localStorage.getItem("entries"));

// retrieve rating & time

function renderChart() {
  const ctx = document.getElementById("mood-chart");

  const plugin = {
    id: "customCanvasBackgroundColor",
    beforeDraw: (chart, args, options) => {
      const { ctx } = chart;
      ctx.save();
      ctx.globalCompositeOperation = "destination-over";
      ctx.fillStyle = options.color || "#99ffff";
      ctx.fillRect(0, 0, chart.width, chart.height);
      ctx.restore();
    },
  };

  const times = [];
  const ratings = [];

  for (let i = 0; i < chartData.length; i++) {
    times.push(chartData[i].time);
    ratings.push(parseInt(chartData[i].rating));
  }

  const moodChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: times,
      datasets: [
        {
          label: "Mood Rating",
          data: ratings,
          borderWidth: 3,
          tension: 0.3,
        },
      ],
    },
    options: {
      plugins: {
        customCanvasBackgroundColor: {
          color: "white",
        },
      },
      scales: {
        y: {
          // beginAtZero: true,
          min: 1,
          max: 6,
          ticks: {
            stepSize: 1,
          },
        },
      },
    },
    plugins: [plugin],
  });
}

renderChart();
