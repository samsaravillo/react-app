import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Chart = () => {
  const options = {
    series: [
      {
        name: "Profit",
        data: [100, 200, 30, 100, 50, 30],
      },
    ],
    xAxis: {
      type: "category",
    },
    yAxis: {
      title: {
        text: "Total percent market share",
      },
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Chart;
