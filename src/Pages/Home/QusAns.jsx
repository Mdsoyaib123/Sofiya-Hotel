
const QusAns = () => {
    return (
        <div className="lg:w-full lg:flex gap-10 ">
            <div className="w-1/2 font-bold space-y-5 pt-5 text-slate-800"data-aos="fade-right"data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">
                <h1 className="text-5xl ">Frequently Asked Questions</h1>
                <p>You can book messages 7 days a week from 6am <br></br> to 11pm,including public holidays</p>
            </div>
            <div className="lg:w-1/2 space-y-4" data-aos="fade-right"data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">
                <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" checked="checked" /> 
                <div className="collapse-title text-xl font-medium">
                How can I contact customer support?
                </div>
                <div className="collapse-content"> 
                    <p>You can reach our customer support team via email, phone, or live chat. Visit our Contact Us page for more information and contact details.</p>
                </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                What payment methods do you accept?
                </div>
                <div className="collapse-content"> 
                    <p>We accept various payment methods, including credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. Payment options may vary depending on the hotel and location.</p>
                </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                Can I cancel or modify my reservation?
                </div>
                <div className="collapse-content"> 
                    <p>Yes, you can cancel or modify your reservation, but there may be cancellation fees or restrictions depending on the hotels policy. Check the cancellation policy when booking.</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default QusAns;