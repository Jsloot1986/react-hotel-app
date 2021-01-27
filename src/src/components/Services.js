import React, { Component } from 'react'
import {FaCocktail, FaWater, FaShuttleVan, FaBeer} from 'react-icons/fa'
import Title from './Title'

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Gratis cocktail",
                info: "Geniet van een gratis welkoms cokctail van ons in onze mooie onder water wereld bar"
            },
            {
                icon: <FaWater />,
                title: "Zwembad",
                info: "Zwem tussen de vissen of neem de duik van een van onze glijbanen"
            },
            {
                icon: <FaShuttleVan />,
                title: "Gratis airportshuttle",
                info: "Elk uur rijdt er een shuttle van het vliegveld naar ons hotel en andersom"
            },
            {
                icon: <FaBeer />,
                title: "Zee bier",
                info: "Geniet van een van onze speciale bieren van de tap. Waaronder ons eigen bier wat gebrouwen word met zeewier!"
            },
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
