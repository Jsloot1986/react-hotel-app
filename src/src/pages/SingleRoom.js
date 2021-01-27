import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';
import StyledHero from '../components/StyledHero';

export default class SingleRoom extends Component {
    constructor(props) {
        super(props);

        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg: defaultBcg
        }
    }
    static contextType = RoomContext;
    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        if (!room) {
            return (
                <div className="error">
                <h3>Het type kamer wat u zoekt is niet beschikbaar!</h3>
                <Link to="/rooms" className="btn-primary">
                    terug naar kamers
                </Link>
            </div>
            );
        }

        const {name, description, capacity, size, price, extras, breakfast, pets, images} = room
        
        const [mainImg, ...defaultImg] = images;
        return (
            <>
            <StyledHero img={mainImg}>
            <Banner title={`${name} room`}>
                <Link to="/rooms" className="btn-primary">
                    Terug naar kamers
                </Link>
            </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {defaultImg.map((item, index) => {
                           return <img key={index} src={item} alt={name}/>
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>info</h3>
                            <h6> prijs : ${price}</h6>
                            <h6>size: ${size} m2</h6>
                            <h6>max aantal personen: {
                                capacity > 1 ? `${capacity} personen` : `${capacity} persoon`}
                            </h6>
                            <h6>{pets ? "huisdieren toegestaan" : "geen huisdieren toegestaan"}</h6>
                            <h6>{breakfast && "met gratis ontbijt"}</h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>extras</h6>
                    <ul className="extras">
                        {extras.map((item, index) => {
                            return <li key={index}>~{item}</li>
                        })}
                    </ul>
                </section>
                </>
        )}
}
