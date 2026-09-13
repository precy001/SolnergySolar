import React from 'react'

const WHATSAPP_NUMBER = '2349167728428'

const ProductCard = (props) => {
  const whatsappMessage = `Hi TDV global, I am making enquiries for the ${props.name}`
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="product-card">
      <div className="product-image-wrap">
        <img src={props.image} alt={props.name} className="product-image" draggable={false}/>
        {props.secondaryImage && (
          <img src={props.secondaryImage} alt={`${props.name} spec sheet`} className="product-image-secondary" draggable={false}/>
        )}
      </div>

      <div className="product-body">
        {props.badge && <div className="product-badge">{props.badge}</div>}
        <div className="product-name">{props.name}</div>
        {props.tagline && <div className="product-tagline">{props.tagline}</div>}
        <div className="product-description">{props.description}</div>

        {props.features && props.features.length > 0 && (
          <ul className="product-features">
            {props.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        )}

        {props.specs && props.specs.length > 0 && (
          <div className="product-specs">
            <div className="product-specs-title">Runtime at a glance</div>
            <ul className="product-specs-list">
              {props.specs.map((spec, index) => (
                <li key={index}>
                  <span>{spec.label}</span>
                  <span>{spec.value}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <a href={whatsappHref} className="product-cta" target="_blank" rel="noopener noreferrer">{props.ctaText || 'Request a Quote'}</a>
      </div>
    </div>
  )
}

export default ProductCard
