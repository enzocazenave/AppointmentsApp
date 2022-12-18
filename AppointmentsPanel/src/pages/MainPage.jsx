import { useContext } from "react";
import { BoxInfo } from "../components/BoxInfo";
import { ShopContext } from "../context/ShopContext";
import classes from '../styles/pages/MainPage.module.css';

export const MainPage = () => {

    const { shop } = useContext(ShopContext);

    return (
        <div className={ classes.container }>
            <div className={ classes.header }>
                <h1 className={ classes.headerTitle }>Panel</h1>

                <button className={ classes.notifications }>
                    <i className="far fa-bell"></i>
                </button>
            </div>

            <div className={ classes.infoContainer }>
                <BoxInfo title="Turnos pendientes" qtty={ 110 } type="pendings" />
                <BoxInfo title="Turnos completados" qtty={ 1224 } type="completed" />
                <BoxInfo title="Turnos cancelados" qtty={ 232 } type="cancelled" />
                <BoxInfo title="Clientes" qtty={ 320 } type="clients" />
                <BoxInfo title="Empleados" qtty={ 10 } type="employees" />
            </div>
        </div>
    )
}