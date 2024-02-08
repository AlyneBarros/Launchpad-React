import PropTypes from 'prop-types';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

function Card({ name, description, html_url }) {
    const handleClick = () => {
        // Aqui você pode fazer a requisição para a sua API usando fetch
        fetch(html_url)
            .then(response => response.json())
            .then(data => {
                // Aqui você pode fazer algo com os dados recebidos, por exemplo, redirecionar para uma nova página
                console.log(data);
            })
            .catch(error => {
                console.error('Erro ao buscar dados:', error);
            });
    };

    return (
        <Link to={html_url} className={styles.card} onClick={handleClick}>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                    <FaHtml5 />
                    <FaCss3Alt />
                    <FaJs />
                    <FaReact />
                </div>
            </div>
        </Link>
    );
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
};

export default Card;