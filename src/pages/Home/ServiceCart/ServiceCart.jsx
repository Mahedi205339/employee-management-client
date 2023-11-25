

const ServiceCart = ({service}) => {
    const { images, title, description }=service
    return (
        <div data-aos="zoom-in-up" className="card w-96">
            <img className="object-cover" src={images} alt="Shoes" />
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ServiceCart;