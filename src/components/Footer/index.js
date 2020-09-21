import React from 'react'
import './index.css'

export default () => {
    return <footer>
        <hr />
        <div className="footer-flex-container">
            <div>
                <h2>AzərTürkBank</h2>
                <p>AR Mərkəzi Bankı tərəfindən "Azər-Türk Bank" ASC-yə 29.06.1995-ci il tarixində 234№-li lisenziya verilib</p>
                <p>© 2002-2020 Azər-Türk Bank</p>
            </div>
            <div>
                <h4>BİZİMLƏ ƏLAQƏ</h4>
                <p>+994 12 945 Azərbaycan daxilində zəng edin</p>
                <p>+994 12 945 Xaricdən gələn zənglər üçün</p>
            </div>
            <div>
                <h4>BİZİ İZLƏYİN</h4>
                <p>Xəbərlərimizdən ilk olaraq Siz xəbərdar olun!</p>
                <div className="icon-container">
                    <img src="images/social/facebook-icon.svg" alt="Logo"  />
                </div>
                <div className="icon-container">
                    <img src="images/social/instagram-icon.svg" alt="Logo"  />
                </div>
                <div className="icon-container">
                    <img src="images/social/linkedin-i-icon.svg" alt="Logo"  />
                    <img src="images/social/linkedin-n-icon.svg" alt="Logo"  />
                </div>

            </div>
        </div>
    </footer>
}