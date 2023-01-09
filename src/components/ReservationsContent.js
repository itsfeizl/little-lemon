import React from 'react';
import "./styles/ReservationsContent.css";

const ReservationsContent = () => {
  return (
    <div className="res-content-wrapper">
        <div className="res-content-container">
            <div className="text">
                <h2>Experience the perfect balance of tradition and luxury.</h2>
                <p>At Little Lemon, we take great pride in providing our customers with the greatest luxurious experience with a touch of <em>tradition</em>.</p>
                <p>Book a table with us to share in this experience.</p>
            </div>
            <div className="form">
                <form>
                    <fieldset>
                        <h1>Reserve a Table</h1>
                        <p>Please fill in and submit form to book your reservation at Little Lemon.</p>
                        <div className="field">
                            <input
                                type="text"
                                id="name"
                                placeholder="Your Name"
                                name="name"
                            />
                        </div>
                        <div className="field">
                            <input
                                type="text"
                                id="email"
                                placeholder="Your Email"
                                name="email"
                            />
                        </div>
                        <div className="field">
                            <input
                                type="tel"
                                id="telephone"
                                placeholder="Your Phone "
                                name="telephone"
                            />
                        </div>
                        <div className="field">
                            <input
                                type="number"
                                id="guests"
                                placeholder="Number of guests"
                                name="guests"
                            /> 
                        </div>
                        <div className="field">
                            <input 
                                type="datetime-local" 
                                id="date" 
                                placeholder="Choose date and time"
                                name="date" 
                            />
                        </div>
                        <div className="field guests">
                            <select>
                                <option>Occasion (optional)</option>
                                <option>Birthday</option>
                                <option>Engagement</option>
                                <option>Aniversary</option>
                            </select>
                        </div>
                        <button className="reserve-btn" type="submit">Reserve</button>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ReservationsContent