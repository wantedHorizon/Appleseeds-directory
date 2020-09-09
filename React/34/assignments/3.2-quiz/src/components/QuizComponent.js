
import React from 'react';

import QuizTitleComponent from './QuizTitleComponent';
import QInputComponent from './questions/QInputComponent';
import QlabelComponent from './questions/QlabelComponent';

const quizInputComponent = (props) => {
    const questions = [
        { title: 'How Much you love front end?', inputConfig: { type: 'range', placeholder: '', htmlFor: '', min: 0, max: 9 } },
        { title: 'What is your favorite front-end feature/topic?', inputConfig: { type: 'text', placeholder: '', htmlFor: '' } },

    ]
    return (
        <div className="quiz">
            <QuizTitleComponent title="How Do You Like Front End?" />
            {questions.map((q, i) => (
                <div key={i} style={{ display: 'block', margin: '20px' }}>
                    <QlabelComponent text={q.title} />
                    <br />
                    <QInputComponent type={q.inputConfig.type} min={q.inputConfig.min} min={q.inputConfig.max} />

                </div>
            ))}

        </div>
    );
}


export default quizInputComponent;