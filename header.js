class Header extends HTMLElement {
constructor() {
    super();
}

connectedCallback() {
    this.innerHTML = `
    <div class = "header">
    <a href = "Signin.html"><logout>Log out</logout></a>
    <br>
    <a href="goalList.html">
        <div style="text-align: center;">
            <img src="logo.svg" alt="logo.png" width="235">
        </div>
    </a>
    <h3>SMART-Lab: Learn to work better</h3>
</div>
<br>
`;
}
}

class HeaderMinus extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        this.innerHTML = `
        <div class = "header">
        <br>
        <a href="goalList.html">
            <div style="text-align: center;">
                <img src="logo.svg" alt="logo.png" width="235">
            </div>
        </a>
        <h3>SMART-Lab: Learn to work better</h3>
    </div>
    <br>
    `;
    }
    }
    

customElements.define('temp-header', Header);
customElements.define('temp-header-minus', HeaderMinus);