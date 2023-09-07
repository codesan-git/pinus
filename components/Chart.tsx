'use client'
import { FC } from 'react'
import { Card, Title, AreaChart } from "@tremor/react";

interface AreaChartProps {

}


const Chart: FC<AreaChartProps> = ({ }) => {
  const chartdata = [
    {
      date: "Jan 22",
      SemiAnalysis: 2890000,
      PragmaticEngineer: 2338000,
    },
    {
      date: "Feb 22",
      SemiAnalysis: 2756000,
      PragmaticEngineer: 2103000,
    },
    {
      date: "Mar 22",
      SemiAnalysis: 3322000,
      PragmaticEngineer: 2194000,
    },
    {
      date: "Apr 22",
      SemiAnalysis: 3470000,
      PragmaticEngineer: 2108000,
    },
    {
      date: "May 22",
      SemiAnalysis: 3475000,
      PragmaticEngineer: 1812000,
    },
    {
      date: "Jun 22",
      SemiAnalysis: 3129000,
      PragmaticEngineer: 1726000,
    },
  ];

  const dataFormatter = (number: number) => {
    return Intl.NumberFormat("id").format(number).toString().slice(0,-4);
  };

  console.log(chartdata.slice(-3))

  return (
    <section className='container py-20'>
      <Card>
        <Title>Newsletter revenue over time (IDR)</Title>
        <AreaChart
          className="h-72 mt-4"
          data={chartdata}
          index="date"
          categories={["SemiAnalysis", "PragmaticEngineer"]}
          colors={["indigo", "cyan"]}
          valueFormatter={dataFormatter}
        />
      </Card>
    </section>
  )
}

export default Chart