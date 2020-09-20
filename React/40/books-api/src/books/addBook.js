import React from 'react';
const AddBook = ({ addFunction }) => {
    return (
        <div className="ui ">
            <form action="" className="ui form" onSubmit={addFunction}>
                <div className="field">
                    <label htmlFor="name">Book Name</label>
                    <input type="text" name="name"/>
                </div>

                <div className="field">
                    <label htmlFor="description">Book Description</label>
                    <input type="text"  name="description"/>

                </div>

                <div className="field">

                    <label htmlFor="name">Book Author</label>
                    <input type="text" name="author"/>
                </div>
                <div className="field">

                    <label htmlFor="name">Book Cover url</label>
                    <input type="text" name="url" />
                </div>

                <input type="submit" className="button ui primary" value="Add Book" />
            </form>
        </div>
    );
}
export default AddBook;