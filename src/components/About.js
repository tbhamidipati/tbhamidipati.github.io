import React from 'react'

export default ({ aboutLinks }) => {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">About</h2>
                    <h3 className="section-subheading text-muted"></h3>
                </div>
                <ul className="timeline">
                    {
                        aboutLinks && aboutLinks.map(({ time, location, description }, index) =>
                            <li>
                                <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="" /></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>{time}</h4>
                                        <h4 className="subheading">{location}</h4>
                                    </div>
                                    <div className="timeline-body"><p className="text-muted">{description}</p></div>
                                </div>
                            </li>
                        )
                    }

                </ul>
            </div>
        </section>
    )
}
