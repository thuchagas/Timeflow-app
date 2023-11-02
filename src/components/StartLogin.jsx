export const StartLogin = () => {
    return (
        <>
        <section className="containerGetStarted__img">
            <image 
            src={'../src/assets/images/timeflow.svg'}
            alt="Dibujo de varios elementos que envuelva el tiempo"
             ></image>
        </section>
        <section className="containerGetStarted__Button">
            <h2 className="title__GetStarted">Time Flow</h2>
            <p className="description__GetStarted">Herramienta que te ayudará a organizar tu vida</p>
            <button 
                type="submit"
                id="button__GetStart">Get Started
            </button>
        </section>
        </>

    );
}
