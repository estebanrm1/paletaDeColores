import CardColor from "./CardColor";


const ListaColores = ({listaColores}) => {
    return (
        <section>
        {
                listaColores.map((color, indiceColor)=><CardColor propColor={color} key={indiceColor}></CardColor>)
            }
        </section>
    );
};

export default ListaColores;