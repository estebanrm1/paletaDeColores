import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css'


const CardColor = ({propColor}) => {
    return (
        <>
        <Card style={{ width: '15rem' }}>
        <Card.Header>{propColor}
        </Card.Header>
        <Card.Body className='d-flex justify-content-center bg-secondary'>
        <div className='card-img' style={{backgroundColor: propColor}}>
            </div>
        </Card.Body>
        <Card.Footer>
            <Button variant="danger">Borrar</Button>
        </Card.Footer>
    </Card>
        </>
    );
};

export default CardColor;