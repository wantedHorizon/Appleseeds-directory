import React from 'react';
import Select from 'react-select';

import PropTypes from 'prop-types';
const EditCard = (props) => {

    return (
        <div className="card ui" style={{ display: 'inline-block' }}>
            <form action="" onSubmit={props.methods.updateCard}>
                <h2>Edit Card</h2>

                <Select options={props.options}
                    onChange={props.methods.OnChangeSelectCard}
                    value={props.state.selectedOption}

                />

                <div className="field">
                    <label htmlFor="question">question</label>
                    <textarea name="question" id="" cols="30" rows="5" value={props.state.question} onChange={props.methods.onChangeInput}
                    ></textarea>
                </div>

                <div className="field">
                    <label htmlFor="answer">answer</label>
                    <textarea
                        name="answer"
                        cols="30" rows="5"
                        value={props.state.answer}
                        onChange={props.methods.onChangeInput}
                    ></textarea>
                </div>

                <button type="submit" disabled={!props.state.changed}>Update</button>

                <button
                    onClick={props.methods.deleteCard}
                    type="delete ui warning"
                    disabled={!props.state.cards.length > 0}
                >Delete
                 </button>
            </form>

        </div>
    );
}

EditCard.propTypes = {
    methods: PropTypes.exact ({
        updateCard: PropTypes.func,
        onChangeInput: PropTypes.func,
        OnChangeSelectCard: PropTypes.func,
        deleteCard: PropTypes.func
    }),
    state: PropTypes.object,
    options: PropTypes.array
}
export default EditCard;