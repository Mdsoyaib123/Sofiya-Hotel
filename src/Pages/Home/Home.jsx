import moment from "moment/moment";

const Home = () => {
    const now = moment();
    const formattedDate = now.format('YYYY-MM-DD ');
    return (
        <div>
            <p>{formattedDate}</p>
          
        </div>
    );
};

export default Home;