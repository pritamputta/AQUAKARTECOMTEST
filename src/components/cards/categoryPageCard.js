import AQ from "../../assests/Default.png"
const AquaCommonCategoryCard = ({ data }) => {
    const { title, photos, description } = data
    return (
        <>
            <div className="aqua-category-card shadow-lg p-2">

                <img src={photos ? photos[0].secure_url : AQ} className="card-img-top rounded-4 mb-5" alt={title} />

                <br />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text fw-light text-secondary">{description}</p>
                </div>
            </div>
        </>
    )
}
export default AquaCommonCategoryCard