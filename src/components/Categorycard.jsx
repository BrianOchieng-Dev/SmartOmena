
import '../Home.css'
export default function Categorycard({ image, description, price, order }) {
    return (
        <div className="category-card">
            <img src={image} alt="crunch images" className="category-image" />
            <h3 className="category-name">{description}</h3>
            <h4 className="category-price">{price}</h4>
            <a 
          href="https://wa.me/254754845415?text=Hi%20Campus%20Crunch%20%F0%9F%91%8B%0AOrder%3A%0A%E2%80%A2%20Pack%3A%2080%20%2F%20100%0A%E2%80%A2%20Quantity%3A%0A%E2%80%A2%20Location%3A"
            target="_blank"
            className="order-btn"
            >{order}</a>
        </div>
    );
}