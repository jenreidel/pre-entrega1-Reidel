import Layout from "../../components/Layout/Layout"
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

const Home = () => {
    return (
        <Layout>
            <ItemListContainer greeting={<div><strong>PLANTAS DE INTERIOR</strong> {"PARA VESTIR TODOS TUS AMBIENTES"}</div>}/>
        </Layout>
    )
}

export default Home;