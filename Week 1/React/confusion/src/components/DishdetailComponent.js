import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    renderComments(comments) {

        const menu = comments.map((item) => {
            var d=new Date(item.date);
            d.setDate(d.getDate()+1);
            var ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
            var mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
            var da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
            return (
                <div key={item.id}>
                    <li>{item.comment}</li>
                    <br></br>
                    <li>-- {item.author} , {mo} {da}, {ye}</li>
                    <br></br>
                </div>
            );
        });
    
        if (comments != null){
            return(
                <ul class="list-unstyled">
                    {menu}
                </ul>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    renderDish(dish) {
        if(dish != null){
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name}/>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
            );
        }
        else {
            return(
                <div className="row"></div>
            );
        }
    }

    render() {
        return (
            <div>
                {this.renderDish(this.props.selectedDish)}
            </div> 
        );
    }

};

export default Dishdetail;