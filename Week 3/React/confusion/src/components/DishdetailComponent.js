import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({dish}) {
    return(
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>     
    );
}

function RenderComments({comments}) {

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
    
    return(
        <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul class="list-unstyled">
                {commentList}
            </ul>
        </div>
    );
}

const DishDetail = (props) => {
    if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} />
                </div>
            </div> 
        );
    }

    else {
        return (
            <div></div>
        );
    }
}

export default DishDetail;