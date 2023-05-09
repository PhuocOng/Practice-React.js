import styles from "./Card.module.css";


function Card(props) {
    return (            /* Card not only receive CSS from CSS module, but also receive CSS from props.className */
        <div className={`${styles.card} ${props.className}`}>   {/* Modify the card class into a unique class by CSS Modules */}
            {props.children}
        </div>
    )
}


export default Card;