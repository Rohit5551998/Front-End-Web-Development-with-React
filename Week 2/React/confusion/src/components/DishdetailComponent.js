import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    renderComments(comments) {

        const commentList = comments.map((item) => {
            var date = new Date(Date.parse(item.date));
            date.setDate(date.getDate()+1);
            return (
                <div key={item.id}>
                    <li>{item.comment}</li>
                    <br></br>
                    <li>-- {item.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(date)}</li>
                    <br></br>
                </div>
            );
        });
    
        if (comments != null){
            return(
                <ul class="list-unstyled">
                    {commentList}
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
            <div className="container">
                {this.renderDish(this.props.dish)}
            </div> 
        );
    }

};

export default DishDetail;