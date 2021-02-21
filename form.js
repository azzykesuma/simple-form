import React from 'react';

function Form(props){

    return(
        <div className='Background'>
            <form>
                <label>Username : </label>
                <input type='text'
                className='formSize'
                placeholder='Insert your username'
                name={props.name}
                ></input>
                <br />
                <label>Thesis's Title </label>
                <input type='text'
                className='formSize'
                placeholder='Insert your Thesis Title'
                ></input>
                <br />
                <label>Subject </label>
                <select>
                    <option>Philosophy</option>
                    <option>Math</option>
                    <option>Physic</option>
                    <option>Computer</option>
                </select>
                <br />
                <label>Email </label>
                <input type='text'
                className='formSize'
                placeholder='eg: john@doe.com'
                ></input>
                <br />
                <input type='checkbox' required/>
                <label>I hereby declare that all provided information are true, and all the works are genuine</label>
                <br />
                <button type='submit' className='submit' onClick={props.onClick}>Submit</button>
            </form>
        </div>
    )
}

export default Form;