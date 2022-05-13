import React, {Fragment} from 'react';
import '../css/App.css'

const FooterInicio    =   ()  =>  {
    return(
        <Fragment>
            <footer>
                <div className="footer-copyright text-center py-3">
                    <p>Compra en Linea</p>
                    <p className="copy"><a className="credit" href='https://www.rappi.com.co/'>https://www.rappi.com.co/</a></p>
                </div>
            </footer>
        </Fragment>
    );
}
export default FooterInicio