class Header extends HTMLElement {
constructor() {
    super();
}

connectedCallback() {
    this.innerHTML = `

    <style>

    .header {
        color: black;
        padding: 10px;
        background-color: rgb(182, 214, 20);
        font-size: 15px;
        /* text-align: center; */
    }        

    .logout {
        color: gray;
        font-weight: lighter;
        text-align: right;
        position: relative;
        float: right;
    }

    </style>
    
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

        <style>
        
        .header {
            color: black;
            padding: 10px;
            background-color: rgb(182, 214, 20);
            font-size: 15px;
            /* text-align: center; */
        }        

        .logout {
            color: gray;
            font-weight: lighter;
            text-align: right;
            position: relative;
            float: right;
        }
        
        </style>


        <div class = "header">
        <br>
        <div style="text-align: center;">
            <img src="logo.svg" alt="logo.png" width="235">
        </div>
        <h3>SMART-Lab: Learn to work better</h3>
    </div>
    <br>
    `;
    }
    }
    

customElements.define('temp-header', Header);
customElements.define('temp-header-minus', HeaderMinus);
