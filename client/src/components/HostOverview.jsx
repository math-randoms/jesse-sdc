import React from 'react';
import hostStyle from './host.css';

const HostOverview = (props) => {
  console.log(props)
  let { propertyInfo, host, beds, numBaths } = props;
    return (
      <div className={hostStyle.topContainer}>
        <div className='titleContainer'>
          <div className={hostStyle.propertyName}>
            {propertyInfo.title}
          </div>
          <div className={hostStyle.cityName}>
            {propertyInfo.location}
          </div>
        </div>
        <div className='hostContainer'>
          <div>
          {/* host image */}
            {/* <img src={host.pictureUrl}></img>*/}
          </div>
          <div className='hostName'>
            {host.name}
          </div>
        </div>
      </div>
    )
}

export default HostOverview