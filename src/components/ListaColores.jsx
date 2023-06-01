import CardColor from "./CardColor";


const ListaColores = ({listaColores, borrarColor}) => {
    return (
        <section className="d-flex justify-content-around flex-wrap my-5">
        {
                listaColores.map((color, indiceColor)=><CardColor propColor={color} key={indiceColor} borrarColor={borrarColor}></CardColor>)
            }
        </section>
    );
};

export default ListaColores;