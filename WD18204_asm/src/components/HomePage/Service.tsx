import React from 'react'
 import image10 from "../../assets/icons/10.svg";
 import image11 from "../../assets/icons/11.svg";
 import image12 from "../../assets/icons/12.svg";
 import image13 from "../../assets/icons/13.svg";
const Service = () => {
  return (
    <div>
        <section className="services">
            <div className="container-fluid">
                <div className="service-list">
                    <div className="service-item">
                        <img src={image10} className="service__image" />
                        <div className="service-info">
                            <h4 className="service__name">High Quality</h4>
                            <p className="service__description">crafted from top materials</p>
                        </div>
                    </div>
                    {/* <!--End service-item--> */}
                    <div className="service-item">
                        <img src={image11} className="service__image" />
                        <div className="service-info">
                            <h4 className="service__name">High Quality</h4>
                            <p className="service__description">crafted from top materials</p>
                        </div>
                    </div>
                    {/* <!--End service-item--> */}
                    <div className="service-item">
                        <img src={image12}className="service__image" />
                        <div className="service-info">
                            <h4 className="service__name">High Quality</h4>
                            <p className="service__description">crafted from top materials</p>
                        </div>
                    </div>
                    {/* <!--End service-item--> */}
                    <div className="service-item">
                        <img src={image13} className="service__image" />
                        <div className="service-info">
                            <h4 className="service__name">High Quality</h4>
                            <p className="service__description">crafted from top materials</p>
                        </div>
                    </div>
                    {/* <!--End service-item--> */}
                </div>
            </div>
        </section>
    </div>
  )
}

export default Service
 