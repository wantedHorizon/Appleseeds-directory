import React, { Component } from 'react';

class Book extends Component  {
    state= {
        edit: false
    }

    onEditClickHandler = () => {
      const newEdit = !this.state.edit;
      this.setState({edit: newEdit});
        
    }
    render(){
        const {data,methods,edit} = this.props;
        console.log(this.state);
        return (

            <div className="item book" style={{ border: '1px solid black', borderRadius: '10px', padding: '5px 10px', background: '#e5e5e5' }}>
    
                <div className="image" >
                    <img src={data.image} style={{ borderRadius: '20px' }} hidden={this.state.edit} />
                    <input type="text" value={data.image} name="imgUrl" hidden={!this.state.edit} />
                </div>
    
                <div className="content">
                    {this.state.edit ? <input type="text" name="nameInput" value={data.name} /> :
                        <a className="header"  >{data.name} </a>
                    }
    
    
    
                    <div className="meta">
                        <span>Description</span>
                    </div>
                    <div className="description">
                        <p hidden={this.state.edit}>{data.description}</p>
                        <input type="text" name="descriptionInput" value={data.description} hidden={!this.state.edit} />
    
                    </div>
                    <div className="extra">
                        <strong>Autour:</strong> <span hidden={this.state.edit} >{data.autour}</span>
                        <input type="text" name="authorInput" value={data.autour} hidden={!this.state.edit} />
    
                        <br />
                        <strong>Pages:</strong> {data.pages.length}
    
                    </div>
                </div>
    
                <div className="management">
                    <button className="btn-edit" onClick={this.onEditClickHandler}>Edit</button>
                    <button onClick={(e) => methods.delete(e, data.id)} className="btn-delete">Delete</button>
                    <button className="btn-view">View</button>
    
                </div>
    
            </div>
    
        );
    }
 
}

export default Book;
