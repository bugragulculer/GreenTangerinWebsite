// Small newsletter form with Mailchimp integration to use on product details page. 
import React from 'react'
import '../styles/NewsletterFormSmall.css'

class SubscribePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailValue: '',
            NameValue: '',
        };
    }
    render() {
        return (
            <section className='two__section__small'>
                <h2 className='newsletter__h2__small'>Don't Forget to Subscribe to the weekly Newsletter!</h2>
                <form action="https://youtube.us4.list-manage.com/subscribe/post?u=202596093129dd9f85893dc69&amp;id=de8bc456c2" method="GET" noValidate>
                    <input type="hidden" name="u" value="202596093129dd9f85893dc69" />
                    <input type="hidden" name="id" value="de8bc456c2" />
                    <label htmlFor='MERGE0' value='email'>
                        <h3 className='newsletter__h3__small'>Your E-mail</h3>
                        <input
                            className='input__small'
                            type="email"
                            name="EMAIL"
                            id="MERGE0"
                            placeholder="Mail"
                            value={this.state.emailValue}
                            onChange={(e) => { this.setState({ emailValue: e.target.value }); }}
                            autoCapitalize="off"
                            autoCorrect="off"
                        />
                    </label>
                    <label htmlFor='MERGE1'>
                        <h3 className='newsletter__h3__small'>Your Name</h3>
                        <input
                        className='input__small'
                        type="text"
                        name="NAME"
                        id="MERGE1"
                        placeholder="Name"
                        value={this.state.NameValue}
                        onChange={(e) => { this.setState({ NameValue: e.target.value }); }}
                    />
                    </label>
                    <li><input type="checkbox" value="2" name="group[71482][2]" id="mce-group[71482]-71482-1" checked readOnly /></li>
                    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="newsletter__button__small" />
                
                    <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden='true' aria-label="Please leave the following two fields empty">
                        <label htmlFor="b_name">Name: </label>
                        <input type="text" name="b_name" tabIndex="-1"  placeholder="Freddie" id="b_name" />
                        <label htmlFor="b_email">Email: </label>
                        <input type="email" name="b_email" tabIndex="-1"  placeholder="youremail@gmail.com" id="b_email" />
                        <label htmlFor="b_comment">Comment: </label>
                        <textarea name="b_comment" tabIndex="-1" placeholder="Please comment" id="b_comment"></textarea>
                    </div>
                </form>
            </section>
        )
    }
}
export default SubscribePage