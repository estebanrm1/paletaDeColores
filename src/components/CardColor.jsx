import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css'


const CardColor = ({propColor, borrarColor}) => {
    return (
        <>
        <Card className='sombra text-end my-3' style={{ width: '15rem' }}>
        <Card.Header className='text-start'>{propColor}
        </Card.Header>
        <Card.Body className='d-flex justify-content-center bg-secondary'>
        <div className='card-img' style={{backgroundColor: propColor}}>
            </div>
        </Card.Body>
        <Card.Footer>
            <Button className='sombra' variant="danger" onClick={()=>borrarColor(propColor)}>Borrar</Button>
        </Card.Footer>
    </Card>
        </>
    );
};

export default CardColor;