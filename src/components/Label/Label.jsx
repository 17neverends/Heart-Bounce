import styles from './Label.module.css'

export const Label = ( {name, selected, onClick} ) => {
    return ( 
        <div className={selected ? `${styles.selectedLabel} ${styles.label}` : styles.label} onClick={onClick}>
            <p className={styles.labelP}>{name}</p>
        </div>
     );
}
 