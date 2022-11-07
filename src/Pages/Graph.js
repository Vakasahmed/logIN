import React,{useEffect} from 'react';
import {data} from '../utils';
import Chart from 'react-apexcharts';

function Graph() {

  useEffect(()=>{
    (async _=> {
      const response = await data.get("");
      console.log(response.data);
    }
    
    )()
  },[])
    

  return (
    <div>
      <Chart type='bar'
      width={1000}
      height={700}
      series={[
        {
          name:"Current rate compare to INR",
          data:[623,431,643,422,465]
        }
      ]}
      options={
        {}
      }
      >

      </Chart>
    </div>
  )
}

export default Graph;



// http://localhost:5000/