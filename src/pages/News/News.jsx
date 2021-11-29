import './news.css'

const News = ()=>{
    return <>
            <div className="newsPadre">
                <div className="newsCard">
                    <img src="https://res.cloudinary.com/alanleonelfernandez/image/upload/v1637802425/under-logo_nd1y6g.png" alt="under-armour" />
                    <h1>Proximamente: Under-Armour</h1>
                    <p>Muy pronto contaremos con la linea de la coleccion mas reciente de la marca estadounidense Under-Armour.</p>
                </div>
            </div>
            <div className="newsPadre">
                <div className="newsCard">
                    <img src="https://res.cloudinary.com/alanleonelfernandez/image/upload/v1638142895/pelotas-news_bb5rrv.jpg" alt="pelotas" />
                    <h1>Lo que se viene: Pelotas de futbol profesional</h1>
                    <p>Para seguir creciendo y ampliando nuestro catalogo, el año proximo estaremos contando con stock de pelotas tamaño Nº5 profesionales de las mejores ligas del mundo.</p>
                </div>
            </div>
        </>
}

export default News;