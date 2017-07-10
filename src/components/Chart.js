/* eslint-disable no-underscore-dangle */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-param-reassign */

import React from 'react'
import PropTypes from 'prop-types'
import { Bar, Chart as ChartJS } from 'react-chartjs-2'
import numeral from 'numeral'

const chartOptions = {
  responsive: false,
  maintainAspectRatio: false,
  legend: { display: false },
  tooltips: { enabled: false },
  hover: { mode: false },
  scales: {
    yAxes: [
      {
        display: false,
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    xAxes: [{
      display: true,
      gridLines: { display: false },
    }],
  },
  labelOverBar: true,
}

const Chart = ({ rent, buy }) => {
  const chartData = {
    labels: ['Aluguel', 'Compra'],
    datasets: [
      {
        borderWidth: 1,
        data: [rent, buy],
      },
    ],
  }

  return (
    <div className="flex justify-center">
      <Bar
        data={chartData}
        options={chartOptions}
        width={320}
        height={450}
      />
    </div>
  )
}

Chart.propTypes = {
  rent: PropTypes.number.isRequired,
  buy: PropTypes.number.isRequired,
}

ChartJS.pluginService.register({
  afterDraw: (chartInstance) => {
    const { config, chart: { ctx } } = chartInstance
    const { options: { labelOverBar }, data } = config

    if (labelOverBar) {
      ctx.font = '18px -apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif'
      ctx.fillStyle = '#000000'
      ctx.textAlign = 'left'
      ctx.textBaseline = 'bottom'
    }

    data.datasets.forEach((dataset) => {
      const dataArray = dataset.data
      dataset._meta[0].data.forEach((bar, index) => {
        if (dataArray[index] < dataArray.filter((_, i) => i !== index)[0]) {
          bar._model.backgroundColor = 'rgba(75,192,192,0.8)'
          bar._model.borderColor = 'rgba(75,192,192,1)'
        } else {
          bar._model.backgroundColor = 'rgba(255,99,132,0.8)'
          bar._model.borderColor = 'rgba(255,99,132,1)'
        }
        if (labelOverBar) {
          const x = bar._view.x - (bar._view.width / 4) - 25
          const value = `R$ ${numeral(dataArray[index]).format('0,0')}`
          ctx.fillText(value, x, 420)
        }
      })
    })
  },
})

export default Chart
