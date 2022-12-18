import classes from '../styles/components/BoxInfo.module.css';

const icons = {
    pendings: 'far fa-clock',
    completed: 'far fa-check-circle',
    cancelled: 'fa fa-close',
    clients: 'fas fa-users',
    employees: 'fas fa-user-tag'
}

export const BoxInfo = ({ title, qtty, type }) => {
    return (
        <div className={ classes.container }>
            <div className={ classes.titleContainer }>
                <h4 className={ classes.title }>{ title }</h4>
                <i className={ icons[type] }></i>
            </div>
            <h1 className={ classes.data }>{ qtty }</h1>
        </div>
    )
}