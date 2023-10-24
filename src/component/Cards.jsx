import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Historybooks from '../data/books/history.json'

function Cards() {
    return (
        Historybooks.map((book) => {
            return (
                <div className="col col-12 col-md-6 col-xl-3 mb-4 d-flex justify-content-center" key={book.asin}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={book.img} />
                        <Card.Body>
                            <Card.Title>{book.title}</Card.Title>
                            <Card.Text>
                                {book.category}
                            </Card.Text>
                            <Card.Text>
                                {book.price}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
            )
        })
    );
}

export default Cards;