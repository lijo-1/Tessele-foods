const ShopLocal = () => {
    return (
        <div className="px-10 py-5 bg-emerald">
            <div>
                <h2 className='text-white font-bold text-lg text-center font-Mont '>Shop Local</h2>
                <iframe
                    title="JPS Gardens Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.783162195466!2d76.867692774818!3d10.751188159659161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba841a996846ead%3A0x2d51ec339eb0e2e6!2sJPS%20Gardens!5e0!3m2!1sen!2sin!4v1696265432487!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{ border: '0' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
    );
}

export default ShopLocal;