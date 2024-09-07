import TopBar from "../components/TopBar";

const WelcomePage = () => {

    return (
        <>
            <TopBar />
            <div className="page-body">
                <h1>TMBM  (Trust me bro news)</h1>
                <p>
                    This project is meant to be an interactive interesting experiment on how AI could be used to generate fake news ,<br />
                    in no way should be used as a legitamite source for information.<br />
                    Thank you and enjoy

                </p>

                <button>Start the Lie</button>

            </div>
        </>

    );
}


export default WelcomePage;