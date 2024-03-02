import React from 'react'

const FeatureItem = (props) => {
  return (
    <div className="feature-item">
    <img src={props.img} alt={props.alt} className="feature-icon"/>
    <h3 className="feature-item-title">{props.title}</h3>
    <p>
      {props.paragraphe}
    </p>
  </div>
  )
}

export default FeatureItem