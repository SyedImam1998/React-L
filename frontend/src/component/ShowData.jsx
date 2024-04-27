/* eslint-disable react/prop-types */
// import React from 'react'

// eslint-disable-next-line react/prop-types, no-unused-vars
const ShowData = ({data,isLoading,isError}) => {

    if(isLoading){
        return <div>Loading</div>
    }
  return (
    <div>
         {data.length > 0 &&
          data.map((item) => {
            return <li key={item}>{item}</li>;
          })}
    </div>
  )
}

export default ShowData