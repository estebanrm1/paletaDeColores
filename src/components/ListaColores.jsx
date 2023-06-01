import CardColor from "./CardColor";


const ListaColores = ({listaColores}) => {
    return (
        <section className="d-flex justify-content-between flex-wrap my-5">
        {
                listaColores.map((color, indiceColor)=><CardColor propColor={color} key={indiceColor}></CardColor>)
            }
        </section>
    );
};

export default ListaColores;