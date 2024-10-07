class ClassesRenderer {
    constructor(uxfJson, saludo) {
        this.uxfJson = uxfJson;
        this.saludo = saludo;
    }

    render() {
        return ejs.render(`
            <div>
                <h1 class="saludo">Hola <%= saludo %></h1>
            </div>
        `, {saludo: this.saludo});
    }
}
