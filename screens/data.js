// Mock data object used for LineChart and BarChart

const data = {
    labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
    datasets: [{
      data: [
        50,
        20,
        2,
        84,
        71,
        10
      ],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})` // optional
    },{
      data: [
        20,
        10,
        4,
        56,
        87,
        90
      ]
    },{
      data: [
        30,
        90,
        67,
        54,
        10,
        2
      ]
    }]
  }


  export { data  }